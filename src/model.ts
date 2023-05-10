export interface Utility {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
  isMobile: boolean
}

//Today's Deal card (1st Fold)
export interface TodaysDealData {
  id: string
  maxDiscount?: number
  fixedDiscount?: number
  timer?: number
  name: string
  image: string
}

export interface Stars {
  element: React.ReactElement
}

//Review Purchase Card (2nd Fold)
export interface ReviewPurchaseData {
  img: string
}

//Category Discount Card (2nd Fold)
export interface CategoryDiscountData {
  id: string
  title: string
  products: {
    img: string
    name?: string
  }[]
  cta?: string
}

//Keep Shopping Card (2nd Fold)
export interface KeepShoppingData {
  id: string
  cta: string
  product: {
    id: string
    img: string
    name: string
    discount_price: number
    original_price: number
  }[]
}

//Product Detail Card (3rd Fold)
export interface ProductDetailData {
  id: string
  img: string
  title: string
  rating: number
  discount?: number
  category?: string
  discount_price?: number
  original_price: number
  delivery_date: string
  free_delivery?: boolean
}

//Card Props
export interface CardProp {
  cardData: any
}

//Generic Card
export interface GenericCard {
  type:
    | 'todays-deal'
    | 'review-purchase'
    | 'category-discount'
    | 'keep-shopping'
    | 'product-detail'

  data:
    | TodaysDealData
    | ReviewPurchaseData
    | CategoryDiscountData
    | KeepShoppingData
    | ProductDetailData
}

//Product Section
export interface ProductSectionData {
  type:
    | 'todays-deal'
    | 'review-purchase'
    | 'category-discount'
    | 'keep-shopping'
    | 'product-detail'

  cardData:
    | TodaysDealData[]
    | ReviewPurchaseData
    | CategoryDiscountData
    | KeepShoppingData
    | ProductDetailData[]
}
