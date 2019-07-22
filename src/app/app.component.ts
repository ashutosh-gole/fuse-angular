import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeOptionService } from './services/theme-option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuLists = [];
  tempMenuLists = [
    {
      hasSubMenu: true,
      displayIcon: "dashboard",
      displayName: "Dashboard",
      subMenuList: [
        {
          hasSubMenu: false,
          displayName: "Analytics"
        },
        {
          hasSubMenu: false,
          displayName: "Project"
        }
      ]
    },
    {
      hasSubMenu: false,
      displayIcon: "today",
      displayName: "Calendar"
    },
    {
      hasSubMenu: true,
      displayIcon: "shopping_cart",
      displayName: "E-Commerce",
      subMenuList: [
        {
          hasSubMenu: false,
          displayName: "Products"
        },
        {
          hasSubMenu: false,
          displayName: "Product Detail"
        },
        {
          hasSubMenu: false,
          displayName: "Orders"
        },
        {
          hasSubMenu: false,
          displayName: "Order Detail"
        }
      ]
    },
    {
      hasSubMenu: false,
      displayIcon: "school",
      displayName: "Academy"
    },
    {
      hasSubMenu: false,
      displayIcon: "email",
      displayName: "Mail",
      badgeValue: 25
    },
    {
      hasSubMenu: false,
      displayIcon: "email",
      displayName: "Mail Ngrx",
      badgeValue: 13
    },
    {
      hasSubMenu: false,
      displayIcon: "chat",
      displayName: "Chat",
      badgeValue: 13
    },
    {
      hasSubMenu: false,
      displayIcon: "folder",
      displayName: "File Manager"
    },
    {
      hasSubMenu: false,
      displayIcon: "check_box",
      displayName: "To-Do",
      badgeValue: 3
    },
    {
      hasSubMenu: false,
      displayIcon: "assessment",
      displayName: "Scrumboard"
    },
    {
      hasSubMenu: true,
      displayIcon: "lock",
      displayName: "Authentication",
      badgeValue: 10,
      subMenuList: [
        {
          hasSubMenu: false,
          displayName: "Login"
        },
        {
          hasSubMenu: false,
          displayName: "Login v2"
        },
        {
          hasSubMenu: false,
          displayName: "Register"
        },
        {
          hasSubMenu: false,
          displayName: "Register v2"
        },
        {
          hasSubMenu: false,
          displayName: "Forgot Password"
        },
        {
          hasSubMenu: false,
          displayName: "Forgot Password v2"
        },
        {
          hasSubMenu: false,
          displayName: "Reset Password"
        },
        {
          hasSubMenu: false,
          displayName: "Reset Password v2"
        },
        {
          hasSubMenu: false,
          displayName: "Lock Screen"
        },
        {
          hasSubMenu: false,
          displayName: "Mail Confirmation"
        }
      ]
    },
    {
      hasSubMenu: false,
      displayIcon: "alarm",
      displayName: "Coming Soon"
    },
    {
      hasSubMenu: true,
      displayIcon: "error_outline",
      displayName: "Errors",
      subMenuList: [
        {
          hasSubMenu: false,
          displayName: "404"
        },
        {
          hasSubMenu: false,
          displayName: "500"
        }
      ]
    },
    {
      hasSubMenu: true,
      displayIcon: "receipt",
      displayName: "Invoice",
      subMenuList: [
        {
          hasSubMenu: false,
          displayName: "Modern"
        },
        {
          hasSubMenu: false,
          displayName: "Compact"
        }
      ]
    },
    {
      hasSubMenu: false,
      displayIcon: "build",
      displayName: "Maintenance"
    },
    {
      hasSubMenu: true,
      displayIcon: "attach_money",
      displayName: "Pricing",
      subMenuList: [
        {
          hasSubMenu: false,
          displayName: "Style 1"
        },
        {
          hasSubMenu: false,
          displayName: "Style 2"
        },
        {
          hasSubMenu: false,
          displayName: "Style 3"
        }
      ]
    },
    {
      hasSubMenu: false,
      displayIcon: "person",
      displayName: "Profile"
    },
    {
      hasSubMenu: true,
      displayIcon: "search",
      displayName: "Search",
      subMenuList: [
        {
          hasSubMenu: false,
          displayName: "Classic"
        },
        {
          hasSubMenu: false,
          displayName: "Modern"
        }
      ]
    },
    {
      hasSubMenu: false,
      displayIcon: "help",
      displayName: "Faq"
    },
    {
      hasSubMenu: false,
      displayIcon: "import_contacts",
      displayName: "Knowledge Base"
    },
    {
      hasSubMenu: false,
      displayIcon: "dashboard",
      displayName: "Cards"
    },
    {
      hasSubMenu: false,
      displayIcon: "crop_portrait",
      displayName: "Forms"
    },
    {
      hasSubMenu: false,
      displayIcon: "photo",
      displayName: "Icons"
    },
    {
      hasSubMenu: false,
      displayIcon: "text_fields",
      displayName: "Typography"
    },
    {
      hasSubMenu: false,
      displayIcon: "help",
      displayName: "Helper Classes"
    },
    {
      hasSubMenu: true,
      displayIcon: "view_quilt",
      displayName: "Page Layouts",
      subMenuList: [
        {
          hasSubMenu: true,
          displayName: "Carded",
          badgeValue: 12,
          subMenuList: [
            {
              hasSubMenu: false,
              displayName: "Full Width #1"
            },
            {
              hasSubMenu: false,
              displayName: "Full Width #2"
            },
            {
              hasSubMenu: false,
              displayName: "Full Width Tabbed #1"
            },
            {
              hasSubMenu: false,
              displayName: "Full Width Tabbed #2"
            },
            {
              hasSubMenu: false,
              displayName: "Left Sidebar #1"
            },
            {
              hasSubMenu: false,
              displayName: "Left Sidebar #2"
            },
            {
              hasSubMenu: false,
              displayName: "Left Sidebar Tabbed #1"
            },
            {
              hasSubMenu: false,
              displayName: "Left Sidebar Tabbed #2"
            },
            {
              hasSubMenu: false,
              displayName: "Right Sidebar #1"
            },
            {
              hasSubMenu: false,
              displayName: "Right Sidebar #2"
            },
            {
              hasSubMenu: false,
              displayName: "Right Sidebar Tabbed #1"
            },
            {
              hasSubMenu: false,
              displayName: "Right Sidebar Tabbed #2"
            }
          ]
        },
        {
          hasSubMenu: true,
          displayName: "Simple",
          badgeValue: 10,
          subMenuList: [
            {
              hasSubMenu: false,
              displayName: "Full Width #1"
            },
            {
              hasSubMenu: false,
              displayName: "Full Width Tabbed #1"
            },
            {
              hasSubMenu: false,
              displayName: "Left Sidebar #1"
            },
            {
              hasSubMenu: false,
              displayName: "Left Sidebar #2"
            },
            {
              hasSubMenu: false,
              displayName: "Left Sidebar #3"
            },
            {
              hasSubMenu: false,
              displayName: "Left Sidebar #4"
            },
            {
              hasSubMenu: false,
              displayName: "Right Sidebar #1"
            },
            {
              hasSubMenu: false,
              displayName: "Right Sidebar #2"
            },
            {
              hasSubMenu: false,
              displayName: "Right Sidebar #3"
            },
            {
              hasSubMenu: false,
              displayName: "Right Sidebar #4"
            }
          ]
        },
        {
          hasSubMenu: false,
          displayName: "Blank"
        }
      ]
    },
    {
      hasSubMenu: false,
      displayIcon: "color_lens",
      displayName: "Colors"
    }
  ];

  searchName;
  today: number = Date.now();

  constructor(private themeOptionService: ThemeOptionService) { }

  ngOnInit() {
    this.menuLists = this.tempMenuLists;
    // console.log(this.menuLists);
  }

  public openPanel() {
    this.themeOptionService.open();
  }

  public onSerachMenuOption() {

    if (this.searchName != "") {
      
      this.menuLists = this.menuLists.filter(res => {

        if (res.displayName.toLowerCase().match(this.searchName.toLowerCase().trim())) {
          return res;
        }
        // if (res.hasSubMenu == true) {
        //   this.menuLists = res.subMenuList.filter(result => {

        //     if (result.displayName.toLowerCase().match(this.searchName.toLowerCase())) {
        //       return res;
        //     }

        //   });
        // }

      });
      // for(let i=0; i<this.menuLists.length;i++) {
      //    if(this.menuLists[i].displayName.toLowerCase().match(this.searchName.toLowerCase().trim()))  {
      //      this.menuLists.push(this.menuLists[i]);
      //    }
      // }
    }
    else {
      this.menuLists = this.tempMenuLists;
    }

  }

}