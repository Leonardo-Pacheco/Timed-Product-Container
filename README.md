## TimedProductContainer

TimedProductContainer is a product rendering component that receives a start and an end date to calculates the time from the current date to the end date to render products until the last second

![image](https://user-images.githubusercontent.com/88351128/167411759-cc8950c0-baf6-4476-ab7b-93053ef0eee3.png)

## Configuration

1. Add import from component
```
import ProductContainer from "./components/TimedProductContainer/index";
```

2. Now call Timed Product Container in code and pass required props
```
<ProductContainer
        timer={true}
        productsData={productsData}
        startDate={new Date("Year-Month-DayTHour:Minutes:Seconds")}
        endDate={new Date("Year-Month-DayTHour:Minutes:Seconds")}
/>
```

| Prop name | Type | Description |
| ----- | ----- | ----- |
| productsData | object | The data of the products tha will be used |
| startDate | Date | The date that product container will start to render |
| endDate | Date | The date that produc container will stop to render |
| timer | boolean | If passed as false will render the product container without a timer |
| starImg | string | Pass a image url to change star icon |
| starAlt | string | Pass a string to change star image alt |
| shelfCustomStyle | object | Accept styles to change product shelf |
| offerCustomStyle | object | Accept styles to change offer style |
| productImageStyle | object | Accept styles to change product image |
| productNameStyle | object | Accept styles to change product name |
| ratingContainerStyle | object | Accept styles to change rating container |
| starRatingStyle | object | Accept styles to change rating stars |
| oldPriceStyle | object | Accept styles to change old price |
| priceStyle | object | Accept styles to change price |
| installmentsStyle | object | Accept styles to change installments |
| timerStyle | object | Accept styles to change timer |

- shelfCustomStyle object

| Prop name | Type | Description |
| ----- | ----- | ----- |
| width | string | Change the width of product shelf |
| margin | string | Change the margin of product shelf |
| borderRadius | string | Change border radius of product shelf  |
| border | string | Change border of product shelf |

- offerCustomStyle object

| Prop name | Type | Description |
| ----- | ----- | ----- |
| backgroundColor | string | Change the background color of the offer |
| fontSize | string | Change the font size os the offer |
| fontWeight | string | Change the font weight os the offer  |
| borderRadius | string | Change border radius of the offer |
| color | string | Change the color of the offer |
| width | string | Change the width of the offer |
| height | string | Change the height of the offer |
| top | string | Position the offer from the top |
| right | string | Position the offer from the right |
| bottom | string | Position the offer from the bottom |
| left | string | Position the offer from the left |

- productImageStyle object

| Prop name | Type | Description |
| ----- | ----- | ----- |
| width | string | Change the width of product image |
| height | string | Change the margin of product image |
| borderRadius | string | Change border radius of product image  |

- productNameStyle object

| Prop name | Type | Description |
| ----- | ----- | ----- |
| fontSize | string | Change the font size of product name |
| fontWeight | string | Change the font weight of product name |

- ratingContainerStyle object

| Prop name | Type | Description |
| ----- | ----- | ----- |
| width | string | Change the width of rating container |
| justifyContent | string | Change the justify method of rating container |

- starRatingStyle object

| Prop name | Type | Description |
| ----- | ----- | ----- |
| width | string | Change the width of star rating |
| height | string | Change the height of star rating |
| margin | string | Change the margin of star rating |

- oldPriceStyle object

| Prop name | Type | Description |
| ----- | ----- | ----- |
| fontSize | string | Change the old price font size |
| fontWeight | string | Change the old price font weight |
| textDecoration | string | Change the old price text decoration |
| margin | string | Change the old price margin |

- priceStyle object

| Prop name | Type | Description |
| ----- | ----- | ----- |
| fontSize | string | Change the price font size |
| fontWeight | string | Change the price font weight |
| textDecoration | string | Change the price text decoration |
| margin | string | Change the price margin |

- installmentsStyle object

| Prop name | Type | Description |
| ----- | ----- | ----- |
| fontSize | string | Change the installments font size |
| fontWeight | string | Change the installments font weight |
| textDecoration | string | Change the installments text decoration |
| margin | string | Change the installments margin |
