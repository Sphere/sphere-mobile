export class URLCheckerClass {

  static youTubeUrlChange(url: string): string {

    // const regExp = /^.*(youtube.com\/|embed\/|watch\?v=)([^#\&\?]*).*/
    // const match = url.match(regExp)
    // if (match && match[2].length === 11) {
    //   return `https://www.youtube.com/embed/${match[2]}`
    // }
    // return url
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}`
    }
      return 'error'
    // return `https://www.youtube.com/embed/${id}`
  }
}
