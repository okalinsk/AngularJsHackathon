'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('poogleApp'));

  var MainCtrl,
    scope,
    ngGPlacesAPI,
    geolocation,
    q,
    nearbyDefer,
    geoDefer,
    pooUserDataFetcher;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _ngGPlacesAPI_, $q, _pooUserDataFetcher_, $timeout,
                              _geolocation_) {
    nearbyDefer = $q.defer();
    geoDefer = $q.defer();
    ngGPlacesAPI = _ngGPlacesAPI_;
    geolocation = _geolocation_;
    spyOn(ngGPlacesAPI, 'nearbySearch').and.returnValue(nearbyDefer.promise);
    spyOn(geolocation, 'getLocation').and.returnValue(geoDefer.promise);
    //geoDefer.resolve({coords: {latitude: 0, longitude: 0}});
    scope = $rootScope.$new();
    pooUserDataFetcher = _pooUserDataFetcher_;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $timeout: $timeout,
      ngGPlacesAPI: ngGPlacesAPI,
      pooUserDataFetcher: pooUserDataFetcher,
      geolocation: geolocation
    });

  }));

  describe('geoLocation fail', function () {
    it('Failed should start with default coordinates', function () {
      nearbyDefer.resolve([]);
      geoDefer.reject('');
      scope.$digest();

      expect(geolocation.getLocation).toHaveBeenCalled();
      expect(ngGPlacesAPI.nearbySearch).toHaveBeenCalledWith({latitude:-33.8665433, longitude:151.1956316});
      expect(scope.data.length).toBe(0);
    });

  })

  describe('geoLocation success', function () {

    beforeEach(function () {
      geoDefer.resolve({coords: {latitude: 0, longitude: 0}});
    })

    it('Should start with 0 toilets', function () {
      nearbyDefer.resolve([]);
      scope.$digest();
      expect(geolocation.getLocation).toHaveBeenCalled();
      expect(ngGPlacesAPI.nearbySearch).toHaveBeenCalledWith({latitude:0, longitude:0});
      expect(scope.data.length).toBe(0);
    });



    it('First toilet rating should start at 4:1', function () {
      nearbyDefer.resolve([{name : 'a', vicinity: 'near'}]);
      scope.$digest();
      expect(scope.data.length).toBe(1);
      expect(scope.data[0].userData.upvotes).toBe(0);
      expect(scope.data[0].userData.downvotes).toBe(0);
    });

    it('Upvote should raise rating by 1', function () {
      nearbyDefer.resolve([{name : 'a', vicinity: 'near'}]);
      scope.$digest();

      scope.upVote(scope.data[0]);
      expect(scope.data[0].userData.upvotes).toBe(1);
      scope.downVote(scope.data[0]);
      expect(scope.data[0].userData.downvotes).toBe(1);
    });
  })
});
