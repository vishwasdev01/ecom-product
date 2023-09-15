import React from "react";

import { Button, Img, Line, Radio, Text } from "components";
import HeaderSlider from "components/HeaderSlider";

const ClarifionUpsellPage = () => {
  const texts = [
    {
      text: "30-DAY SATISFACTION GUARANTEE",
      image: "images/img_fluentcheckmar.svg",
    },
    {
      text: "Free delivery on orders over $40.00",
      image: "images/img_phtrucklight.svg",
    },
    {
      text: "50.000+ HAPPY CUSTOMERS",
      image: "images/img_mdicardsheartoutline.svg",
    },
    {
      text: "100% Money Back Guarantee",
      image: "images/img_fluentarrowsy.svg",
    },
  ];
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="hidden sm:block w-full">
          <HeaderSlider texts={texts} />
        </div>
        <header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-between md:p-5 w-full block sm:hidden">
          <div className="flex md:flex-1 flex-row gap-2 items-center justify-start md:justify-center md:ml-[0] ml-[127px] md:mt-0 my-3.5 md:w-full">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_fluentcheckmar.svg"
              alt="fluentcheckmar"
            />
            <Text
              className="capitalize text-white-A700 text-xs"
              size="txtManropeMedium12"
            >
              30-DAY SATISFACTION GUARANTEE
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-2 items-center justify-center md:ml-[0] ml-[114px] md:mt-0 my-3.5 md:w-full">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_phtrucklight.svg"
              alt="phtrucklight"
            />
            <Text
              className="text-white-A700 text-xs uppercase"
              size="txtManropeMedium12"
            >
              Free delivery on orders over $40.00
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-2 items-center justify-center md:ml-[0] ml-[122px] md:mt-0 my-3.5 md:w-full">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_mdicardsheartoutline.svg"
              alt="mdicardsheartou"
            />
            <Text
              className="capitalize text-white-A700 text-xs"
              size="txtManropeMedium12"
            >
              50.000+ HAPPY CUSTOMERS
            </Text>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row gap-2 items-center justify-center md:m-[0] ml-[115px] mr-[137px] md:mt-0 my-3.5 md:w-full">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_fluentarrowsy.svg"
              alt="fluentarrowsy"
            />
            <Text
              className="sm:mt-0 text-white-A700 text-xs uppercase"
              size="txtManropeMedium12"
            >
              100% Money Back Guarantee
            </Text>
          </div>
        </header>
        <div className="flex flex-col md:px-5 relative w-full sm:px-0 sm:bg-gray-50">
          <div className="bg-white-A700 flex  flex-row gap-2.5 items-center justify-between mx-auto md:px-10 sm:p-[20px] sm:bg-white px-[127px] py-[30px] w-full">
            <Img
              className=" h-9 md:h-auto object-cover w-48 sm:w-[107px]"
              src="images/img_600a41c73b670a9.png"
              alt="600a41c73b670aNine"
            />
            <Img
              className="h-8 w-[202px] sm:w-[107px]"
              src="images/img_frame1484578056.svg"
              alt="frame1484578056"
            />
          </div>
          <div className="flex flex-col gap-6 items-center justify-start mt-0 mx-auto w-auto z-[1] sm:mt-[0px] sm:mx-[40px] sm:pt-[32px]">
            <Text
              className="sm:leading-10 capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto sm:text-center"
              size="txtManropeRegular48"
            >
              Wait ! your order in progress.
            </Text>
            <Text
              className="capitalize text-2xl md:text-[22px] text-blue_gray-700 sm:text-xl w-auto sm:text-center"
              size="txtManropeRegular24"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-10 sm:px-5 px-[127px] mt-[60px] mx-auto md:px-5 w-full sm:flex-row sm:items-baseline">
          <div className="flex flex-row gap-5 items-center justify-start w-auto sm:flex-col  sm:gap-2">
            <Button className="border-2 border-light_green-500 border-solid flex h-10 items-center justify-center w-10">
              <Img
                className="h-4"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </Button>
            <Text
              className="capitalize text-black-900 text-xl w-auto flex sm:text-xs sm:leading-0 sm:text-center"
              size="txtManropeRegular20"
            >
              <span className="block sm:hidden"> Step 1 : </span>
              Cart Review
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start w-auto sm:flex-col  sm:gap-2">
            <Button className="border-2 border-light_green-500 border-solid flex h-10 items-center justify-center w-10">
              <Img
                className="h-4"
                src="images/img_checkmark.svg"
                alt="checkmark_One"
              />
            </Button>
            <Text
              className="capitalize text-black-900 text-xl w-auto flex sm:text-xs sm:leading-0 sm:text-center"
              size="txtManropeRegular20"
            >
              <span className="block sm:hidden"> Step 2 : </span>
              Checkout
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start w-auto sm:flex-col  sm:gap-2">
            <Text
              className="bg-blue-A400 border-2 border-blue-A400 border-solid capitalize flex h-10 items-center justify-center rounded-[50%] text-center text-white-A700 text-xl w-10"
              size="txtManropeRegular20WhiteA700"
            >
              3
            </Text>
            <Text
              className="capitalize text-black-900 text-xl w-auto flex sm:text-xs sm:leading-0 sm:text-center"
              size="txtManropeBold20"
            >
              <span className="block sm:hidden"> Step 3 : </span>
              Special Offer
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start w-auto sm:flex-col  sm:gap-2">
            <Text
              className="border-2 border-blue-A400 border-solid capitalize flex h-10 items-center justify-center rounded-[50%] text-blue-A400 text-center text-xl w-10"
              size="txtManropeRegular20BlueA400"
            >
              4
            </Text>
            <Text
              className="capitalize text-black-900 text-xl w-auto flex sm:text-xs sm:leading-0 sm:text-center"
              size="txtManropeRegular20"
            >
              <span className="block sm:hidden"> Step 4 : </span>
              Confirmation
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[127px] mt-[80px] mx-auto mt-10 mx-auto rounded-[10px] w-full">
          <div className="flex md:flex-col flex-row items-start w-full px-[40px] gap-10	sm:gap-6 sm:flex-col-reverse sm:px-[0px]">
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-1/2 md:w-full">
              <Img
                className=" sm:h-auto rounded-[10px] w-full h-[610px] sm:hidden md:h-[100%]"
                src="images/img_image4.png"
                alt="imageFour"
              />
              <div className="bg-white-A700 flex flex-col gap-[18px] items-start justify-start p-6 rounded-[10px] w-full">
                <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_rectangle1127.png"
                    alt="rectangle1127"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Img
                      className="h-[11px]"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Text
                        className="text-blue_gray-900_01 text-sm w-auto"
                        size="txtManropeBold14"
                      >
                        Ken T.
                      </Text>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M15.64 7.64093L14.5523 6.37725C14.3443 6.13731 14.1764 5.68942 14.1764 5.3695V4.00984C14.1764 3.16205 13.4805 2.46623 12.6327 2.46623H11.2731C10.9612 2.46623 10.5053 2.29827 10.2653 2.09032L9.00164 1.00259C8.44978 0.530711 7.54601 0.530711 6.98615 1.00259L5.73046 2.09832C5.49052 2.29827 5.03463 2.46623 4.72271 2.46623H3.33906C2.49127 2.46623 1.79544 3.16205 1.79544 4.00984V5.3775C1.79544 5.68942 1.62749 6.13731 1.42754 6.37725L0.347806 7.64893C-0.116078 8.20079 -0.116078 9.09657 0.347806 9.64843L1.42754 10.9201C1.62749 11.1601 1.79544 11.6079 1.79544 11.9199V13.2875C1.79544 14.1353 2.49127 14.8311 3.33906 14.8311H4.72271C5.03463 14.8311 5.49052 14.9991 5.73046 15.207L6.99414 16.2948C7.54601 16.7667 8.44978 16.7667 9.00964 16.2948L10.2733 15.207C10.5133 14.9991 10.9612 14.8311 11.2811 14.8311H12.6407C13.4885 14.8311 14.1843 14.1353 14.1843 13.2875V11.9279C14.1843 11.6159 14.3523 11.1601 14.5603 10.9201L15.648 9.65643C16.1119 9.10457 16.1119 8.1928 15.64 7.64093ZM11.3211 7.13706L7.45803 11.0001C7.34606 11.1121 7.1941 11.1761 7.03414 11.1761C6.87418 11.1761 6.72221 11.1121 6.61024 11.0001L4.67472 9.06458C4.44278 8.83264 4.44278 8.44873 4.67472 8.21679C4.90667 7.98485 5.29057 7.98485 5.52251 8.21679L7.03414 9.72841L10.4733 6.28927C10.7052 6.05733 11.0891 6.05733 11.3211 6.28927C11.553 6.52121 11.553 6.90512 11.3211 7.13706Z"
                          fill="#5BB59A"
                        />
                      </svg>
                      <Text className="text-left text-xs border-0">
                        Verified Customer
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="leading-[150.00%] w-full text-base text-blue_gray-700"
                  size="txtManropeRegular16"
                >
                  “As soon as the Clarifions arrived I put one in my bedroom.
                  This was late in the afternoon. When I went to the bedroom in
                  the evening it smelled clean. When I went to bed I felt I
                  could breathe better. Wonderful.”
                </Text>
              </div>
            </div>

            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-1/2 md:w-full sm:gap-6">
              <Text
                className="capitalize leading-[140.00%] md:max-w-full md:text-3xl sm:text-[24px] text-[32px] text-black-900 sm:text-center"
                size="txtManropeSemiBold32"
              >
                <span className="text-blue-A400 font-manrope text-left font-normal">
                  ONE TIME ONLY
                </span>
                <span className="text-black-900 font-manrope text-left font-normal">
                  {" "}
                  special price for 6 extra Clarifion for only{" "}
                </span>
                <span className="text-blue-A400 font-manrope text-left font-normal">
                  $14 each
                </span>
                <span className="text-black-900 font-manrope text-left font-normal">
                  {" "}
                  ($84.00 total!)
                </span>
              </Text>
              <Img
                className=" sm:h-auto rounded-[10px] w-full h-[610px] hidden sm:block"
                src="images/img_image4.png"
                alt="imageFour"
              />
              <div className="flex sm:flex-row flex-row gap-6 items-start justify-start w-full sm:gap-4">
                <div className="bg-blue-A400 flex flex-col h-[134px] items-center justify-start rounded-[10px] w-[134px]  sm:h-[80px] sm:w-[80px]">
                  <Img
                    className="h-[134px] md:h-auto object-cover rounded-[10px] w-[134px]  sm:h-[80px] sm:w-[80px]"
                    src="images/img_imageremovebgpreview.png"
                    alt="imageremovebgpr"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full sm:gap-[12px]">
                  <div className="flex flex-row items-center justify-between w-full h-5">
                    <Text
                      className="capitalize text-black-900 text-xl w-auto leading-4 sm:text-sm"
                      size="txtManropeRegular20"
                    >
                      Clarifion Air Ionizer
                    </Text>
                    <div className="flex flex-row gap-2.5 items-center justify-center w-auto ">
                      <Text
                        className="capitalize line-through text-base text-gray-500_01 w-auto sm:text-xs"
                        size="txtManropeSemiBold16"
                      >
                        $180
                      </Text>
                      <Text
                        className="capitalize text-[22px] text-blue-A400 sm:text-lg md:text-xl w-auto sm:text-sm"
                        size="txtManropeSemiBold22"
                      >
                        $84
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[18px] w-[98px]"
                    src="images/img_stars.svg"
                    alt="stars"
                  />
                  <Radio
                    value="stock"
                    className="font-light leading-[normal] text-base text-blue_gray-800 text-left flex items-center h-4 sm:text-xs"
                    inputClassName="h-4 mr-[16px] rounded-lg w-4"
                    checked={true}
                    name="stock"
                    label="12 left in Stock"
                    id="stock"
                  ></Radio>

                  <Text className="leading-[140.00%] max-w-[398px] md:max-w-full text-base text-blue_gray-700 block sm:hidden">
                    Simply plug a Clarifion into any standard outlet and replace
                    bulky, expensive air purifiers with a simple.
                  </Text>
                </div>
              </div>
              <Text className="leading-[140.00%] max-w-[398px] md:max-w-full text-base text-blue_gray-700 hidden sm:block sm:text-xs">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    className="sm:w-[14px] sm:h-[14px]"
                  >
                    <path
                      d="M1.99976 11L8.65858 18L21.9998 4"
                      stroke="#2C7EF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Text className="sm:pr-5 text-base text-blue_gray-700 text-left sm:text-xs">
                    Negative Ion Technology may{" "}
                    <span className="font-bold">help with allergens</span>
                  </Text>
                </div>

                <div className="flex flex-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    className="sm:w-[14px] sm:h-[14px]"
                  >
                    <path
                      d="M1.99976 11L8.65858 18L21.9998 4"
                      stroke="#2C7EF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Text className="sm:pr-5 text-base text-blue_gray-700 text-left sm:text-xs">
                    Designed for{" "}
                    <span className="font-bold">air rejuvenation</span>
                  </Text>
                </div>
                <div className="flex flex-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    className="sm:w-[14px] sm:h-[14px]"
                  >
                    <path
                      d="M1.99976 11L8.65858 18L21.9998 4"
                      stroke="#2C7EF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Text className="sm:pr-5 text-base text-blue_gray-700 text-left sm:text-xs">
                    <span className="font-bold"> Perfect for every room </span>
                    in all types of places.
                  </Text>
                </div>
              </div>
              <div
                name="price_Three"
                className="p-0 bg-blue-50_01 text-black-900 rounded-[10px] px-3 py-4 flex items-center text-base  text-left w-full"
              >
                <div className="h-8 mr-4 w-8 bg-blue-A400 p-1.5 rounded-[50%] flex justify-center items-center">
                  <Img
                    className="h-[19px] my-auto"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                </div>
                <p>
                  Save
                  <span className="text-blue-A400"> 53% </span>
                  and get
                  <span className="text-blue-A400">
                    {" "}
                    6 extra Clarifision{" "}
                  </span>{" "}
                  for only
                  <span className="text-blue-A400"> $14 Each. </span>{" "}
                </p>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-full sm:gap-3">
                <div className="flex flex-col gap-5 items-center justify-start w-full sm:gap-3">
                  <Button
                    className="cursor-pointer flex items-center justify-center w-full"
                    rightIcon={
                      <div className="ml-[19px]  sm:ml-[16px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          viewBox="0 0 18 15"
                          fill="none"
                        >
                          <path
                            d="M17.0806 8.19875C17.4665 7.81284 17.4665 7.18716 17.0806 6.80125L10.7918 0.512475C10.4059 0.126565 9.78022 0.126565 9.39431 0.512475C9.0084 0.898386 9.0084 1.52407 9.39431 1.90998L14.9843 7.5L9.39431 13.09C9.0084 13.4759 9.0084 14.1016 9.39431 14.4875C9.78022 14.8734 10.4059 14.8734 10.7918 14.4875L17.0806 8.19875ZM0.381836 8.48819H16.3818V6.51181H0.381836V8.48819Z"
                            fill="white"
                          />
                        </svg>
                        {/* <Img src="images/img_line_1.svg" alt="Line 1" /> */}
                      </div>
                    }
                    shape="round"
                    color="green_500"
                    size="sm"
                  >
                    <div className="font-bold leading-[normal] text-left text-xl uppercase sm:text-sm">
                      Yes - Claim my discount
                    </div>
                  </Button>
                  <div className="border border-blue_gray-100 border-solid flex sm:flex-col flex-row gap-4 items-center justify-between px-4 py-2 rounded w-full  sm:py-[1rem]">
                    <div className="flex w-full justify-around sm:justify-between">
                      <Text
                        className="capitalize text-blue_gray-700 text-xs w-auto"
                        size="txtManropeRegular12"
                      >
                        Free shipping
                      </Text>
                      <Line className="bg-blue_gray-100 h-4 sm:h-[20px] sm:w-[1px] w-px" />
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-3 w-3"
                          src="images/img_lock71.svg"
                          alt="lockSeventyOne"
                        />
                        <Text
                          className="capitalize text-blue_gray-700 text-center text-xs w-auto"
                          size="txtManropeRegular12"
                        >
                          Secure 256-bit SSL encryption.
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-4 sm:h-px sm:w-full w-px" />
                    <div className="flex flex-row gap-0.5 items-center justify-center w-auto">
                      <Img
                        className="h-3.5"
                        src="images/img_ticket.svg"
                        alt="ticket"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_google.svg"
                        alt="google"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_ticket_black_900.svg"
                        alt="ticket_One"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_ticket_black_900_14x24.svg"
                        alt="ticket_Two"
                      />
                      <Img
                        className="h-3.5 w-6"
                        src="images/img_applepay.svg"
                        alt="applepay"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_group.svg"
                        alt="group"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="text-lg text-red-600 underline uppercase w-auto sm:text-xs"
                  size="txtManropeMedium18"
                >
                  No thanks, I don’t want this.
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-full">
                <Img
                  className="h-[88px] md:h-auto object-cover w-[88px] sm:h-[48px] sm:w-[48px]"
                  src="images/img_image6.png"
                  alt="imageSix"
                />
                <Text
                  className="leading-[140.00%] w-full text-base text-blue_gray-700 sm:text-xs"
                  size="txtManropeRegular16"
                >
                  <span className="text-blue_gray-700 font-manrope text-left font-normal">
                    If you are not completely thrilled with your Clarifion - We
                    have a{" "}
                  </span>
                  <span className="text-blue_gray-700 font-manrope text-left font-bold">
                    30 day satisfaction guarantee
                  </span>
                  <span className="text-blue_gray-700 font-manrope text-left font-normal">
                    . Please refer to our return policy at the bottom of the
                    page for more details. Happy Shopping!
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[61px] p-6 sm:px-5 w-full sm:gap-6">
          <div className="flex sm:flex-1 flex-row gap-4 items-center justify-start sm:justify-center md:ml-[0] ml-[103px] md:px-5 py-2 w-auto sm:w-full">
            <Text
              className="capitalize text-base text-white-A700 w-auto sm:text-xs"
              size="txtManropeRegular16WhiteA700"
            >
              Copyright (c) 2023
            </Text>
            <Line className="bg-white-A700 h-6 sm:h-px sm:w-full w-px sm:w-[1px] sm:h-[15px]" />
            <Text
              className="lowercase text-base text-white-A700 w-auto sm:text-xs"
              size="txtManropeRegular16WhiteA700"
            >
              Clarifionsupport@clarifion.com
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start mr-[95px] md:px-5 w-auto sm:mr-[0px]">
            <Img
              className="h-4 w-4"
              src="images/img_lock71_white_a700.svg"
              alt="lockSeventyOne_One"
            />
            <Text
              className="capitalize text-base text-center text-white-A700 w-auto sm:text-xs"
              size="txtManropeRegular16WhiteA700"
            >
              Secure 256-bit SSL encryption.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClarifionUpsellPage;
