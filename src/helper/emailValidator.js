export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Email không thể rỗng."
    if (!re.test(email)) return 'Ooops! Chúng tôi cần email hợp lệ.'
    return ''
  }