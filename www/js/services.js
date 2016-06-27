angular.module('starter.services', ['ngResource'])

.factory('PostService', function($resource, $q, $stateParams) {
  
    var posts = $resource('http://shusmitasharna.com/shusmita2014/portfolio/?format=json', {
      callback: 'JSON_CALLBACK'
    }, {
      get: {
        method: 'JSONP'
      }
    });
    var categories = [
      { id: 0, catid: 11753, cattitle: 'Politics' },
      { id: 1, catid: 1107, cattitle: 'Australia' },
      { id: 2, catid: 16649, cattitle: 'The World' },
      { id: 3, catid: 2272, cattitle: 'Business' },
      { id: 4, catid: 16987, cattitle: 'Companies' },
      { id: 5, catid: 4789, cattitle: 'Economy' },
      { id: 6, catid: 9254, cattitle: 'Markets' },
      { id: 7, catid: 16820, cattitle: 'Players' },
      { id: 8, catid: 9431, cattitle: 'Media' },
      { id: 9, catid: 16657, cattitle: 'Journalism' },
      { id: 10, catid: 8226, cattitle: 'Online' },
      { id: 11, catid: 10956, cattitle: 'Print' },
      { id: 12, catid: 16701, cattitle: 'The ad business' },
      { id: 13, catid: 16702, cattitle: 'TV & Radio' },
      { id: 14, catid: 1, cattitle: 'Blog' }
    ];

    var postCatItem = $resource('http://www.crikey.com.au/e076a47e96beebbdc385f26f37edce19/get_category_posts/?id=:catid', {
      callback: 'JSON_CALLBACK'
    }, {
      get: {
        method: 'JSONP'
      }
    });

    var postItem = $resource('http://www.crikey.com.au/e076a47e96beebbdc385f26f37edce19/get_post/?id=:postid', {
      callback: 'JSON_CALLBACK'
    }, {
      get: {
        method: 'JSONP'
      }
    });
    return {
      /*all: function(id) {
        var q = $q.defer();

       post.get({
          id: id
        }, function(resp) {
          q.resolve(resp);
        }, function(httpResponse) {
          q.reject(httpResponse);
        });

        return q.promise;
      },*/
      getCatItem: function(catid) {
        var q = $q.defer();

       postCatItem.get({
          catid: catid
        }, function(resp) {
          q.resolve(resp);
        }, function(httpResponse) {
          q.reject(httpResponse);
        });

        return q.promise;
      },
      getItem: function(postid) {
        var q = $q.defer();

       postItem.get({
          postid: postid
        }, function(resp) {
          q.resolve(resp);
        }, function(httpResponse) {
          q.reject(httpResponse);
        });

        return q.promise;
      }
    }
})
.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

