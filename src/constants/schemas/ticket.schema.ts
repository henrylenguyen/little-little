import * as yup from 'yup'
const ticketSchema = yup
  .object()
  .shape({
    ticketRef: yup.string().required('Bạn vui lòng chọn loại vé'),
    amount: yup.string().required('Bạn vui lòng nhập số lượng vé cần mua'),
    expiry: yup.string().required('Ngày sử dụng vé là bắt buộc'),
    name: yup
      .string()
      .required('Họ tên là bắt buộc')
      .matches(
        /^[a-zA-ZêÊĐĂăâÂẠẤấẮắẦầẨẩẬậạẹẸơƠờỜởỞợÍíỊịÚụúÙùủỦỤƯưỨứỪừỬửỰựỢặẶẰằẲẳÊêỂểỀềỆệễỄẾếđàáäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        { message: 'Họ và tên không được chứa số và ký tự đặc biệt' }
      ),
    email: yup.string().required('Email là bắt buộc').email('Email phải có định dạng example@abc.com'),
    phone: yup
      .string()
      .required('Số điện thoại là bắt buộc')
      .matches(/^(\+84|0)(3|5|7|8|9)\d{8}$/, {
        message: 'Số điện thoại không đúng định dạng'
      })
  })
  .required()
export default ticketSchema
