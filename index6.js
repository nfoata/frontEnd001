// Code goes here



var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination','pascalprecht.translate']);


myApp.config(function ($translateProvider) {
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.translations('en', {
    SERVICE_TITLE: 'Device Type Service',
    ITEMS_PER_PAGE: 'Items per page:',
    PAGE: 'Page:',
    PLACEHOLDER_GLOBAL_SEARCH: 'Global search ...',
    COLUMN_DISPLAY: 'Columns to show',
    COLUMN1_TITLE: 'Device type owner',
    COLUMN2_TITLE: 'Device type identifier',
    COLUMN3_TITLE: 'Device type features',
    COLUMN4_TITLE: 'Device type tags',
    PLACEHOLDER_C1: 'eg: Nissan',
    PLACEHOLDER_C2: 'eg: XSPY',
    PLACEHOLDER_C3: 'eg: CAN',
    PLACEHOLDER_C4: 'eg: PE_CALL',
    RIGHTS: 'Vodafone Automotive. All rights reserved.'
  });
  $translateProvider.translations('fr', {
    SERVICE_TITLE: 'Service : Types d\'appareil',
    ITEMS_PER_PAGE: 'Nombre de lignes par page :',
    PAGE: 'Page :',
    PLACEHOLDER_GLOBAL_SEARCH: 'Recherche globale ...',
    COLUMN_DISPLAY: 'Colonnes à afficher',
    COLUMN1_TITLE: 'Propriétaire',
    COLUMN2_TITLE: 'Identifiant',
    COLUMN3_TITLE: 'Fonctionnalités',
    COLUMN4_TITLE: 'Etiquettes',
    PLACEHOLDER_C1: 'ex : Nissan',
    PLACEHOLDER_C2: 'ex : XSPY',
    PLACEHOLDER_C3: 'ex : CAN',
    PLACEHOLDER_C4: 'ex : PE_CALL',
    RIGHTS: 'Vodafone Automotive. Tous droits reservés.'
  });
  $translateProvider.translations('it', {
    SERVICE_TITLE: 'Servizio : Tipi di dispositivo',
    ITEMS_PER_PAGE: 'I numeri di riga per pagina :',
    PAGE: 'Pagina :',
    PLACEHOLDER_GLOBAL_SEARCH: 'Ricerca globale ...',
    COLUMN_DISPLAY: 'Colonne da mostrare',
    COLUMN1_TITLE: 'Proprietario',
    COLUMN2_TITLE: 'Accesso',
    COLUMN3_TITLE: 'Lineamenti',
    COLUMN4_TITLE: 'Etichette',
    PLACEHOLDER_C1: 'es : Nissan',
    PLACEHOLDER_C2: 'es : XSPY',
    PLACEHOLDER_C3: 'es : CAN',
    PLACEHOLDER_C4: 'es : PE_CALL',
    RIGHTS: 'Vodafone Automotive. Tutti i diritti riservati.'
  });
  $translateProvider.preferredLanguage('en');
});

function LanguageController($scope, $translate) {
  // For translation
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
  $scope.userData = {
    name: 'Xavier',
    age: 25
  };

}

function MyController($scope, $http) {

  // For showing checkboxes
  $scope.showCheckboxes = false;

  // For checkboxes
  $scope.selected = [true,true,true,true];
  $scope.checkboxes = [{
      "id": 0,
       "value": "Device type owner",
       "column_title": "COLUMN1_TITLE",
       "checked": true
  }, {
      "id": 1,
       "value": "Device type identifier",
       "column_title": "COLUMN2_TITLE",
       "checked": true
  }, {
      "id": 2,
       "value": "Device type features",
       "column_title": "COLUMN3_TITLE",
       "checked": true
  }, {
      "id": 3,
       "value": "Device type tags",
       "column_title": "COLUMN4_TITLE",
       "checked": true
  }];
  $scope.checkedOrNot = function (id, isChecked) {
      $scope.selected[id]=isChecked;
  }
  $scope.isChecked = function (id) {
      return $scope.selected[id];
  }

  // For elements per pages
  $scope.currentPage = 1;
  $scope.pageSize = 5;
  $scope.elements = [];

  //Define a new search scope for the filter
  //$scope.searchC= [ 0, 1 ,2, 3 ];
  $scope.searchC1={};
  $scope.searchC2={};
  $scope.searchC3={};
  $scope.searchC4={};

  $http.get("deviceTypes.json").then(function (response) {
      console.log(response);
      $scope.deviceTypes = response.data.types;
      console.log( $scope.deviceTypes );
      for(var i=0;i< $scope.deviceTypes.length;i++) {
              $scope.elements.push($scope.deviceTypes[i] );
      }
  });

  $scope.pageChangeHandler = function(num) {
      console.log('page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('LanguageController', LanguageController);
myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);

