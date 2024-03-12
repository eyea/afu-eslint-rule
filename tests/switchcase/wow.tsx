import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SeriesImportIntl, SeriesIntl } from './Series.d';
import { AHLinearGradientView } from 'jjj-lib';
import { SRNCusImage } from '~comps/Common';
import { imgCrop, getSeriesPrice, formatPriceUnit } from '~utils';
import { fafa as fafa } from '~aaads';
interface propsIntl {
  data?: SeriesImportIntl | SeriesIntl;
  commonObj?: any;
  headClick?: () => void;
  headXdjClick?: (isAd: boolean) => void;
  isImport?: boolean;
  isToSale?: boolean;
}

const Header = (props?: propsIntl) => {
  const {
    commonObj,
    data,
    data: {
      seriesName,
      fctName,
      levelName,
      dealer_minOriginalPrice,
      xsAdv,
      SeriesState,
      seriesMinPrice,
      seriesMaxPrice,
      seriesImg
    },
    headClick,
    headXdjClick,
    isImport = false,
    isToSale = false
  } = props;

  function switchcase(val) {
    switch (val) {
      case 1:
        console.log(1);
        break;
      case 11:
        console.log(1);
        break;
      case 111:
        console.log(1);
        break;
      case 1111:
        console.log(1);
        break;
      case 111111:
        console.log(1);
        break;
      case 12:
        console.log(1);
        break;
      case 13:
        console.log(1);
        break;
      case 198:
        console.log(1);
        break;
      case 14:
        console.log(1);
        break;
      case 15:
        console.log(1);
        break;
      case 155:
        console.log(1);
        break;
      case 16:
        console.log(1);
        break;
      case 166:
        console.log(1);
        break;
      case 17:
        console.log(1);
        break;
      case 177:
        console.log(1);
        break;
      case 1777:
        console.log(1);
        break;
      case 18:
        console.log(1);
        break;
      case 188:
        console.log(1);
        break;
      case 188888:
        console.log(1);
        break;
      case 1888:
        console.log(1);
        break;
      default:
        console.log("default");
    }
  }

  function switchcasearrow(val) {
    switch (val) {
      case 1:
        console.log(1);
        break;
      case 11:
        console.log(1);
        break;
      case 111:
        console.log(1);
        break;
      case 1111:
        console.log(1);
        break;
      case 111111:
        console.log(1);
        break;
      case 12:
        console.log(1);
        break;
      case 13:
        console.log(1);
        break;
      case 198:
        console.log(1);
        break;
      case 14:
        console.log(1);
        break;
      case 15:
        console.log(1);
        break;
      case 155:
        console.log(1);
        break;
      case 16:
        console.log(1);
        break;
      case 166:
        console.log(1);
        break;
      case 17:
        console.log(1);
        break;
      case 177:
        console.log(1);
        break;
      case 1777:
        console.log(1);
        break;
      case 18:
        console.log(1);
        break;
      case 188:
        console.log(1);
        break;
      case 188888:
        console.log(1);
        break;
      case 1888:
        console.log(1);
        break;
      default:
        console.log("default");
    }
  }
  switchcasearrow(888)
  switchcase(1)
  return (
    <TouchableOpacity
      style={global.useTailwind('w-full,bg-color-white,relative')}
      activeOpacity={0.9}
      onPress={() => {
        headClick && headClick();
      }}
    >

      <View
        style={global.useTailwind(
          'flex-row,item-center,justify-between,h-46,px-8,bg-color-white'
        )}
      >


        {xsAdv && SeriesState !== 40 && xsAdv.click != '' ? (
          <ffafafa
            commonObj={commonObj}
            data={data}
            SeriesState={SeriesState}
            containerStyle={global.useTailwind(
              'w-32,h-14,rounded-1.5,hidden,ml-7'
            )}
            clickState={
              (dealer_minOriginalPrice || (seriesMinPrice && seriesMaxPrice)) &&
              (SeriesState === 20 || SeriesState === 30)
            }
            maidianclick={() => {
              headXdjClick(true);
            }}
            AdData={{
              ...xsAdv,
              areaid: data.posid,
              land: xsAdv.click,
              commonObj: commonObj || {},
              ad_type: 1
            }}
            textStyle={
              (dealer_minOriginalPrice || (seriesMinPrice && seriesMaxPrice)) &&
              (SeriesState === 20 || SeriesState === 30)
                ? '#FFFFFF'
                : '#BFC5D2'
            }
            containerStyleButton={
              (dealer_minOriginalPrice || (seriesMinPrice && seriesMaxPrice)) &&
              (SeriesState === 20 || SeriesState === 30)
                ? ['#206CFE', '#4C88FF']
                : ['#F8F9FC', '#F8F9FC']
            }
            buttonText={xsAdv.title || '询底价'}
          />
        ) : (
          SeriesState !== 40 && (
            <TouchableOpacity
              activeOpacity={0.9}
              style={global.useTailwind('w-32,h-14,rounded-1.5,hidden,ml-7')}
              onPress={() => {
                headXdjClick(false);
              }}
            >
              <AHLinearGradientView
                start={{ x: 1.0, y: 0.0 }}
                end={{ x: 0.0, y: 0.0 }}
                colors={
                  (data.dealer_minOriginalPrice ||
                    (data.seriesMinPrice && data.seriesMaxPrice)) &&
                  (SeriesState === 20 || SeriesState === 30)
                    ? ['#206CFE', '#4C88FF']
                    : ['#F8F9FC', '#F8F9FC']
                }
                alpah={1}
                style={global.useTailwind(
                  'w-full,h-full,flex-row,item-center,justify-center,rounded-1.5,hidden'
                )}
              >
                <Text
                  style={global.useTailwind(
                    `regular,text-6.5,${
                      (data.dealer_minOriginalPrice ||
                        (data.seriesMinPrice && data.seriesMaxPrice)) &&
                      (SeriesState === 20 || SeriesState === 30)
                        ? 'text-color-white'
                        : 'text-color-desc'
                    },bg-color-transparent`
                  )}
                >
                  询底价
                </Text>
              </AHLinearGradientView>
            </TouchableOpacity>
          )
        )}
      </View>
    </TouchableOpacity>
  );
};
export default Header;
