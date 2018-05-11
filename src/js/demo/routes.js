angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
    $stateProvider
      .state('app.icons', {
        url: "/icons",
        abstract: true,
        template: '<ui-view></ui-view>',
        ncyBreadcrumb: {
          label: 'Icons'
        }
      })
      .state('app.icons.flags', {
        url: '/flags',
        templateUrl: 'views/icons/flags.html',
        ncyBreadcrumb: {
          label: 'Flags'
        }
      })
      .state('app.icons.fontawesome', {
        url: '/font-awesome',
        templateUrl: 'views/icons/font-awesome.html',
        ncyBreadcrumb: {
          label: 'Font Awesome'
        }
      })
      .state('app.icons.simplelineicons', {
        url: '/simple-line-icons',
        templateUrl: 'views/icons/simple-line-icons.html',
        ncyBreadcrumb: {
          label: 'Simple Line Icons'
        }
      })
      .state('app.components', {
        url: "/components",
        abstract: true,
        template: '<ui-view></ui-view>',
        ncyBreadcrumb: {
          label: 'Components'
        }
      })
      .state('app.components.buttons', {
        url: '/buttons',
        templateUrl: 'views/components/buttons.html',
        ncyBreadcrumb: {
          label: 'Buttons'
        }
      })
      .state('app.components.social-buttons', {
        url: '/social-buttons',
        templateUrl: 'views/components/social-buttons.html',
        ncyBreadcrumb: {
          label: 'Social Buttons'
        }
      })
      .state('app.components.cards', {
        url: '/cards',
        templateUrl: 'views/components/cards.html',
        ncyBreadcrumb: {
          label: 'Cards'
        }
      })
      .state('app.components.forms', {
        url: '/forms',
        templateUrl: 'views/components/forms.html',
        ncyBreadcrumb: {
          label: 'Forms'
        }
      })
      .state('app.components.switches', {
        url: '/switches',
        templateUrl: 'views/components/switches.html',
        ncyBreadcrumb: {
          label: 'Switches'
        }
      })
      .state('app.components.tables', {
        url: '/tables',
        templateUrl: 'views/components/tables.html',
        ncyBreadcrumb: {
          label: 'Tables'
        }
      })
      .state('app.widgets', {
        url: '/widgets',
        templateUrl: 'views/widgets.html',
        ncyBreadcrumb: {
          label: 'Widgets'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['js/controllers/widgets.js']
            });
          }]
        }
      })
      .state('app.charts', {
        url: '/charts',
        templateUrl: 'views/charts.html',
        ncyBreadcrumb: {
          label: 'Charts'
        },
        resolve: {
          // Plugins loaded before
          // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
          //     return $ocLazyLoad.load([
          //         {
          //             serial: true,
          //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
          //         }
          //     ]);
          // }],
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/charts.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for Registration Module
      .state('app.registration', {
        url: '/registration',
        templateUrl: 'authentication/registration/registration.html',
        ncyBreadcrumb: {
          label: 'Registration'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['authentication/registration/registration.component.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for clients module
      .state('app.customers', {
        url: '/customers',
        templateUrl: 'customers/customers.html',
        ncyBreadcrumb: {
          label: 'Customers'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['customers/customers.controller.js']
            });
          }]
        }
      })


        //nikpawar89
        .state('app.viewcustomer', {
            url: '/customer/viewcustomer',
            templateUrl: 'customers/view-customer/view-customer.html',
            ncyBreadcrumb: {
                label: 'view Customers'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['customers/view-customer/view-customer.controller.js']
                    });
                }]
            }
        })

        .state('app.viewsubscription', {
            url: '/subscription/viewsubscription',
            templateUrl: 'subscriptions/view-subscription/view-subscription.html',
            ncyBreadcrumb: {
                label: 'view subscription'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['subscriptions/view-subscription/view-subscription.controller.js']
                    });
                }]
            }
        })

        .state('app.createsubscription', {
            url: '/subscription/createsubscription',
            templateUrl: 'subscriptions/new-subscription/create-subscription.html',
            ncyBreadcrumb: {
                label: 'view subscription'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['subscriptions/new-subscription/create-subscription.controller.js']
                    });
                }]
            }
        })

        .state('app.viewproductline', {
            url: '/productlines/viewproductline',
            templateUrl: 'product-lines/view-product-lines/view-product-line.html',
            ncyBreadcrumb: {
                label: 'view product line'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['product-lines/view-product-lines/view-product-line.controller.js']
                    });
                }]
            }
        })

        .state('app.viewpriceagreement', {
            url: '/productlines/viewpriceagreement',
            templateUrl: 'product-lines/price-agreements/price-agreement.html',
            ncyBreadcrumb: {
                label: 'view price agreement'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['product-lines/price-agreements/price-agreement.controller.js']
                    });
                }]
            }
        })

        .state('app.viewsupplier', {
            url: '/suppliers/viewsupplier',
            templateUrl: 'suppliers/view-supplier/view-supplier.html',
            ncyBreadcrumb: {
                label: 'view supplier'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['suppliers/view-supplier/view-supplier.controller.js']
                    });
                }]
            }
        })

        .state('app.clientissue', {
            url: '/clientissues/viewissues',
            templateUrl: 'client-issues/view-issues/view-issue.html',
            ncyBreadcrumb: {
                label: 'view issue'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['client-issues/view-issues/view-issue.controller.js']
                    });
                }]
            }
        })

        .state('app.createnewuser', {
            url: '/user/createnewuser',
            templateUrl: 'users/new-user/new-user.html',
            ncyBreadcrumb: {
                label: 'new user'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['users/new-user/new-user.controller.js']
                    });
                }]
            }
        })

        .state('app.viewuser', {
            url: '/user/viewuser',
            templateUrl: 'users/view-user/view-user.html',
            ncyBreadcrumb: {
                label: 'view user'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['users/view-user/view-user.controller.js']
                    });
                }]
            }
        })

        .state('app.viewproduct', {
            url: '/product/viewproduct',
            templateUrl: 'products/view-product/view-product.html',
            ncyBreadcrumb: {
                label: 'view product'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['products/view-product/view-product.controller.js']
                    });
                }]
            }
        })

        .state('app.newproduct', {
            url: '/product/newproduct',
            templateUrl: 'products/new-product/new-product.html',
            ncyBreadcrumb: {
                label: 'new product'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['products/new-product/new-product.controller.js']
                    });
                }]
            }
        })

        .state('app.viewplan', {
            url: '/plans/viewplan',
            templateUrl: 'plans/view-plan/view-plan.html',
            ncyBreadcrumb: {
                label: 'View Plans'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['plans/view-plan/view-plan.controller.js']
                    });
                }]
            }
        })
        // end of view routes

      //pramod109
      //Routing for client-issues module
      .state('app.client-issues', {
        url: '/client-issues',
        templateUrl: 'client-issues/client-issues.html',
        ncyBreadcrumb: {
          label: 'Customer Issues'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['client-issues/client-issues.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for new-client-issue module
      .state('app.new-client-issue', {
        url: '/new-client-issue',
        templateUrl: 'client-issues/new-client-issue/new-client-issue.html',
        ncyBreadcrumb: {
          label: 'Customer Issues  /  New Customer Issue'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['client-issues/new-client-issue/new-client-issue.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for plans module
      .state('app.plans', {
        url: '/plans',
        templateUrl: 'plans/plans.html',
        ncyBreadcrumb: {
          label: 'Plans'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['plans/plans.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for suppliers module
      .state('app.suppliers', {
        url: '/suppliers',
        templateUrl: 'suppliers/suppliers.html',
        ncyBreadcrumb: {
          label: 'Suppliers'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['suppliers/suppliers.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for subscriptions module
      .state('app.subscriptions', {
        url: '/subscriptions',
        templateUrl: 'subscriptions/subscriptions.html',
        ncyBreadcrumb: {
          label: 'Subscriptions'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['subscriptions/subscriptions.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for vouchers module
      .state('app.vouchers', {
        url: '/vouchers',
        templateUrl: 'vouchers/vouchers.html',
        ncyBreadcrumb: {
          label: 'Vouchers'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['vouchers/vouchers.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for transactions module
      .state('app.transactions', {
        url: '/transactions',
        templateUrl: 'transactions/transactions.html',
        ncyBreadcrumb: {
          label: 'Transactions'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['transactions/transactions.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for users module
      .state('app.users', {
        url: '/users',
        templateUrl: 'users/users.html',
        ncyBreadcrumb: {
          label: 'Users'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['users/users.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for products module
      .state('app.products', {
        url: '/products',
        templateUrl: 'products/products.html',
        ncyBreadcrumb: {
          label: 'Products'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['products/products.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for new-customer module
      .state('app.new-customer', {
        url: '/new-customer',
        templateUrl: 'customers/new-customer/new-customer.html',
        ncyBreadcrumb: {
          label: 'Customers  /  New Customer'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['customers/new-customer/new-customer.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for new-supplier module
      .state('app.new-supplier', {
        url: '/new-supplier',
        templateUrl: 'suppliers/new-supplier/new-supplier.html',
        ncyBreadcrumb: {
          label: 'Suppliers  /  New Supplier'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['suppliers/new-supplier/new-supplier.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for product-lines module
      .state('app.product-lines', {
        url: '/product-lines',
        templateUrl: 'product-lines/product-lines.html',
        ncyBreadcrumb: {
          label: 'Product Lines'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['product-lines/product-lines.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for new product-lines module
      .state('app.new-product-line', {
        url: '/product-lines/new-product-line',
        templateUrl: 'product-lines/new-product-line/new-product-line.html',
        ncyBreadcrumb: {
          label: 'Product Lines  /  New Product Line'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['product-lines/new-product-line/new-product-line.controller.js']
            });
          }]
        }
      })

      //pramod109
      //Routing for new plan module
      .state('app.new-plan', {
        url: '/plans/new-plan',
        templateUrl: 'plans/new-plan/new-plan.html',
        ncyBreadcrumb: {
          label: 'Plans  /  New Plan'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['plans/new-plan/new-plan.controller.js']
            });
          }]
        }
      })

  }]);
