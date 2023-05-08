import * as yup from 'yup'
export const paymentSchema = yup.object({
  name: yup
    .string()
    .required('Trường này là bắt buộc')
    .matches(
      /^[a-zA-ZêÊĐĂăâÂẠẤấẮắẦầẨẩẬậạẹẸơƠờỜởỞợÍíỊịÚụúÙùủỦỤƯưỨứỪừỬửỰựỢặẶẰằẲẳÊêỂểỀềỆệễỄẾếđàáäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      { message: 'Họ và tên chủ thẻ không được chứa số và ký tự đặc biệt' }
    ),
  cardNumber: yup
    .string()
    .matches(/^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/, 'Thẻ ngân hàng không hợp lệ')
    .required('Thẻ ngân hàng là bắt buộc'),
  expiry: yup.string().required('Địa chỉ là bắt buộc'),
  CVC: yup.string().required()
})
