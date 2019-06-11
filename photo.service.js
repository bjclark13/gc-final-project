function PhotoService($http) { 
  
  const service = this;

  service.getPhotos = (queryText, photoCategory, photoOrientation) => {
    return $http.get('https://pixabay.com/api/', {
      params: {
        key: '12720616-1db5a8f546ac81882f86afb32',
        lang: 'en',
        image_type: 'photo',
        safesearch: 'true',
        q: queryText,
        category: photoCategory,
        orientation: photoOrientation,
      }
    });
  };

  service.getIndividualPhoto = (id) => {
    return $http.get('https://pixabay.com/api/?', {
      params: {
        key: '12720616-1db5a8f546ac81882f86afb32', 
        id: id,
      }
    });
  }   

  service.getColorPalette = (image) => {
    let data = { 'url': 'https://pixabay.com/get/52e2d0414a51a514f6da8c7dda79367c123ddee352576c4870297bd49644c65fb0_1280.jpg'};
    data = JSON.stringify(data);
    return $http({
      url: "https://colors.rmotr.com/api/extract",
      headers: {
        'content-type': 'application/json',
      },
      method: "POST",
      data: data, 
    }).then((response) => {
      return response.data;
    });
  }

  service.extractColor = () => {
    console.log("test");
    return $http.get('https://apicloud-colortag.p.mashape.com/tag-url.json', {
      headers:{
        'X-RapidAPI-Host': 'apicloud-colortag.p.rapidapi.com',
        'X-RapidAPI-Key': '54bc82a03cmshc3794caaabaadcfp1d96b5jsn243d8780d1bd'
      },
      params: {
        url: 'https://cdn.pixabay.com/photo/2019/06/05/02/56/butterfly-4252831_150.jpg'
      }
    }).then((response) => {
      return response.data;
    }).catch( (error)=>{
      console.error(error);
    });
  }

}

angular.module('ColorApp')
.service('PhotoService', ['$http', PhotoService])