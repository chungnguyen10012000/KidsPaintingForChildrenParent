export function passwordValidator(password) {
    if (!password) return "Mật khẩu không thể rỗng."
    if (password.length < 8) return 'Mật khẩu phải dài hơn 8 kí tự.'
    return ''
  }
  