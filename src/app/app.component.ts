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
      show: true,
      displayIcon: "dashboard",
      displayName: "Dashboard",
      subMenuList: [
        {
          hasSubMenu: false,
          show: true,
          displayName: "Analytics"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Project"
        }
      ]
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "today",
      displayName: "Calendar"
    },
    {
      hasSubMenu: true,
      show: true,
      displayIcon: "shopping_cart",
      displayName: "E-Commerce",
      subMenuList: [
        {
          hasSubMenu: false,
          show: true,
          displayName: "Products"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Product Detail"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Orders"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Order Detail"
        }
      ]
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "school",
      displayName: "Academy"
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "email",
      displayName: "Mail",
      badgeValue: 25
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "email",
      displayName: "Mail Ngrx",
      badgeValue: 13
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "chat",
      displayName: "Chat",
      badgeValue: 13
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "folder",
      displayName: "File Manager"
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "check_box",
      displayName: "To-Do",
      badgeValue: 3
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "assessment",
      displayName: "Scrumboard"
    },
    {
      hasSubMenu: true,
      show: true,
      displayIcon: "lock",
      displayName: "Authentication",
      badgeValue: 10,
      subMenuList: [
        {
          hasSubMenu: false,
          show: true,
          displayName: "Login"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Login v2"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Register"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Register v2"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Forgot Password"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Forgot Password v2"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Reset Password"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Reset Password v2"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Lock Screen"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Mail Confirmation"
        }
      ]
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "alarm",
      displayName: "Coming Soon"
    },
    {
      hasSubMenu: true,
      show: true,
      displayIcon: "error_outline",
      displayName: "Errors",
      subMenuList: [
        {
          hasSubMenu: false,
          show: true,
          displayName: "404"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "500"
        }
      ]
    },
    {
      hasSubMenu: true,
      show: true,
      displayIcon: "receipt",
      displayName: "Invoice",
      subMenuList: [
        {
          hasSubMenu: false,
          show: true,
          displayName: "Modern"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Compact"
        }
      ]
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "build",
      displayName: "Maintenance"
    },
    {
      hasSubMenu: true,
      show: true,
      displayIcon: "attach_money",
      displayName: "Pricing",
      subMenuList: [
        {
          hasSubMenu: false,
          show: true,
          displayName: "Style 1"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Style 2"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Style 3"
        }
      ]
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "person",
      displayName: "Profile"
    },
    {
      hasSubMenu: true,
      show: true,
      displayIcon: "search",
      displayName: "Search",
      subMenuList: [
        {
          hasSubMenu: false,
          show: true,
          displayName: "Classic"
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Modern"
        }
      ]
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "help",
      displayName: "Faq"
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "import_contacts",
      displayName: "Knowledge Base"
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "dashboard",
      displayName: "Cards"
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "crop_portrait",
      displayName: "Forms"
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "photo",
      displayName: "Icons"
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "text_fields",
      displayName: "Typography"
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "help",
      displayName: "Helper Classes"
    },
    {
      hasSubMenu: true,
      show: true,
      displayIcon: "view_quilt",
      displayName: "Page Layouts",
      subMenuList: [
        {
          hasSubMenu: true,
          show: true,
          displayName: "Carded",
          badgeValue: 12,
          subMenuList: [
            {
              hasSubMenu: false,
              show: true,
              displayName: "Full Width #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Full Width #2"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Full Width Tabbed #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Full Width Tabbed #2"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Left Sidebar #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Left Sidebar #2"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Left Sidebar Tabbed #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Left Sidebar Tabbed #2"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Right Sidebar #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Right Sidebar #2"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Right Sidebar Tabbed #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Right Sidebar Tabbed #2"
            }
          ]
        },
        {
          hasSubMenu: true,
          show: true,
          displayName: "Simple",
          badgeValue: 10,
          subMenuList: [
            {
              hasSubMenu: false,
              show: true,
              displayName: "Full Width #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Full Width Tabbed #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Left Sidebar #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Left Sidebar #2"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Left Sidebar #3"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Left Sidebar #4"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Right Sidebar #1"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Right Sidebar #2"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Right Sidebar #3"
            },
            {
              hasSubMenu: false,
              show: true,
              displayName: "Right Sidebar #4"
            }
          ]
        },
        {
          hasSubMenu: false,
          show: true,
          displayName: "Blank"
        }
      ]
    },
    {
      hasSubMenu: false,
      show: true,
      displayIcon: "color_lens",
      displayName: "Colors"
    }
  ];

  searchName: string;
  today: number = Date.now();

  constructor(private themeOptionService: ThemeOptionService) { }

  ngOnInit() {
    this.menuLists = this.tempMenuLists;
    // console.log(this.menuLists);
  }

  public openPanel() {
    this.themeOptionService.open();
  }
 /*
  public onSerachMenuOption() {

    // if (this.searchName != "") {

    //   this.menuLists = this.menuLists.filter(res => {

    //     if (res.displayName.toLowerCase().match(this.searchName.toLowerCase().trim())) {
    //       return res;
    //     }
    //     else if (res.hasSubMenu == true) {

    //       for (let children of res.subMenuList) {
    //         if (children.displayName.toLowerCase().match(this.searchName.toLowerCase().trim())) {
    //           return res.subMenuList
    //         }
    //       }

    //     }


    //   });

    // }
    // else {
    //   this.menuLists = this.tempMenuLists;
    // }

    let arr = this.findObj(this.tempMenuLists, this.searchName)

    if (arr) {
      console.log(arr);
      console.log("successfully find");
    }
  } //function close

  public findObj(obj, searchName) {
    let result;
    for (let i in obj) {

      console.log(obj);
      if (obj.displayName === searchName) {
        console.log("in if part");
        return obj;
      }
      else {
        if (typeof obj[i] === 'object') {
          result = this.findObj(obj[i], searchName);
          console.log("in else part");

          if (result) {
            console.log("in result");
            return result;
          }
        }
      }
    } //for
    return result;
  */


 public onSerachMenuOption() {
 this.menuLists.filter(menu => {
  // if(menu.displayName.toLowerCase().includes(this.searchName.trim().toLowerCase())){
  //   menu.show = true;
  // } else {
  //   menu.show = false;
  // }
     menu = this.checkVisibility(menu);
 })
// for (let index = 0; index < this.menuLists.length; index++) {
//   this.menuLists[index] = this.checkVisibility(this.menuLists[index])
//   }
 }

 checkVisibility(menu){
   console.log('Menu => ',menu);
   
   if(menu.hasSubMenu){
    return this.checkVisibility(menu.subMenuList)
   } else {
     if(menu.hasOwnProperty('displayName')) {

    
     if(menu.displayName.toLowerCase().includes(this.searchName.trim().toLowerCase())){
    menu.show = true;
    return menu;
  }
  } else {
    menu.show = false;
    return menu;  
  }
   }
  // if(menu && menu.displayName.includes(this.searchName.trim().toLowerCase())){
  //   menu.show = true;
  //   return menu;
  //  } else if(menu.hasSubMenu) {
  //   return this.checkVisibility(menu.subMenuList)
  // }
 }

}