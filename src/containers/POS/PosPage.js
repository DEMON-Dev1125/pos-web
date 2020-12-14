import React, { useState } from "react";
import PosHeader from "./PosHeader";
import VariantsProduct from "../../components/products/VariantsProduct";
import StockProduct from "../../components/products/StockProduct";
import SpotProduct from "../../components/products/SpotProduct";
import OutStockProduct from "../../components/products/OutStockProduct";
import { products } from "../../constants";
import ReactPageScroller from "react-page-scroller";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowDownwardSharp, ArrowUpwardSharp } from "@material-ui/icons";
import VariantDialog from "../Dialogs/VariantDialog";
import VolumeDialog from "../Dialogs/VolumeDialog";
import ModifierDialog from "../Dialogs/ModifersDialog";
import { StickyContainer } from "react-sticky";
const useStyle = makeStyles((theme) => ({
  paginationBtn: {
    width: 40,
    height: 40,
  },
  startIcon: {
    marginLeft: 12,
  },
}));

function PosPage(props) {
  const classes = useStyle();
  function changeCategory(e) {
    setCategory(e);
  }
  function changeSearch(e) {
    setSearchWord(e);
  }
  const [category, setCategory] = useState("Popular");
  const [pageIndex, setPageIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [isVariant, setIsVariant] = useState(false);
  const [isModifier, setIsModifier] = useState(false);
  const [isVolume, setIsVolume] = useState(false);
  const [variantProduct, setVariantProduct] = useState({});
  const [modifierProduct, setModifierProdut] = useState({});
  const [volumeProduct, setVolumeProduct] = useState({});
  const [searchWord, setSearchWord] = useState("");
  const productList = products.filter((item) => {
    if (item.category === category) {
      return item;
    }
  });
  function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      var myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
  }
  function getAllProducts(products) {
    var tempArray = [];
    var tempSub = [];
    products.subCategory.forEach((item, index) => {
      var flag = item.products.filter((item, index) => {
        return item.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      var midArray = chunkArray(
        flag.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        }),
        20
      );
      tempArray = tempArray.concat(midArray);
      for (let i = 0; i < midArray.length; i++) {
        tempSub.push(item.title);
      }
    });
    return [tempArray, tempSub];
  }

  function handlePageChange(pIndex) {
    setPageIndex(pIndex);
    setTitleIndex(pIndex);
    const pageNumbers = getAllProducts(productList[0])[1].length - 1;
    if (pIndex === 0) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }
    if (pIndex === pageNumbers) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
  }

  function handleDownPage() {
    setPageIndex((prevState) => {
      let flag = prevState;
      flag += 1;
      return flag;
    });
  }
  function handleUpPage() {
    setPageIndex((prevState) => {
      let flag = prevState;
      flag -= 1;
      return flag;
    });
  }

  function handleProductClick(item, index) {
    if (item.type === 4) {
      if (item.name === "bread") {
        setIsModifier(true);
        let prod = { ...item, amount: 1 };
        setModifierProdut(prod);
        return;
      }
      setIsVariant(true);
      let prod = { ...item, amount: 1 };
      setVariantProduct(prod);
      return;
    }
    if (item.type === 2) {
      setIsVolume(true);
      let prod = { ...item, amount: 0.0 };
      setVolumeProduct(prod);
      return;
    }
    props.productClick(item);
  }

  function handleVariantClose() {
    setIsVariant(false);
  }
  function handleModifiers() {
    setIsModifier(false);
  }
  function handleVolumeClose() {
    setIsVolume(false);
  }

  function onCheckOut(data) {
    setIsVariant(false);
    props.productClick(data);
  }
  function onCheckOutModifier(data) {
    setIsModifier(false);
    props.productClick(data);
  }
  function onCheckOutVolume(data) {
    setIsVolume(false);
    props.productClick(data);
  }
  const aa = () => {
    console.log(getAllProducts(productList[0])[1]);
  };
  return (
    <div className={props.classes}>
      <VariantDialog
        open={isVariant}
        data={variantProduct}
        onClose={handleVariantClose}
        onCheckOut={onCheckOut}
      />
      <ModifierDialog
        open={isModifier}
        data={modifierProduct}
        onClose={handleModifiers}
        onCheckOut={onCheckOutModifier}
      />
      <VolumeDialog
        open={isVolume}
        data={volumeProduct}
        onClose={handleVolumeClose}
        onCheckOut={onCheckOutVolume}
      />
      <PosHeader
        changeCategory={changeCategory}
        products={products}
        changeSearch={changeSearch}
      />
      <div className={"p-10"}>
        {!productList[0].subCategory ? (
          <div>
            <div className={"flex flex-row justify-between"}>
              <div className={"pt-20"}>
                <p
                  className={"m-0 p-0 fw-bold fs-18 f-ls-19 color-2d"}
                  style={{ color: "#252631" }}
                >
                  {productList[0].category}
                </p>
              </div>
            </div>
            <div className={"productsContainer"}>
              {productList[0].products
                .sort((a, b) => {
                  if (a.name > b.name) {
                    return 1;
                  }
                  if (b.name > a.name) {
                    return -1;
                  }
                  return 0;
                })
                .filter((item, index) => {
                  return item.name
                    .toLowerCase()
                    .includes(searchWord.toLowerCase());
                })
                .map((item, index) => (
                  <div
                    className={"sProduct"}
                    key={index}
                    onClick={() => handleProductClick(item, index)}
                  >
                    {item.type === 1 && (
                      <SpotProduct name={item.name} price={item.price} />
                    )}
                    {item.type === 2 && (
                      <StockProduct
                        name={item.name}
                        price={item.price}
                        stockNumber={item.stock}
                      />
                    )}
                    {item.type === 3 && (
                      <OutStockProduct name={item.name} price={item.price} />
                    )}
                    {item.type === 4 && (
                      <VariantsProduct
                        name={item.name}
                        price={item.price}
                        stockNumber={item.stock}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={"flex flex-row justify-between"}>
              <div className={"pt-20"}>
                <p
                  className={"m-0 p-0 fw-bold fs-18 f-ls-19 color-2d"}
                  style={{ color: "#252631" }}
                >
                  {getAllProducts(productList[0])[1][titleIndex]}
                </p>
              </div>
              <div>
                <ButtonGroup aria-label="outlined secondary button group">
                  <Button
                    disabled={isFirst}
                    className={classes.paginationBtn}
                    onClick={handleUpPage}
                    startIcon={
                      <ArrowUpwardSharp className={classes.startIcon} />
                    }
                  />

                  <Button
                    disabled={isLast}
                    className={classes.paginationBtn}
                    startIcon={
                      <ArrowDownwardSharp className={classes.startIcon} />
                    }
                    onClick={handleDownPage}
                  />
                </ButtonGroup>
              </div>
            </div>
            {/* <ReactPageScroller
                                containerWidth={'calc(100vw - 290px)'}
                                containerHeight={'calc(100vh - 150px)'}
                                pageOnChange={handlePageChange}
                                customPageNumber={pageIndex}
                            >
                                {
                                    getAllProducts(productList[0])[0].map((subproducts, subIndex) => {
                                        return (
                                            <div className='productsContainer' key={subIndex}>
                                                {
                                                    subproducts.map((item, index) => (
                                                        <div className='sProduct' key={index} onClick={() => handleProductClick(item)}>
                                                            {
                                                                item.type === 1 && <SpotProduct name={item.name} price={item.price}/>
                                                            }
                                                            {
                                                                item.type === 2 && <StockProduct name={item.name} price={item.price} stockNumber={item.stock}/>
                                                            }
                                                            {
                                                                item.type === 3 && <OutStockProduct name={item.name} price={item.price}/>
                                                            }
                                                            {
                                                                item.type === 4 && <VariantsProduct name={item.name} price={item.price} stockNumber={item.stock}/>
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )}
                                    )
                                }
                            </ReactPageScroller> */}
            {getAllProducts(productList[0])[0].map((subproducts, subIndex) => {
              // console.log(subproducts, subIndex);
            })}
            {aa()}
            <StickyContainer></StickyContainer>
            <ReactPageScroller
              containerWidth={"calc(100vw - 290px)"}
              containerHeight={"calc(100vh - 150px)"}
              pageOnChange={handlePageChange}
              customPageNumber={pageIndex}
            >
              {getAllProducts(productList[0])[0].map(
                (subproducts, subIndex) => {
                  return (
                    <div className="productsContainer" key={subIndex}>
                      {subproducts.map((item, index) => (
                        <div
                          className="sProduct"
                          key={index}
                          onClick={() => handleProductClick(item)}
                        >
                          {item.type === 1 && (
                            <SpotProduct name={item.name} price={item.price} />
                          )}
                          {item.type === 2 && (
                            <StockProduct
                              name={item.name}
                              price={item.price}
                              stockNumber={item.stock}
                            />
                          )}
                          {item.type === 3 && (
                            <OutStockProduct
                              name={item.name}
                              price={item.price}
                            />
                          )}
                          {item.type === 4 && (
                            <VariantsProduct
                              name={item.name}
                              price={item.price}
                              stockNumber={item.stock}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  );
                }
              )}
            </ReactPageScroller>
          </div>
        )}
      </div>
    </div>
  );
}

export default PosPage;
