import {
  HTTP
}
  from '../util/http-p.js'
class BookModel extends HTTP {
  data = null
  getHotList() {
    return this.request({
      url: 'book/hot_list'
    })

  }
  getDetail(bid){
    return this.request({
      /* url:'book/${bid}/detail' */
      url:'book/' + bid + '/detail'
    })
  }
  getLikeStatus(bid) {
    return this.request({
      /* url: 'book/${bid}/favor' */
      url: 'book/' + bid + '/favor'
    })
  }
  getComments(bid) {
    return this.request({
      /* url: 'book/${bid}/short_comment' */
      url: 'book/' + bid + '/short_comment'
    })
  }
  postComment(bid, comment) {
    return this.request({
      url: 'book/add/short_comment',
      method: 'POST',
      data: {
        book_id: bid,
        content: comment
      }
    })
  }


}
export {
  BookModel
}