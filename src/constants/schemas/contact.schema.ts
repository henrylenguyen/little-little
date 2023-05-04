import * as yup from 'yup'
export const contactSchema = yup.object({
  name: yup
    .string()
    .required('Họ tên là bắt buộc')
    .matches(
      /^[a-zA-ZêÊĐĂăâÂẠẤấẮắẦầẨẩẬậạẹẸơƠờỜởỞợÍíỊịÚụúÙùủỦỤƯưỨứỪừỬửỰựỢặẶẰằẲẳÊêỂểỀềỆệễỄẾếđàáäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      { message: 'Họ và tên không được chứa số và ký tự đặc biệt' }
    ),
  email: yup.string().required('Email là bắt buộc').email('Email phải có định dạng example@abc.com'),
  address: yup.string().required('Địa chỉ là bắt buộc'),
  phone: yup
    .string()
    .required('Số điện thoại là bắt buộc')
    .matches(/^(\+84|0)(3|5|7|8|9)\d{8}$/, {
      message: 'Số điện thoại không đúng định dạng'
    }),
  message: yup.string().required('Lời nhắn không được để trống')
})
