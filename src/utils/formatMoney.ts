const formatPrice = (price: number, currency: string = 'VND'): string => {
  return price.toLocaleString('vi-VN', { style: 'currency', currency }).replace('₫', 'VNĐ')
}
export default formatPrice
