// TEMPLATE DE USER PAGE

var yo = require('yo-yo')
var layout = require('../layout')
var translate = require('../translate')
var axios = require('axios')
var request = require('superagent')

module.exports = function userPage (user) {
  var el = yo`
  <div class="container user-page">
  <div class="row">
    <div class="col s12 m10 offset-m1 l8 offset-l2 center-align heading">
      <div class="row">
        <div class="col s12 m10 offset-m1 l3 offset-l3 center">
          <img src="${user.avatar}" alt="${user.username}" class="responsive-img circle" />
        </div>
        <div class="col s12 m10 offset-m1 l6 left-align">
          <h2 class="hide-on-large-only center-align">${user.name || user.username}</h2>
          <h2 class="hide-on-med-and-down left-align">${user.name || user.username}</h2>
        </div>
      </div>
    </div>
    <div class="row">
      ${user.pictures.map(function (picture) {
        return yo`<div class="col s12 m6 l4">
          <a href="/${user.username}/${picture.id}" class="picture-container">
            <img src="${picture.src}" class="picture" />
            <div class="likes"><i class="fa fa-heart"></i> ${picture.likes || 0}</div>
          </a>
          <div id="modal${picture.id}" class="modal modal-fixed-footer">
            <div class="modal-content">
              <img src="${picture.src}"/>
            </div>
            <div class="modal-footer">
              <div class="btn btn-flat likes">
                <i class="fa fa-heart">${translate.message('likes', { likes: picture.likes || 0})}</i>
              </div>
            </div>
          </div>
        </div>`;
      })}
    </div>
  </div>
</div>
  `

  return layout(el)
}
