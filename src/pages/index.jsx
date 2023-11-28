import React from "react";

import { Button, Img, Line, List, Radio, RadioGroup, Text } from "components";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-neurialgrotesk items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="bg-green-900_33 border-b border-solid flex md:flex-col md:gap-10 gap-[387px] items-center justify-center md:px-5 px-[216px] py-6 w-full white_A700_3f_white_A700_3f_border">
          <Img
            className="h-6 w-[99px]"
            src="images/img_frame.svg"
            alt="frame"
          />
          <div className="flex sm:flex-1 flex-row gap-14 items-center justify-end w-auto sm:w-full">
            <ul className="flex flex-row gap-[34px] sm:hidden items-start justify-start w-auto common-row-list">
              <li>
                <a href="javascript:" className="text-gray-50 text-sm">
                  <Text size="txtNeurialGroteskRegular14">Career</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-gray-50 text-sm">
                  <Text size="txtNeurialGroteskRegular14">Blogs</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-gray-50 text-sm">
                  <Text size="txtNeurialGroteskRegular14">Leaderboard</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-gray-50 text-sm">
                  <Text size="txtNeurialGroteskRegular14">Fees</Text>
                </a>
              </li>
            </ul>
            <Button
              className="cursor-pointer font-bold h-12 leading-[normal] min-w-[161px] text-base text-center uppercase"
              color="lime_A200_green_A400"
            >
              Trade Now
            </Button>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[76px] items-center justify-center pb-[120px] pt-20 w-full container">
          <div className="flex flex-col gap-10 items-center justify-center md:px-5 w-auto md:w-full">
            <div className="flex flex-col justify-start w-full">
              <Text
                className="leading-[100.00px] md:text-5xl text-8xl text-center text-white-A700 tracking-[-4.19px]"
                size="txtNeurialGroteskBold96"
              >
                <span className="text-white-A700 font-neurialgrotesk font-bold">
                  <>
                    It’s time to trade,
                    <br />
                    the{" "}
                  </>
                </span>
                <span className="text-light_green-500 font-neurialgrotesk font-bold">
                  future.
                </span>
              </Text>
              <Text
                className="backdrop-opacity-[0.5] bg-clip-text bg-gradient2  blur-[33.00px] md:ml-[0] ml-[287px] md:text-5xl text-8xl text-center text-transparent tracking-[-4.19px]"
                size="txtNeurialGroteskBold96LimeA200b2"
              >
                future.
              </Text>
            </div>
            <Text
              className="capitalize text-2xl md:text-[22px] text-center text-gray-200 sm:text-xl w-auto"
              size="txtNeurialGroteskRegular24"
            >
              Trade BTC, ETH Futures with 125x leverage and earn rewards.
            </Text>
          </div>
          <div className="sm:h-[1096px] h-[668px] md:px-5 relative w-[54%] md:w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="h-[529px] relative w-[34%] sm:w-full">
                  <Img
                    className="h-[529px] m-auto object-cover w-full"
                    src="images/img_shadow.png"
                    alt="shadow"
                  />
                  <div className="absolute h-[529px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[529px] m-auto object-cover w-full"
                      src="images/img_main.png"
                      alt="main"
                    />
                    <Img
                      className="absolute h-[508px] inset-[0] justify-center m-auto object-cover w-[91%]"
                      src="images/img_iphone14prospace.png"
                      alt="iphone14prospac"
                    />
                  </div>
                </div>
                <div className="h-[527px] relative w-[34%] sm:w-full">
                  <Img
                    className="h-[527px] m-auto object-cover w-full"
                    src="images/img_shadow.png"
                    alt="shadow_One"
                  />
                  <div className="absolute h-[527px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[527px] m-auto object-cover w-full"
                      src="images/img_main.png"
                      alt="main_One"
                    />
                    <Img
                      className="absolute h-[506px] inset-[0] justify-center m-auto object-cover w-[90%]"
                      src="images/img_iphone14prospace_506x234.png"
                      alt="iphone14prospac_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[668px] inset-[0] justify-center m-auto w-[43%]">
              <Img
                className="h-[668px] m-auto object-cover w-full"
                src="images/img_shadow.png"
                alt="shadow_Two"
              />
              <div className="absolute h-[668px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[668px] m-auto object-cover w-full"
                  src="images/img_main.png"
                  alt="main_Two"
                />
                <Img
                  className="absolute h-[641px] inset-[0] justify-center m-auto object-cover w-[91%]"
                  src="images/img_iphone14prospace_641x297.png"
                  alt="iphone14prospac_Two"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[216px] w-full container">
          <List
            className="dream bg-black-900_0c border border-solid sm:flex-col flex-row md:gap-10 green_A400_3f_lime_300_3f_border grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] h-[171px] justify-between max-w-[1014px] mx-auto md:px-5 shadow-bs1 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-lime-A200_02 w-auto"
                size="txtNeurialGroteskBold40"
              >
                00%
              </Text>
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtNeurialGroteskMedium16"
              >
                Conversion Fee{" "}
              </Text>
            </div>
            <Line className="self-center h-[171px] bg-gradient3  w-px" />
            <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-lime-A200_02 w-auto"
                size="txtNeurialGroteskBold40"
              >
                500 Mn+
              </Text>
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtNeurialGroteskMedium16"
              >
                Lifetime Volume Traded
              </Text>
            </div>
            <Line className="self-center h-[171px] bg-gradient3  w-px" />
            <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-lime-A200_02 w-auto"
                size="txtNeurialGroteskBold40"
              >
                250+
              </Text>
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtNeurialGroteskMedium16"
              >
                Total Tradable Pairs
              </Text>
            </div>
            <Line className="self-center h-[171px] bg-gradient3  w-px" />
            <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-lime-A200_02 w-auto"
                size="txtNeurialGroteskBold40"
              >
                15,000+
              </Text>
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtNeurialGroteskMedium16"
              >
                Traders
              </Text>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-center pb-60 pt-[120px] w-full container ">
          <div className="h-[560px] md:px-5 relative w-1/5">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
              <div className="backdrop-opacity-[0.5] bg-black-900 blur-[5.00px] h-[560px] outline outline-[0.5px] rounded-[35px] teal_400_lime_300_00_border w-full"></div>
            </div>
            <div className="absolute backdrop-opacity-[0.5] bg-lime-400_7e blur-[4.00px] bottom-[38%] h-[17px] left-[0] rounded-lg w-[1%]"></div>
            <div className="absolute backdrop-opacity-[0.5] bg-white-A700_87 blur-[4.00px] h-6 right-[0] rotate-[-180deg] rounded-[12px] top-[19%] w-[1%]"></div>
            <div className="absolute flex flex-col gap-[11px] h-max inset-[0] items-center justify-center m-auto w-[62%]">
              <Img
                className="h-[186px]"
                src="images/img_group18145967.svg"
                alt="group18145967"
              />
              <Text
                className="leading-[40.00px] sm:text-[29.5px] md:text-[31.5px] text-[33.5px] text-center text-white-A700 tracking-[-0.80px]"
                size="txtNeurialGroteskLight335"
              >
                <>
                  One App.
                  <br />
                  Endless <br />
                  Possibilities
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start md:px-5 w-1/5 md:w-full">
            <div className="backdrop-opacity-[0.5] bg-lime-400_7e blur-[4.00px] h-[17px] mb-[212px] mt-[330px] rounded-lg w-[1%]"></div>
            <div className="backdrop-opacity-[0.5] bg-black-900 blur-[5.00px] flex flex-col items-center justify-start outline outline-[0.5px] p-[61px] md:px-10 sm:px-5 rounded-[35px] teal_400_lime_300_00_border2 w-[99%]">
              <div className="flex flex-col gap-[37px] items-center justify-start mb-[124px] mt-[78px] w-[97%] md:w-full">
                <Img
                  className="h-[70px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="sm:text-[29.5px] md:text-[31.5px] text-[33.5px] text-center text-white-A700 tracking-[-0.80px]"
                  size="txtNeurialGroteskLight335"
                >
                  <>
                    Future of <br />
                    Derivative <br />
                    Trading.
                  </>
                </Text>
              </div>
            </div>
            <div className="backdrop-opacity-[0.5] bg-white-A700_87 blur-[4.00px] h-6 mb-[430px] mt-[105px] rotate-[-180deg] rounded-[12px] w-[1%]"></div>
          </div>
          <div className="h-[560px] md:px-5 relative w-1/5">
            <div className="absolute h-[560px] inset-[0] justify-center m-auto w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-black-900 blur-[1.00px] h-[560px] inset-[0] justify-center m-auto outline outline-[1px] rounded-[35px] teal_700_lime_300_00_border w-full"></div>
              <div className="absolute backdrop-opacity-[0.5] bg-black-900 blur-[5.00px] flex flex-col gap-[5px] h-full inset-[0] items-center justify-center m-auto outline outline-[0.5px] p-12 md:px-10 sm:px-5 rounded-[35px] teal_400_lime_300_00_border3 w-full">
                <div className="bg-green-500 h-0.5 mt-[87px] rotate-[-6deg] rounded-[50%] w-0.5"></div>
                <div className="h-[198px] md:h-[365px] mb-[168px] relative w-[97%]">
                  <Img
                    className="absolute h-2.5 left-[26%] top-[9%] w-2.5"
                    src="images/img_close.svg"
                    alt="close"
                  />
                  <div className="absolute bg-green-500 h-0.5 left-[33%] rotate-[-6deg] rounded-[50%] top-1/4 w-0.5"></div>
                  <div className="absolute bg-white-A700 h-0.5 left-[41%] rotate-[-6deg] rounded-[50%] top-[37%] w-0.5"></div>
                  <div className="absolute bg-white-A700 h-px right-[36%] rotate-[-6deg] rounded-[50%] top-[34%] w-px"></div>
                  <div className="bg-green-500 h-[3px] ml-auto mr-[59px] rotate-[-6deg] rounded-[1px] w-[3px]"></div>
                  <div className="absolute flex flex-col gap-[43px] h-full inset-[0] items-center justify-center m-auto w-full">
                    <Img
                      className="h-[67px] md:h-auto object-cover"
                      src="images/img_group626832.png"
                      alt="group626832"
                    />
                    <Text
                      className="sm:text-[29.5px] md:text-[31.5px] text-[33.5px] text-center text-white-A700 tracking-[-0.80px]"
                      size="txtNeurialGroteskLight335"
                    >
                      <>
                        Is now here, <br />
                        for you.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute backdrop-opacity-[0.5] bg-lime-400_7e blur-[4.00px] bottom-[38%] h-[17px] left-[0] rounded-lg w-[1%]"></div>
            <div className="absolute backdrop-opacity-[0.5] bg-white-A700_87 blur-[4.00px] h-6 right-[0] rotate-[-180deg] rounded-[12px] top-[19%] w-[1%]"></div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-start py-[140px] w-full container ">
          <div className="flex flex-col gap-6 items-center justify-start md:px-5 w-auto md:w-full">
            <Text
              className="md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.10px] w-auto"
              size="txtNeurialGroteskBold72"
            >
              <span className="text-white-A700 font-neurialgrotesk font-bold">
                Trade More.{" "}
              </span>
              <span className="text-lime-A200_02 font-neurialgrotesk font-bold">
                Pay Less.
              </span>
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-200 sm:text-xl w-auto"
              size="txtNeurialGroteskRegular24"
            >
              Our low Fees Supercharge Your Profits
            </Text>
          </div>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center md:px-10 sm:px-5 px-[150px] w-full">
            <div className="bg-gray-900 flex flex-1 flex-col gap-[42px] items-center justify-start pb-[82px] pr-[82px] md:px-5 w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[239px] items-end justify-end p-4 w-full"
                style={{ backgroundImage: "url('images/img_group6.svg')" }}
              >
                <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start mr-[11px] mt-[38px] w-[58%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-full"
                    src="images/img_image92.png"
                    alt="imageNinetyTwo"
                  />
                  <div className="flex flex-col gap-[5px] items-center justify-center w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.69px] w-auto"
                      size="txtNeurialGroteskBold32"
                    >
                      0.025
                    </Text>
                    <Text
                      className="text-white-A700_87 text-xl tracking-[-1.69px] w-auto"
                      size="txtNeurialGroteskRegular20"
                    >
                      Maker Fees
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] items-center justify-center w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.69px] w-auto"
                  size="txtNeurialGroteskBold32"
                >
                  0.07
                </Text>
                <Text
                  className="text-white-A700_87 text-xl tracking-[-1.69px] w-auto"
                  size="txtNeurialGroteskRegular20"
                >
                  Taker Fees
                </Text>
              </div>
            </div>
            <div className="bg-gradient4  flex h-[438px] justify-end md:px-5 relative shadow-bs2 w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[239px] items-end justify-end left-[0] p-[7px] top-[0] w-[78%]"
                style={{ backgroundImage: "url('images/img_group6.svg')" }}
              >
                <div className="flex flex-col gap-[52px] justify-start mr-2.5 mt-11 w-[68%] md:w-full">
                  <Img
                    className="h-11 w-[183px]"
                    src="images/img_frame1000005513.svg"
                    alt="frame1000005513"
                  />
                  <div className="flex flex-col gap-1 items-center justify-center ml-11 md:ml-[0] w-auto">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-1.69px] w-auto"
                      size="txtNeurialGroteskBold40Black900"
                    >
                      0.02
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_87 sm:text-xl tracking-[-1.69px] w-auto"
                      size="txtNeurialGroteskRegular24Black90087"
                    >
                      Maker Fees
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 h-full items-center justify-center mb-[73px] mt-auto mx-auto w-auto">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-1.69px] w-auto"
                  size="txtNeurialGroteskBold40Black900"
                >
                  0.04
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-black-900_87 sm:text-xl tracking-[-1.69px] w-auto"
                  size="txtNeurialGroteskRegular24Black90087"
                >
                  Taker Fees
                </Text>
              </div>
              <Img
                className="absolute h-[438px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_texture.png"
                alt="texture"
              />
            </div>
            <div className="bg-gray-900 flex flex-1 flex-col gap-[42px] items-center justify-start pb-[82px] pr-[82px] md:px-5 w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[239px] items-end justify-start p-[3px] w-full"
                style={{ backgroundImage: "url('images/img_group6.svg')" }}
              >
                <div className="flex flex-col gap-[42px] items-center justify-start mb-3 mt-[41px] w-[70%] md:w-full">
                  <Img
                    className="h-[61px] md:h-auto object-cover w-full"
                    src="images/img_image93.png"
                    alt="imageNinetyThree"
                  />
                  <div className="flex flex-col gap-[5px] items-center justify-center w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.69px] w-auto"
                      size="txtNeurialGroteskBold32"
                    >
                      0.02
                    </Text>
                    <Text
                      className="text-white-A700_87 text-xl tracking-[-1.69px] w-auto"
                      size="txtNeurialGroteskRegular20"
                    >
                      Maker Fees
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] items-center justify-center w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.69px] w-auto"
                  size="txtNeurialGroteskBold32"
                >
                  0.05
                </Text>
                <Text
                  className="text-white-A700_87 text-xl tracking-[-1.69px] w-auto"
                  size="txtNeurialGroteskRegular20"
                >
                  Taker Fees
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start py-[140px] w-full container ">
          <div className="flex flex-col gap-6 items-center justify-start md:px-5 w-auto md:w-full">
            <Text
              className="leading-[76.00px] md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.10px]"
              size="txtNeurialGroteskBold72"
            >
              <span className="text-white-A700 font-neurialgrotesk font-bold">
                <>
                  Explore the Markets
                  <br />
                </>
              </span>
              <span className="text-white-A700 font-neurialgrotesk font-bold">
                like it is your{" "}
              </span>
              <span className="text-lime-A200_02 font-neurialgrotesk font-bold">
                Playground.
              </span>
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-200 sm:text-xl w-auto"
              size="txtNeurialGroteskRegular24"
            >
              Search for your favorite coins and stay ahead of the market
            </Text>
          </div>
          <div className="md:h-[652px] h-[671px] max-w-[1134px] mx-auto md:px-5 relative w-full">
            <div className="absolute md:h-[442px] h-[651px] inset-[0] justify-center m-auto w-full">
              <div className="absolute h-[651px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[445px] mb-[-97.77px] mx-auto z-[1]"
                  src="images/img_chart.svg"
                  alt="chart"
                />
                <Img
                  className="h-[303px] mt-auto mx-auto object-cover w-full"
                  src="images/img_rectangle.png"
                  alt="rectangle"
                />
              </div>
              <Img
                className="absolute bottom-[14%] h-[390px] left-[14%] object-cover"
                src="images/img_vector1173.png"
                alt="vector1173"
              />
              <Img
                className="absolute bottom-[14%] h-[442px] left-[11%] object-cover"
                src="images/img_vector1173.png"
                alt="vector1174"
              />
            </div>
            <List
              className="absolute sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-start mx-auto top-[33%] w-auto"
              orientation="horizontal"
            >
              <div className="bg-gray-900_01 flex flex-col gap-[19px] items-start justify-start pb-2 pt-4 px-4 rounded-lg shadow-bs3 w-[270px]">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <div className="flex flex-col h-8 items-center justify-start w-8">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_vector_32x32.png"
                            alt="vector"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium14"
                      >
                        Bitcoin
                      </Text>
                      <Text
                        className="text-gray-500_02 text-xs tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium12"
                      >
                        BTC/USDT
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[27px] md:h-auto object-cover w-[73px]"
                    src="images/img_vector_27x73.png"
                    alt="vector_One"
                  />
                </div>
                <div className="flex flex-row gap-8 items-start justify-between w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-[10px] text-gray-500_02 tracking-[0.20px] w-auto"
                      size="txtNeurialGroteskMedium10"
                    >
                      Price
                    </Text>
                    <Text
                      className="text-blue_gray-100 text-lg tracking-[0.20px] w-auto"
                      size="txtNeurialGroteskMedium18"
                    >
                      $25,776.80
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-end justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500_02 tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium10"
                      >
                        VOL
                      </Text>
                      <Text
                        className="text-blue_gray-100 text-xs tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium12Bluegray100"
                      >
                        $8.5B
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500_02 tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium10"
                      >
                        CHG
                      </Text>
                      <Text
                        className="text-teal-400_01 text-xs tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium12Teal40001"
                      >
                        23.1%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col gap-[19px] items-start justify-start pb-2 pt-4 px-4 rounded-lg shadow-bs3 w-[270px]">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium14"
                      >
                        Solana
                      </Text>
                      <Text
                        className="text-gray-500_02 text-xs tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium12"
                      >
                        SOL/USDT
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-8 md:h-auto object-cover w-[73px]"
                    src="images/img_vector_32x73.png"
                    alt="vector"
                  />
                </div>
                <div className="flex flex-row gap-8 items-start justify-between w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-[10px] text-gray-500_02 tracking-[0.20px] w-auto"
                      size="txtNeurialGroteskMedium10"
                    >
                      Price
                    </Text>
                    <Text
                      className="text-blue_gray-100 text-lg tracking-[0.20px] w-auto"
                      size="txtNeurialGroteskMedium18"
                    >
                      $18.07
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-end justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500_02 tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium10"
                      >
                        VOL
                      </Text>
                      <Text
                        className="text-blue_gray-100 text-xs tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium12Bluegray100"
                      >
                        $372.8M
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500_02 tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium10"
                      >
                        CHG
                      </Text>
                      <Text
                        className="text-teal-400_01 text-xs tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium12Teal40001"
                      >
                        02.1%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col gap-[19px] items-start justify-start pb-2 pt-4 px-4 rounded-lg shadow-bs3 w-[270px]">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_save.svg"
                      alt="save"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium14"
                      >
                        Ethereum
                      </Text>
                      <Text
                        className="text-gray-500_02 text-xs tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium12"
                      >
                        ETH/USDT
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[27px] md:h-auto object-cover w-[73px]"
                    src="images/img_vector_27x73.png"
                    alt="vector"
                  />
                </div>
                <div className="flex flex-row gap-8 items-start justify-between w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-[10px] text-gray-500_02 tracking-[0.20px] w-auto"
                      size="txtNeurialGroteskMedium10"
                    >
                      Price
                    </Text>
                    <Text
                      className="text-blue_gray-100 text-lg tracking-[0.20px] w-auto"
                      size="txtNeurialGroteskMedium18"
                    >
                      $1,607.11
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-end justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500_02 tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium10"
                      >
                        VOL
                      </Text>
                      <Text
                        className="text-blue_gray-100 text-xs tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium12Bluegray100"
                      >
                        $4.6B
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500_02 tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium10"
                      >
                        CHG
                      </Text>
                      <Text
                        className="text-teal-400_01 text-xs tracking-[0.20px] w-auto"
                        size="txtNeurialGroteskMedium12Teal40001"
                      >
                        12.1%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <Img
              className="absolute h-[652px] inset-y-[0] left-[0] my-auto object-cover w-[96%]"
              src="images/img_texture.png"
              alt="texture_One"
            />
          </div>
          <Button
            className="cursor-pointer font-bold h-12 leading-[normal] min-w-[268px] text-center text-lg uppercase"
            color="lime_A200_green_A400"
          >
            Explore Markets
          </Button>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start py-[150px] w-full container ">
          <div className="flex flex-col gap-7 items-center justify-start md:px-5 w-auto md:w-full">
            <Text
              className="md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.10px] w-auto"
              size="txtNeurialGroteskBold72"
            >
              <span className="text-lime-A200_02 font-neurialgrotesk font-bold">
                Unlock
              </span>
              <span className="text-lime-A200 font-neurialgrotesk font-bold">
                {" "}
              </span>
              <span className="text-white-A700 font-neurialgrotesk font-bold">
                New Frontiers.
              </span>
            </Text>
            <Text
              className="leading-[32.00px] max-w-[659px] md:max-w-full sm:text-[18.37px] md:text-[20.37px] text-[22.37px] text-center text-gray-200"
              size="txtNeurialGroteskRegular2237"
            >
              Are you a stock trader looking for new opportunities to make
              money? We got you covered!
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1140px] mx-auto md:px-5 w-full">
            <List
              className="bg-black-900_66 border border-solid border-white-A700_3f sm:flex-col flex-row md:gap-10 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] h-[171px] justify-between max-w-[1140px] rounded-lg w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtNeurialGroteskBold32"
                >
                  <>
                    Same
                    <br />
                    Strategies
                  </>
                </Text>
              </div>
              <Line className="self-center h-[88px] bg-gray-500 w-px" />
              <div className="flex flex-1 flex-col items-center justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtNeurialGroteskBold32"
                >
                  <>
                    Same
                    <br />
                    Indicators
                  </>
                </Text>
              </div>
              <Line className="self-center h-[88px] bg-gray-500 w-px" />
              <div className="flex flex-1 flex-col items-center justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtNeurialGroteskBold32"
                >
                  <>
                    Better
                    <br />
                    Leverage
                  </>
                </Text>
              </div>
              <Line className="self-center h-[88px] bg-gray-500 w-px" />
              <div className="flex flex-1 flex-col items-center justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtNeurialGroteskBold32"
                >
                  <>
                    24x7
                    <br />
                    Trading
                  </>
                </Text>
              </div>
            </List>
            <div className="md:h-[1225px] h-[510px] relative w-full">
              <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start max-w-[966px] ml-[54px] mt-[34px] w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[59%] md:w-full">
                  <div className="overflow-x-auto w-full">
                    <div className="h-[420px] md:h-[440px] relative w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-start justify-start my-auto p-[17px] right-[0] w-full"
                        style={{
                          backgroundImage: "url('images/img_group9.png')",
                        }}
                      >
                        <div className="flex flex-col justify-start ml-2.5 md:ml-[0] w-[69%] md:w-full">
                          <div className="flex flex-row items-end justify-between w-[64%] md:w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtNeurialGroteskRegular24WhiteA700"
                            >
                              BTCUSDT
                            </Text>
                            <Radio
                              value="Sell"
                              className="leading-[normal] my-[5px] text-left text-red-A200 text-sm"
                              inputClassName="mr-[5px]"
                              checked={false}
                              name="sell"
                              label="Sell"
                              id="Sell"
                            ></Radio>
                          </div>
                          <RadioGroup
                            className="flex flex-col md:ml-[0] ml-[73px] mt-[139px] w-[84%]"
                            name="radiogroupsellOne"
                          >
                            <Radio
                              value="Sell"
                              className="leading-[normal] mr-[325px] mt-[13px] text-left text-red-A200 text-sm"
                              inputClassName="mr-[5px]"
                              checked={false}
                              name="radiogroupsellOne"
                              label="Sell"
                              id="Sell2"
                            ></Radio>
                            <Radio
                              value="Buy"
                              className="leading-[normal] mb-3 ml-[324px] text-green-A200 text-left text-sm"
                              inputClassName="mr-[5px]"
                              checked={false}
                              name="radiogroupsellOne"
                              label="Buy"
                              id="Buy"
                            ></Radio>
                          </RadioGroup>
                          <Radio
                            value="Buy"
                            className="leading-[normal] md:ml-[0] ml-[124px] mt-[159px] text-green-A200 text-left text-sm"
                            inputClassName="mr-[5px]"
                            checked={false}
                            name="buyOne"
                            label="Buy"
                            id="Buy2"
                          ></Radio>
                        </div>
                      </div>
                      <Radio
                        value="Sell"
                        className="leading-[normal] text-left text-red-A200 text-sm"
                        inputClassName="absolute mr-[5px]"
                        checked={false}
                        name="sellTwo"
                        label="Sell"
                        id="Sell3"
                      ></Radio>
                    </div>
                  </div>
                </div>
                <Line className="bg-gradient5  h-[420px] md:h-px md:w-full w-px" />
                <div className="md:h-[311px] h-[420px] py-[34px] relative w-[42%] md:w-full">
                  <div className="absolute bottom-[10%] inset-x-[0] mx-auto overflow-x-auto w-full">
                    <div className="md:h-[298px] h-[311px] relative w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-end justify-end left-[0] my-auto w-full"
                        style={{
                          backgroundImage: "url('images/img_group10.png')",
                        }}
                      >
                        <Radio
                          value="Buy"
                          className="leading-[normal] mr-[271px] mt-[280px] text-green-A200 text-left text-sm"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="buyTwo"
                          label="Buy"
                          id="Buy3"
                        ></Radio>
                      </div>
                      <RadioGroup
                        className="absolute flex flex-col right-[0] top-[0] w-[34%]"
                        name="radiogroupbuyThree"
                      >
                        <Radio
                          value="Buy"
                          className="leading-[normal] ml-[84px] mt-[65px] text-green-A200 text-left text-sm"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroupbuyThree"
                          label="Buy"
                          id="Buy4"
                        ></Radio>
                        <Radio
                          value="Sell"
                          className="leading-[normal] mb-[65px] mr-[85px] text-left text-red-A200 text-sm"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroupbuyThree"
                          label="Sell"
                          id="Sell4"
                        ></Radio>
                      </RadioGroup>
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[8%] right-[8%] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl uppercase"
                    size="txtNeurialGroteskRegular24WhiteA700"
                  >
                    nifty
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[510px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_texture.png"
                alt="texture_Two"
              />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[91px] items-center justify-start md:px-10 px-40 sm:px-5 py-[117px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1126px] mx-auto w-full">
            <Text
              className="md:text-5xl text-7xl text-black-900_01 text-center tracking-[-2.10px] w-auto"
              size="txtNeurialGroteskBold72Black90001"
            >
              <span className="text-black-900_01 font-neurialgrotesk font-bold">
                Start Small.{" "}
              </span>
              <span className="text-black-900_01 font-neurialgrotesk font-bold">
                Earn Big.
              </span>
            </Text>
            <Text
              className="leading-[32.00px] max-w-[659px] md:max-w-full sm:text-[18.37px] md:text-[20.37px] text-[22.37px] text-blue_gray-900_01 text-center"
              size="txtNeurialGroteskRegular2237Bluegray90001"
            >
              Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
              relationship manager
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1126px] mx-auto w-full">
            <div className="bg-gray-100 h-[450px] relative w-1/2 md:w-full">
              <div className="flex flex-col md:gap-10 gap-[63px] h-full justify-start ml-[29px] my-auto w-[77%]">
                <div className="md:h-[106px] h-[117px] ml-3.5 md:ml-[0] relative w-[44%]">
                  <div className="md:h-[101px] h-[117px] m-auto w-full">
                    <div className="md:h-[101px] h-[117px] m-auto w-full">
                      <div className="md:h-[101px] h-[117px] m-auto w-full">
                        <Img
                          className="absolute bottom-[0] h-[101px] inset-x-[0] mx-auto"
                          src="images/img_group1000003810.svg"
                          alt="group1000003810"
                        />
                        <Img
                          className="absolute h-[58px] left-[0] object-cover top-[0]"
                          src="images/img_group_green_700.png"
                          alt="group"
                        />
                      </div>
                      <Img
                        className="absolute h-14 left-[26%] top-[18%]"
                        src="images/img_group.svg"
                        alt="group_One"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[69px] right-[0]"
                      src="images/img_user_green_500.svg"
                      alt="user_One"
                    />
                  </div>
                  <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[0] w-[83%]">
                    <div className="bg-green-500 h-[5px] md:ml-[0] ml-[79px] mr-[67px] rounded-sm w-[5px]"></div>
                    <div className="bg-green-500 h-0.5 mr-[150px] rounded-[50%] w-0.5"></div>
                    <Img
                      className="h-[25px] ml-32 md:ml-[0] mt-8"
                      src="images/img_close_green_500.svg"
                      alt="close_One"
                    />
                    <Img
                      className="h-[11px] ml-3 md:ml-[0] w-2.5"
                      src="images/img_close_green_500.svg"
                      alt="close_Two"
                    />
                    <div className="bg-green-500 h-[3px] md:ml-[0] ml-[148px] mt-7 rounded-[1px] w-[3px]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16.88px] items-start justify-start w-[424px] sm:w-full">
                  <Text
                    className="leading-[50.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 tracking-[-1.69px]"
                    size="txtNeurialGroteskBold40Black90001"
                  >
                    <>
                      Deposit
                      <br />
                      Bonus.
                    </>
                  </Text>
                  <Text
                    className="leading-[23.00px] max-w-[424px] md:max-w-full text-[15.75px] text-gray-700"
                    size="txtNeurialGroteskRegular1575"
                  >
                    <>
                      Our assets&#39; liquidity is unmatched in the market, with
                      a small bid-ask spread and a well-balanced order book.
                    </>
                  </Text>
                </div>
              </div>
              <div className="absolute h-[450px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[450px] m-auto object-cover w-full"
                  src="images/img_texture.png"
                  alt="texture_Three"
                />
                <Img
                  className="absolute h-[272px] right-[0] top-[0]"
                  src="images/img_group6.svg"
                  alt="frame_One"
                />
              </div>
            </div>
            <div className="bg-gray-100 h-[450px] relative w-1/2 md:w-full">
              <div className="flex flex-col md:gap-10 gap-[77px] h-full justify-start ml-[29px] my-auto w-[81%]">
                <Img
                  className="h-[101px] ml-5 md:ml-[0]"
                  src="images/img_manager1.svg"
                  alt="managerOne"
                />
                <div className="flex flex-col gap-[16.88px] items-start justify-start w-[446px] sm:w-full">
                  <Text
                    className="leading-[50.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 tracking-[-1.69px]"
                    size="txtNeurialGroteskBold40Black90001"
                  >
                    <>
                      Dedicated
                      <br />
                      Relationship Manager.
                    </>
                  </Text>
                  <Text
                    className="leading-[23.00px] max-w-[446px] md:max-w-full text-[15.75px] text-gray-700"
                    size="txtNeurialGroteskRegular1575"
                  >
                    <>
                      Our assets&#39; liquidity is unmatched in the market, with
                      a small bid-ask spread and a well-balanced order book.
                    </>
                  </Text>
                </div>
              </div>
              <div className="absolute h-[450px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[450px] m-auto object-cover w-full"
                  src="images/img_texture.png"
                  alt="texture_Four"
                />
                <Img
                  className="absolute h-[272px] right-[0] top-[0]"
                  src="images/img_group6.svg"
                  alt="frame_Two"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-center py-[120px] w-full container ">
          <Text
            className="leading-[80.00px] md:text-5xl text-7xl text-center text-shadow-ts text-white-A700 tracking-[-1.51px]"
            size="txtNeurialGroteskMedium72"
          >
            <span className="text-white-A700 font-neurialgrotesk font-bold">
              <>
                Derivates made simple
                <br />
                in{" "}
              </>
            </span>
            <span className="text-lime-A200_02 font-neurialgrotesk font-bold">
              3 Easy
            </span>
            <span className="text-white-A700 font-neurialgrotesk font-bold">
              {" "}
              Steps
            </span>
          </Text>
          <div className="flex flex-col gap-10 items-center justify-center w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[1442px] w-full">
              <div
                className="bg-cover bg-no-repeat md:h-[560px] h-[645px] p-[42px] md:px-5 relative w-[645px] md:w-full"
                style={{ backgroundImage: "url('images/img_group626793.svg')" }}
              >
                <div className="absolute bg-gradient6  h-[471px] inset-[0] justify-center m-auto rounded-[235px] w-[471px]"></div>
                <div className="absolute h-[560px] inset-[0] justify-center m-auto w-[43%]">
                  <Img
                    className="h-[560px] m-auto object-cover w-full"
                    src="images/img_shadow.png"
                    alt="shadow_Three"
                  />
                  <div className="absolute h-[560px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[560px] m-auto object-cover w-full"
                      src="images/img_main.png"
                      alt="main_Three"
                    />
                    <Img
                      className="absolute h-[537px] inset-[0] justify-center m-auto object-cover w-[90%]"
                      src="images/img_iphone14prospace_641x297.png"
                      alt="iphone14prospac_Three"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start md:px-5 w-auto sm:w-full">
                <div className="h-[100px] relative w-[100px]">
                  <div className="absolute h-[100px] inset-[0] justify-center m-auto rotate-[-6deg] w-[99px]">
                    <div className="absolute md:h-[37px] h-[79px] inset-[0] justify-center m-auto w-[76%]">
                      <div className="absolute md:h-[37px] h-[75px] left-[0] top-[0] w-[94%]">
                        <div className="absolute h-10 md:h-[37px] right-[9%] top-[0] w-10">
                          <Img
                            className="absolute h-[35px] left-[0] object-cover top-[0] w-[35px]"
                            src="images/img_vector_35x35.png"
                            alt="vector_Two"
                          />
                          <Img
                            className="absolute bottom-[0] h-[37px] right-[0]"
                            src="images/img_mobile.svg"
                            alt="mobile"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[37px] inset-x-[0] mx-auto object-cover"
                          src="images/img_vector_37x70.png"
                          alt="vector_Three"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[31px] right-[0]"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[9%] h-[13px] left-[9%]"
                      src="images/img_vector.svg"
                      alt="vector_Four"
                    />
                    <div className="absolute h-[100px] inset-[0] justify-center m-auto w-[99px]">
                      <Img
                        className="h-[100px] m-auto object-cover w-[99px]"
                        src="images/img_texture_100x99.png"
                        alt="texture_Five"
                      />
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[83%]">
                        <div className="bg-white-A700 h-px rotate-[-6deg] rounded-[50%] w-px"></div>
                        <div className="bg-green-500 h-0.5 mt-9 rotate-[-6deg] rounded-[50%] w-0.5"></div>
                        <div className="flex flex-row items-end justify-between mt-[11px] w-full">
                          <Img
                            className="h-[13px] w-3"
                            src="images/img_close_green_500_13x12.svg"
                            alt="close_Three"
                          />
                          <div className="bg-green-500 h-1 mt-[9px] rotate-[-6deg] rounded-[50%] w-1"></div>
                        </div>
                        <div className="bg-white-A700 h-0.5 mt-[26px] rotate-[-6deg] rounded-[50%] w-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[29px] right-[0] top-[12%]"
                    src="images/img_close.svg"
                    alt="close_Four"
                  />
                </div>
                <div className="flex flex-col gap-9 items-start justify-center w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-center w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                      size="txtNeurialGroteskMedium40"
                    >
                      Create an Account
                    </Text>
                    <Text
                      className="leading-[32.00px] md:max-w-full max-w-sm text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                      size="txtNeurialGroteskRegular24Gray500"
                    >
                      Register & Complete your Verification in less than 2
                      minutes
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-12 leading-[normal] text-center text-lg uppercase w-[216px]"
                    color="lime_A200_green_A400"
                  >
                    Trade Now
                  </Button>
                </div>
              </div>
            </div>
            <Line className="bg-gradient7  h-px max-w-[1134px] mx-auto w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[1446px] w-full">
              <div
                className="bg-cover bg-no-repeat md:h-[558px] h-[645px] p-[43px] md:px-5 relative w-[645px] md:w-full"
                style={{ backgroundImage: "url('images/img_group626793.svg')" }}
              >
                <div className="absolute bg-gradient8  h-[471px] inset-[0] justify-center m-auto rounded-[235px] w-[471px]"></div>
                <div className="absolute h-[558px] inset-[0] justify-center m-auto w-[43%]">
                  <Img
                    className="h-[558px] m-auto object-cover w-full"
                    src="images/img_shadow.png"
                    alt="shadow_Four"
                  />
                  <div className="absolute h-[558px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="absolute h-[558px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_main.png"
                      alt="main_Four"
                    />
                    <Img
                      className="absolute h-[535px] inset-[0] justify-center m-auto object-cover w-[91%]"
                      src="images/img_iphone14prospace_535x248.png"
                      alt="iphone14prospac_Four"
                    />
                    <Img
                      className="absolute h-[539px] inset-[0] justify-center m-auto object-cover w-[91%]"
                      src="images/img_iphone14prospace_539x250.png"
                      alt="iphone14prospac_Five"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start md:px-5 w-auto sm:w-full">
                <Img
                  className="h-[100px] w-[107px]"
                  src="images/img_group626789.svg"
                  alt="group626789"
                />
                <div className="flex flex-col gap-9 items-start justify-center w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-center w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                      size="txtNeurialGroteskMedium40"
                    >
                      Deposit Funds
                    </Text>
                    <Text
                      className="leading-[32.00px] md:max-w-full max-w-sm text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                      size="txtNeurialGroteskRegular24Gray500"
                    >
                      Add funds quickly using a variety of payment methods
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-12 leading-[normal] text-center text-lg uppercase w-[216px]"
                    color="lime_A200_green_A400"
                  >
                    Trade Now
                  </Button>
                </div>
              </div>
            </div>
            <Line className="bg-gradient7  h-px max-w-[1134px] mx-auto w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[1442px] w-full">
              <div
                className="bg-cover bg-no-repeat md:h-[558px] h-[645px] p-[43px] md:px-5 relative w-[645px] md:w-full"
                style={{ backgroundImage: "url('images/img_group626793.svg')" }}
              >
                <div className="absolute bg-gradient8  h-[471px] inset-[0] justify-center m-auto rounded-[235px] w-[471px]"></div>
                <div className="absolute h-[558px] inset-[0] justify-center m-auto w-[43%]">
                  <Img
                    className="h-[558px] m-auto object-cover w-full"
                    src="images/img_shadow.png"
                    alt="shadow_Five"
                  />
                  <div className="absolute h-[558px] inset-[0] justify-center m-auto w-full">
                    <div className="h-[558px] m-auto w-full">
                      <Img
                        className="h-[558px] m-auto object-cover w-full"
                        src="images/img_main.png"
                        alt="main_Five"
                      />
                      <Img
                        className="absolute h-[535px] inset-[0] justify-center m-auto object-cover w-[91%]"
                        src="images/img_iphone14prospace_506x234.png"
                        alt="iphone14prospac_Six"
                      />
                    </div>
                    <Img
                      className="absolute h-[537px] inset-[0] justify-center m-auto object-cover w-[91%]"
                      src="images/img_iphone14prospace_537x248.png"
                      alt="iphone14prospac_Seven"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start md:px-5 w-auto sm:w-full">
                <div className="h-[120px] relative w-[30%]">
                  <div className="absolute h-[102px] inset-y-[0] left-[12%] my-auto w-[71%]">
                    <Img
                      className="h-[17px] mb-[-7.15px] ml-auto mr-[3px] z-[1]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <div className="md:h-[86px] h-[92px] mt-auto mx-auto w-full">
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <div className="flex flex-col justify-start w-full">
                          <Img
                            className="h-[41px] md:ml-[0] ml-[57px]"
                            src="images/img_close_green_500_01.svg"
                            alt="close_Five"
                          />
                          <div
                            className="bg-cover bg-no-repeat h-12 md:h-[29px] mt-0.5 relative w-full"
                            style={{
                              backgroundImage: "url('images/img_group18.svg')",
                            }}
                          >
                            <Img
                              className="absolute h-[27px] left-[32%] top-[0]"
                              src="images/img_close_green_500_01.svg"
                              alt="close_Six"
                            />
                            <Img
                              className="absolute bottom-[0] h-[19px] left-[0] object-cover"
                              src="images/img_vector_19x33.png"
                              alt="vector_Five"
                            />
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-3.5 inset-y-[0] my-auto object-cover right-[20%]"
                        src="images/img_vector_19x33.png"
                        alt="vector_Six"
                      />
                      <Img
                        className="absolute bottom-[0] h-[5px] left-[0]"
                        src="images/img_vector_green_300.svg"
                        alt="vector_Seven"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[88px] inset-x-[0] items-start justify-start mx-auto pb-[11px] px-[11px] w-[84%]"
                        style={{
                          backgroundImage: "url('images/img_group17.svg')",
                        }}
                      >
                        <div className="flex flex-row items-start justify-start mb-[3px] w-[74%] md:w-full">
                          <Img
                            className="h-1.5 mt-[55px] w-1.5"
                            src="images/img_close_green_500.svg"
                            alt="close_Seven"
                          />
                          <div className="bg-green-500 h-px mb-[41px] ml-3 mt-[30px] rounded-[50%] w-px"></div>
                          <div className="flex flex-col md:gap-10 gap-[67px] items-start justify-start ml-2.5 w-[9%]">
                            <div className="bg-green-500 h-[3px] rounded-[1px] w-[3px]"></div>
                            <div className="bg-green-500 h-0.5 rounded-[50%] w-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-green-700 h-[17px] right-[19%] top-[8%] w-[3px]" />
                  <Img
                    className="absolute bottom-[27%] h-[15px] right-[17%] w-3.5"
                    src="images/img_close_green_500.svg"
                    alt="close_Eight"
                  />
                  <Img
                    className="absolute h-[15px] right-[20%] top-[23%] w-3.5"
                    src="images/img_maximize.svg"
                    alt="maximize"
                  />
                  <Img
                    className="absolute h-[120px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_texture.png"
                    alt="texture_Six"
                  />
                </div>
                <div className="flex flex-col gap-9 items-start justify-center w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-center w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                      size="txtNeurialGroteskMedium40"
                    >
                      Become a Trader
                    </Text>
                    <Text
                      className="leading-[32.00px] md:max-w-full max-w-sm text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                      size="txtNeurialGroteskRegular24Gray500"
                    >
                      Choose Your Trading Pair & Trade Seamlessly
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-12 leading-[normal] text-center text-lg uppercase w-[216px]"
                    color="lime_A200_green_A400"
                  >
                    Trade Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-start py-[140px] w-full container ">
          <div className="flex flex-col items-center justify-center md:px-5 w-auto md:w-full">
            <div className="flex flex-col items-center justify-center w-auto md:w-full">
              <Text
                className="md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.10px] w-auto"
                size="txtNeurialGroteskBold72"
              >
                Backed by the Best.
              </Text>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start md:px-10 sm:px-5 px-[216px] w-full">
            <div className="flex flex-col items-center justify-center max-w-[954px] mx-auto w-full">
              <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-[88%]">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="sm:flex-1 h-10 md:h-auto object-cover w-[184px] sm:w-full"
                    src="images/img_image109.png"
                    alt="image109"
                  />
                  <Img
                    className="sm:flex-1 h-[100px] md:h-auto object-cover w-[124px] sm:w-full"
                    src="images/img_image110.png"
                    alt="image110"
                  />
                  <Img
                    className="sm:flex-1 h-16 md:h-auto object-cover w-[108px] sm:w-full"
                    src="images/img_image111.png"
                    alt="image111"
                  />
                  <Img
                    className="sm:flex-1 h-16 md:h-auto object-cover w-[182px] sm:w-full"
                    src="images/img_image112.png"
                    alt="image112"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[88%] md:w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover w-[120px]"
                    src="images/img_image113.png"
                    alt="image113"
                  />
                  <Img
                    className="h-6 md:h-auto object-cover w-[236px] sm:w-full"
                    src="images/img_image114.png"
                    alt="image114"
                  />
                  <Img
                    className="h-10 md:h-auto object-cover w-[219px] sm:w-full"
                    src="images/img_image115.png"
                    alt="image115"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[1014px] mx-auto w-full">
              <div className="flex flex-col gap-10 items-center justify-start w-[87%]">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[138px] md:h-auto object-cover w-[120px] sm:w-full"
                      src="images/img_20200117133556utsavsomani.png"
                      alt="20200117133556u"
                    />
                    <Text
                      className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-white-A700 w-auto"
                      size="txtNeurialGroteskBold2048"
                    >
                      Utsav Somani
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[138px] md:h-auto object-cover w-[120px] sm:w-full"
                      src="images/img_picabackground.png"
                      alt="picabackground"
                    />
                    <Text
                      className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-center text-white-A700"
                      size="txtNeurialGroteskBold2048"
                    >
                      <span className="text-white-A700 font-neurialgrotesk font-bold">
                        <>
                          Aditya Nagarsheth
                          <br />
                        </>
                      </span>
                      <span className="text-blue_gray-400_01 font-neurialgrotesk text-[12.8px] font-medium">
                        Perpetual Value Partners
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[138px] md:h-auto object-cover w-[120px] sm:w-full"
                      src="images/img_6ihd3hia400x400.png"
                      alt="6ihd3hia400x400"
                    />
                    <Text
                      className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-center text-white-A700 w-auto"
                      size="txtNeurialGroteskBold2048"
                    >
                      Gokul Rajaram
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[138px] md:h-auto object-cover w-[120px] sm:w-full"
                      src="images/img_1675483650655background.png"
                      alt="1675483650655ba"
                    />
                    <Text
                      className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-center text-white-A700"
                      size="txtNeurialGroteskBold2048"
                    >
                      <span className="text-white-A700 font-neurialgrotesk font-bold">
                        <>
                          Sajid Rehman
                          <br />
                        </>
                      </span>
                      <span className="text-blue_gray-400_01 font-neurialgrotesk text-[12.8px] font-medium">
                        My Asia VC
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[138px] md:h-auto object-cover w-[120px] sm:w-full"
                      src="images/img_image116.png"
                      alt="image116"
                    />
                    <Text
                      className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-center text-white-A700"
                      size="txtNeurialGroteskBold2048"
                    >
                      <span className="text-white-A700 font-neurialgrotesk font-bold">
                        <>
                          Arjun Sethi
                          <br />
                        </>
                      </span>
                      <span className="text-blue_gray-400_01 font-neurialgrotesk text-[12.8px] font-medium">
                        Tribe Capital
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-10 items-center justify-center w-[64%] md:w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[138px] md:h-auto object-cover w-[120px] sm:w-full"
                      src="images/img_image117.png"
                      alt="image117"
                    />
                    <Text
                      className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-center text-white-A700 w-auto"
                      size="txtNeurialGroteskBold2048"
                    >
                      Kunal Shah
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[138px] md:h-auto object-cover w-[120px] sm:w-full"
                      src="images/img_img20220825085142768.png"
                      alt="img202208250851"
                    />
                    <Text
                      className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-center text-white-A700"
                      size="txtNeurialGroteskBold2048"
                    >
                      <span className="text-white-A700 font-neurialgrotesk font-bold">
                        <>
                          Sandeep Nailawal
                          <br />
                        </>
                      </span>
                      <span className="text-blue_gray-400_01 font-neurialgrotesk text-[12.8px] font-medium">
                        Polygon Labs
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[138px] md:h-auto object-cover w-[120px] sm:w-full"
                      src="images/img_imagebackground.png"
                      alt="imagebackground"
                    />
                    <Text
                      className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-center text-white-A700 w-auto"
                      size="txtNeurialGroteskBold2048"
                    >
                      Karn Vivek Nagpal
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-16 items-center justify-start md:px-10 px-40 sm:px-5 py-[117px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1126px] mx-auto w-full">
            <Text
              className="md:text-5xl text-7xl text-black-900_01 text-center tracking-[-2.10px] w-auto"
              size="txtNeurialGroteskBold72Black90001"
            >
              Don’t take our word for it.
            </Text>
            <Text
              className="leading-[32.00px] max-w-[659px] md:max-w-full sm:text-[18.37px] md:text-[20.37px] text-[22.37px] text-blue_gray-900_01 text-center"
              size="txtNeurialGroteskRegular2237Bluegray90001"
            >
              Hear it from our expert community of traders who have made insane
              amounts in a short amount of time
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1126px] mx-auto w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-100 h-[450px] relative w-full">
                <div className="flex flex-col h-full items-start justify-start mt-10 mx-auto">
                  <Text
                    className="leading-[28.00px] text-gray-700 text-xl w-full"
                    size="txtNeurialGroteskRegular20Gray700"
                  >
                    <>
                      As someone who&#39;s always looking for the next big
                      thing, I was really excited to try out Density’s crypto
                      futures trading platform. And I have to say, it definitely
                      lived up to my expectations.
                    </>
                  </Text>
                  <Text
                    className="mt-[42px] sm:text-2xl md:text-[26px] text-[28px] text-black-900_01 tracking-[-1.00px]"
                    size="txtNeurialGroteskBold28"
                  >
                    <>
                      Prakash
                      <br />
                      Jamatia.
                    </>
                  </Text>
                  <Text
                    className="mt-2 text-base text-gray-700"
                    size="txtNeurialGroteskMedium16Gray700"
                  >
                    Founder, Tradeshala
                  </Text>
                </div>
                <div className="absolute h-[450px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[450px] m-auto object-cover w-full"
                    src="images/img_texture_450x362.png"
                    alt="texture"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[272px] items-end justify-start p-[26px] sm:px-5 right-[0] top-[0] w-[84%]"
                    style={{ backgroundImage: "url('images/img_group6.svg')" }}
                  >
                    <Img
                      className="h-[103px] mb-[116px]"
                      src="images/img_group1000003818.svg"
                      alt="group1000003818"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[173px] object-cover right-[0] w-[44%]"
                    src="images/img_unsplashieebwgy6la.png"
                    alt="unsplashieebwgy"
                  />
                </div>
              </div>
              <div className="bg-gray-100 h-[450px] relative w-full">
                <div className="flex flex-col h-full items-start justify-start mt-10 mx-auto">
                  <Text
                    className="leading-[28.00px] text-gray-700 text-xl w-full"
                    size="txtNeurialGroteskRegular20Gray700"
                  >
                    <>
                      I&#39;m not a seasoned trader, but this website has made
                      it easy for me to get started with crypto futures trading.
                      Their KYC was very fast and the educational resources were
                      really helpful.
                    </>
                  </Text>
                  <Text
                    className="mt-[70px] sm:text-2xl md:text-[26px] text-[28px] text-black-900_01 tracking-[-1.00px]"
                    size="txtNeurialGroteskBold28"
                  >
                    <>
                      Shambhavi
                      <br />
                      Nayak.
                    </>
                  </Text>
                  <Text
                    className="mt-[9px] text-base text-gray-700"
                    size="txtNeurialGroteskMedium16Gray700"
                  >
                    Commodity Trader
                  </Text>
                </div>
                <div className="absolute h-[450px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[450px] m-auto w-full">
                    <Img
                      className="h-[450px] m-auto object-cover w-full"
                      src="images/img_texture.png"
                      alt="texture"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[272px] items-end justify-start p-[26px] sm:px-5 right-[0] top-[0] w-[84%]"
                      style={{
                        backgroundImage: "url('images/img_group6.svg')",
                      }}
                    >
                      <Img
                        className="h-[103px] mb-[116px]"
                        src="images/img_group1000003818.svg"
                        alt="group1000003818"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[215px] object-cover right-[0] w-[54%]"
                    src="images/img_unsplasho5nbw8gtnmc.png"
                    alt="unsplasho5nbw8g"
                  />
                </div>
              </div>
            </List>
            <div className="bg-gray-100 h-[450px] relative w-[33%] md:w-full">
              <div className="flex flex-col h-full items-start justify-start mt-10 mx-auto">
                <Text
                  className="leading-[28.00px] text-gray-700 text-xl w-full"
                  size="txtNeurialGroteskRegular20Gray700"
                >
                  <>
                    I&#39;ve been using this platform for a few months now and
                    it&#39;s been a great experience. I was delighted to see all
                    the major crypto coins listed on Density Exchange.
                  </>
                </Text>
                <Text
                  className="mt-[70px] sm:text-2xl md:text-[26px] text-[28px] text-black-900_01 tracking-[-1.00px]"
                  size="txtNeurialGroteskBold28"
                >
                  <>
                    Arjun
                    <br />
                    Naik.
                  </>
                </Text>
                <Text
                  className="mt-[9px] text-base text-gray-700"
                  size="txtNeurialGroteskMedium16Gray700"
                >
                  Equity Trader
                </Text>
              </div>
              <div className="absolute h-[450px] inset-[0] justify-center m-auto w-full">
                <div className="h-[450px] m-auto w-full">
                  <Img
                    className="h-[450px] m-auto object-cover w-full"
                    src="images/img_texture_450x362.png"
                    alt="texture_Seven"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[272px] items-end justify-start p-[26px] sm:px-5 right-[0] top-[0] w-[84%]"
                    style={{ backgroundImage: "url('images/img_group6.svg')" }}
                  >
                    <List
                      className="sm:flex-col flex-row gap-[9px] grid grid-cols-2 mb-[116px] w-[43%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_lightbulb.svg"
                              alt="lightbulb"
                            />
                            <Img
                              className="h-5 w-5"
                              src="images/img_lightbulb.svg"
                              alt="lightbulb_One"
                            />
                          </div>
                          <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_lightbulb_black_900.svg"
                              alt="lightbulb_Two"
                            />
                            <Img
                              className="h-5 w-5"
                              src="images/img_lightbulb_black_900.svg"
                              alt="lightbulb_Three"
                            />
                          </div>
                          <Img
                            className="h-5 md:ml-[0] ml-[29px] w-5"
                            src="images/img_lightbulb.svg"
                            alt="lightbulb_Four"
                          />
                          <Img
                            className="h-5 md:ml-[0] ml-[29px] w-5"
                            src="images/img_lightbulb_black_900.svg"
                            alt="lightbulb_Five"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_lightbulb.svg"
                              alt="lightbulb"
                            />
                            <Img
                              className="h-5 w-5"
                              src="images/img_lightbulb.svg"
                              alt="lightbulb_One"
                            />
                          </div>
                          <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_lightbulb_black_900.svg"
                              alt="lightbulb_Two"
                            />
                            <Img
                              className="h-5 w-5"
                              src="images/img_lightbulb_black_900.svg"
                              alt="lightbulb_Three"
                            />
                          </div>
                          <Img
                            className="h-5 md:ml-[0] ml-[29px] w-5"
                            src="images/img_lightbulb.svg"
                            alt="lightbulb_Four"
                          />
                          <Img
                            className="h-5 md:ml-[0] ml-[29px] w-5"
                            src="images/img_lightbulb_black_900.svg"
                            alt="lightbulb_Five"
                          />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[222px] object-cover right-[0] w-[55%]"
                  src="images/img_unsplashzhvm3xiohoe.png"
                  alt="unsplashzhvm3xi"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-start py-[140px] w-full container">
          <div className="flex flex-col gap-10 items-center justify-center max-w-[877px] mx-auto md:px-5 w-full">
            <div className="h-[228px] relative w-[29%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col gap-[22px] h-full justify-center m-auto p-5 w-[188px]"
                style={{ backgroundImage: "url('images/img_group25.svg')" }}
              >
                <Img
                  className="h-[52px] ml-24 md:ml-[0] mt-0.5"
                  src="images/img_vector_white_a700.svg"
                  alt="vector_Nine"
                />
                <Img
                  className="h-8 mb-[37px] md:ml-[0] ml-[9px] mr-[98px]"
                  src="images/img_grid.svg"
                  alt="grid"
                />
              </div>
              <Img
                className="absolute h-[228px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_texture.png"
                alt="texture_Eight"
              />
            </div>
            <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full ">
              <Text
                className="md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.10px] w-auto"
                size="txtNeurialGroteskBold72"
              >
                <span className="text-white-A700 font-neurialgrotesk font-bold">
                  Earn Money.{" "}
                </span>
                <span className="text-lime-A200_02 font-neurialgrotesk font-bold">
                  The Easy Way.
                </span>
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-200 sm:text-xl w-auto"
                size="txtNeurialGroteskRegular24"
              >
                No Complexity of Trading Fee, generate volume and win
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[999px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-900 flex flex-col relative w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[239px] items-start justify-start mt-[-NaNpx] p-[30px] sm:px-5 w-[87%] z-[1]"
                style={{ backgroundImage: "url('images/img_group6.svg')" }}
              >
                <Img
                  className="h-[90px] mb-[85px] mt-[3px]"
                  src="images/img_group626834.svg"
                  alt="group626834"
                />
              </div>
              <Text
                className="leading-[40.00px] mb-[39px] ml-[26px] mt-[-35.01px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.00px] w-[74%] sm:w-full z-[1]"
                size="txtNeurialGroteskBold32"
              >
                Share your your referral link
              </Text>
              <Img
                className="h-[323px] mb-auto mt-[-NaNpx] mx-auto object-cover w-[323px] z-[1]"
                src="images/img_texture.png"
                alt="texture"
              />
            </div>
            <div className="bg-gray-900 h-[323px] relative w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[239px] items-start justify-start left-[0] p-[31px] sm:px-5 top-[0] w-[87%]"
                style={{ backgroundImage: "url('images/img_group6.svg')" }}
              >
                <Img
                  className="h-24 mb-[75px] mt-1"
                  src="images/img_group1000003822.svg"
                  alt="group1000003822"
                />
              </div>
              <Text
                className="absolute bottom-[12%] inset-x-[0] leading-[40.00px] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.00px] w-[82%] sm:w-full"
                size="txtNeurialGroteskBold32"
              >
                Invite Friends to Trade on Density
              </Text>
              <Img
                className="absolute h-[323px] inset-[0] justify-center m-auto object-cover w-[323px]"
                src="images/img_texture.png"
                alt="texture"
              />
            </div>
            <div className="bg-gray-900 flex flex-col relative w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[239px] items-start justify-start mt-[-NaNpx] p-[26px] sm:px-5 w-[87%] z-[1]"
                style={{ backgroundImage: "url('images/img_group6.svg')" }}
              >
                <Img
                  className="h-[104px] mb-[77px] mt-[5px]"
                  src="images/img_group18145968.svg"
                  alt="group18145968"
                />
              </div>
              <Text
                className="leading-[40.00px] mb-[39px] ml-[26px] mt-[-35.01px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.00px] z-[1]"
                size="txtNeurialGroteskBold32"
              >
                <>
                  Trade <br />
                  and Earn
                </>
              </Text>
              <Img
                className="h-[323px] mb-auto mt-[-NaNpx] mx-auto object-cover w-[323px] z-[1]"
                src="images/img_texture.png"
                alt="texture"
              />
            </div>
          </List>
          <Button
            className="cursor-pointer font-bold h-12 leading-[normal] min-w-[286px] text-center text-lg uppercase"
            color="lime_A200_green_A400"
          >
            start earning now
          </Button>
        </div>
        <div
          className="bg-cover bg-gradient9  bg-no-repeat flex flex-col h-[797px] items-center justify-center py-[140px] shadow-bs4 w-full"
          style={{ backgroundImage: "url('images/img_frame1000005536.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-start max-w-[1140px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-auto md:w-full">
              <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full">
                <Text
                  className="md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.10px] w-auto"
                  size="txtNeurialGroteskBold72"
                >
                  <span className="text-white-A700 font-neurialgrotesk font-bold">
                    Trade Together.{" "}
                  </span>
                  <span className="text-lime-A200_02 font-neurialgrotesk font-bold">
                    Thrive Together.
                  </span>
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-gray-200 sm:text-xl w-auto"
                  size="txtNeurialGroteskRegular24"
                >
                  Join the fun-filled community on our platform.
                </Text>
              </div>
            </div>
            <List
              className="bg-black-900_66 border border-solid border-white-A700_3f sm:flex-col flex-row md:gap-10 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] h-[171px] justify-between max-w-[1140px] rounded-lg w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtNeurialGroteskBold32"
                >
                  10,000+
                </Text>
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtNeurialGroteskRegular16"
                >
                  Traders
                </Text>
              </div>
              <Line className="self-center h-[88px] bg-gray-500 w-px" />
              <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtNeurialGroteskBold32"
                >
                  100Mn
                </Text>
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtNeurialGroteskRegular16"
                >
                  Daily Volume Traded
                </Text>
              </div>
              <Line className="self-center h-[88px] bg-gray-500 w-px" />
              <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtNeurialGroteskBold32"
                >
                  Daily
                </Text>
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtNeurialGroteskRegular16"
                >
                  Trade Analysis
                </Text>
              </div>
              <Line className="self-center h-[88px] bg-gray-500 w-px" />
              <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtNeurialGroteskBold32"
                >
                  Live
                </Text>
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtNeurialGroteskRegular16"
                >
                  Signals
                </Text>
              </div>
            </List>
            <Button
              className="cursor-pointer font-bold h-12 leading-[normal] min-w-[257px] text-center text-lg uppercase"
              color="lime_A200_green_A400"
            >
              Join community
            </Button>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col md:gap-10 gap-[82px] items-center justify-start py-[140px] w-full">
          <div className="flex flex-col items-center justify-center md:px-5 w-auto md:w-full">
            <div className="flex flex-col items-center justify-center w-auto md:w-full">
              <Text
                className="leading-[76.00px] max-w-[775px] md:max-w-full md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.10px]"
                size="txtNeurialGroteskBold72"
              >
                <span className="text-white-A700 font-neurialgrotesk font-bold">
                  Meet the{" "}
                </span>
                <span className="text-lime-A200_02 font-neurialgrotesk font-bold">
                  Visionaries
                </span>
                <span className="text-white-A700 font-neurialgrotesk font-bold">
                  {" "}
                  behind Density.
                </span>
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1017px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-blue_gray-900_01 h-[360px] relative w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-full items-end justify-start p-2.5 w-[87%]"
                style={{ backgroundImage: "url('images/img_group6.svg')" }}
              >
                <div className="flex flex-col gap-3.5 items-start justify-start mb-[69px] mt-7">
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.00px] w-full"
                    size="txtNeurialGroteskBold32"
                  >
                    Aakash Neeraj Mittal
                  </Text>
                  <Text
                    className="text-gray-400 text-xl tracking-[-1.00px]"
                    size="txtNeurialGroteskRegular20Gray400"
                  >
                    CEO, Density
                  </Text>
                </div>
              </div>
              <div className="absolute h-[360px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[360px] m-auto object-cover w-full"
                  src="images/img_texture.png"
                  alt="texture"
                />
                <Img
                  className="absolute bottom-[0] h-[266px] object-cover right-[0] w-[82%]"
                  src="images/img_image95.png"
                  alt="imageNinetyFive"
                />
                <Img
                  className="absolute bottom-[6%] h-8 left-[9%] w-8"
                  src="images/img_uillinkedin.svg"
                  alt="uillinkedin"
                />
              </div>
            </div>
            <div className="bg-blue_gray-900_01 h-[360px] relative w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-full items-end justify-start p-2.5 w-[87%]"
                style={{ backgroundImage: "url('images/img_group6.svg')" }}
              >
                <div className="flex flex-col gap-3.5 items-start justify-start mb-[69px] mt-7">
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.00px]"
                    size="txtNeurialGroteskBold32"
                  >
                    <>
                      Bhupendra <br />
                      Bule
                    </>
                  </Text>
                  <Text
                    className="text-gray-400 text-xl tracking-[-1.00px]"
                    size="txtNeurialGroteskRegular20Gray400"
                  >
                    CTO, Density
                  </Text>
                </div>
              </div>
              <div className="absolute h-[360px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[360px] m-auto object-cover w-full"
                  src="images/img_texture.png"
                  alt="texture"
                />
                <Img
                  className="absolute bottom-[0] h-[250px] object-cover right-[0] w-[67%]"
                  src="images/img_image94.png"
                  alt="imageNinetyFour"
                />
                <Img
                  className="absolute bottom-[6%] h-8 left-[9%] w-8"
                  src="images/img_uillinkedin.svg"
                  alt="uillinkedin"
                />
              </div>
            </div>
            <div className="bg-blue_gray-900_01 h-[360px] relative w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-full items-end justify-start p-2.5 w-[87%]"
                style={{ backgroundImage: "url('images/img_group6.svg')" }}
              >
                <div className="flex flex-col gap-3.5 items-start justify-start mb-[69px] mt-7">
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.00px]"
                    size="txtNeurialGroteskBold32"
                  >
                    <>
                      Deepak
                      <br />
                      Vasman
                    </>
                  </Text>
                  <Text
                    className="text-gray-400 text-xl tracking-[-1.00px]"
                    size="txtNeurialGroteskRegular20Gray400"
                  >
                    CBO, Density
                  </Text>
                </div>
              </div>
              <div className="absolute h-[360px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[360px] m-auto object-cover w-full"
                  src="images/img_texture.png"
                  alt="texture"
                />
                <Img
                  className="absolute bottom-[0] h-[242px] object-cover right-[0] w-[72%]"
                  src="images/img_image96.png"
                  alt="imageNinetySix"
                />
                <Img
                  className="absolute bottom-[6%] h-8 left-[9%] w-8"
                  src="images/img_uillinkedin.svg"
                  alt="uillinkedin"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col items-center justify-center py-40 w-full container">
          <div className="md:h-[1066px] h-[1224px] max-w-[1011px] mx-auto md:px-5 relative w-full">
            <div className="flex flex-col m-auto w-full">
              <Img
                className="h-[159px] mx-auto object-cover w-full"
                src="images/img_getstartednow.png"
                alt="getstartednow"
              />
              <Img
                className="h-[1109px] mt-[-43.06px] mx-auto z-[1]"
                src="images/img_group1000003804.svg"
                alt="group1000003804"
              />
            </div>
            <div className="absolute backdrop-opacity-[0.5] bg-green-400_90 blur-[51.00px] bottom-[5%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[87%]">
              <div className="bg-gradient10  flex flex-col h-[134px] md:h-auto items-center justify-center max-w-[866px] mb-1 sm:px-5 px-[33.4px] py-[11.13px] w-full">
                <Text
                  className="sm:text-[34.27px] md:text-[36.27px] text-[38.27px] text-black-900 w-auto"
                  size="txtNeurialGroteskBold3827"
                >
                  Start Trading!
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-700_03 flex flex-col gap-10 items-center justify-center md:px-10 sm:px-5 px-[245px] py-[63px] w-full">
          <Img
            className="h-[29px] w-[127px]"
            src="images/img_group626657.svg"
            alt="group626657"
          />
          <div className="flex flex-col gap-7 items-center justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-4/5 md:w-full">
              <Text
                className="text-sm text-white-A700"
                size="txtNeurialGroteskRegular14WhiteA700"
              >
                Blog
              </Text>
              <Text
                className="md:ml-[0] ml-[53px] text-sm text-white-A700"
                size="txtNeurialGroteskRegular14WhiteA700"
              >
                Fees
              </Text>
              <Text
                className="md:ml-[0] ml-[52px] text-sm text-white-A700"
                size="txtNeurialGroteskRegular14WhiteA700"
              >
                Leaderboard
              </Text>
              <a
                href="javascript:"
                className="md:ml-[0] ml-[53px] text-sm text-white-A700"
              >
                <Text size="txtNeurialGroteskRegular14WhiteA700">Careers</Text>
              </a>
              <a
                href="javascript:"
                className="md:ml-[0] ml-[53px] text-sm text-white-A700"
              >
                <Text size="txtNeurialGroteskRegular14WhiteA700">
                  Contact Us
                </Text>
              </a>
              <a
                href="javascript:"
                className="md:ml-[0] ml-[53px] text-sm text-white-A700"
              >
                <Text size="txtNeurialGroteskRegular14WhiteA700">
                  Privacy Policy
                </Text>
              </a>
            </div>
            <Text
              className="leading-[23.00px] max-w-[786px] md:max-w-full text-center text-gray-300 text-sm"
              size="txtNeurialGroteskRegular14Gray300"
            >
              Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
              diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
              muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
              inde.{" "}
            </Text>
          </div>
          <div className="flex flex-row items-center justify-center w-[19%] md:w-full">
            <Img
              className="h-[18px]"
              src="images/img_facebook.svg"
              alt="facebook"
            />
            <div className="flex flex-col items-center justify-start ml-9 w-[14%]">
              <Img
                className="h-[18px]"
                src="images/img_twitterlogo.svg"
                alt="twitterlogo"
              />
            </div>
            <Img
              className="h-5 ml-[30px] w-[21px]"
              src="images/img_link.svg"
              alt="link"
            />
            <Img
              className="h-8 ml-[25px] w-8"
              src="images/img_info.svg"
              alt="info"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
