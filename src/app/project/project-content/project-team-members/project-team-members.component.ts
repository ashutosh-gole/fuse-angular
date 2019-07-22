import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';

export interface PeriodicElement {
  url: string;
  name: string;
  position: string;
  office: string;
  email: string;
  phone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { url: 'assets/images/avatars/james.jpg', name: 'Jack Gilbert', position: 'Design Manager', office: 'Johor Bahru', email: 'jgilbert48@mail.com', phone: '+16 298 032 7774' },
  { url: 'assets/images/avatars/katherine.jpg', name: 'Kathy Anderson', position: 'Recruiting Manager', office: 'Solţānābād', email: 'kanderson49@mail.com', phone: '+23 572 311 1136' },
  { url: 'assets/images/avatars/andrew.jpg', name: 'Mark Turner', position: 'Recruiting Manager', office: 'Neftegorsk', email: 'mturner4a@mail.com', phone: '+01 139 803 9263' },
  { url: 'assets/images/avatars/jane.jpg', name: 'Kathryn Martinez', position: 'Director of Sales', office: 'Palekastro', email: 'kmartinez4b@mail.com', phone: '+25 467 022 5393' },
  { url: 'assets/images/avatars/alice.jpg', name: 'Annie Gonzales', position: 'Actuary', office: 'Candon', email: 'agonzales4c@mail.edu', phone: '+99 891 619 7138' },
  { url: 'assets/images/avatars/vincent.jpg', name: 'Howard King', position: 'Human Resources', office: 'Bergen op Zoom', email: 'hking4d@mail.gov', phone: '+46 984 348 1409' },
  { url: 'assets/images/avatars/joyce.jpg', name: 'Elizabeth Dixon', position: 'Electrical Engineer', office: 'Písečná', email: 'edixon4e@mail.gov', phone: '+33 332 067 9063' },
  { url: 'assets/images/avatars/danielle.jpg', name: 'Dorothy Morris', position: 'Office Assistant', office: 'Magsaysay', email: 'dmorris4f@mail.com', phone: '+05 490 958 6120' },
  { url: 'assets/images/avatars/carl.jpg', name: 'Mark Gonzales', position: 'Quality Control', office: 'Matsue-shi', email: 'mgonzales4g@mail.com', phone: '+03 168 394 9935' },
  { url: 'assets/images/avatars/profile.jpg', name: 'Catherine Rogers', position: 'Programmer Analyst', office: 'Kangar', email: 'crogers4h@mail.com', phone: '+86 235 407 5373' },
  { url: 'assets/images/avatars/garry.jpg', name: 'Ruth Grant', position: 'Community Outreach', office: 'Beaune', email: 'rgrant4i@mail.pl', phone: '+36 288 083 8460' },
  { url: 'assets/images/avatars/james.jpg', name: 'Phyllis Gutierrez', position: 'Administrative Assistant', office: 'Shlissel’burg', email: 'pgutierrez4j@mail.net', phone: '+52 749 861 9304' },
  { url: 'assets/images/avatars/katherine.jpg', name: 'Lillian Morris', position: 'Media Planner', office: 'Berlin', email: 'lmorris4k@mail.de', phone: '+59 695 110 3856' },
  { url: 'assets/images/avatars/andrew.jpg', name: 'Jeremy Anderson', position: 'Systems Engineer', office: 'Lũng Hồ', email: 'janderson4l@mail.uk', phone: '+40 384 115 1448' },
  { url: 'assets/images/avatars/jane.jpg', name: 'Arthur Lawrence', position: 'Nurse Practicioner', office: 'Sarkanjut', email: 'alawrence4m@mail.com', phone: '+36 631 599 7867' },
  { url: 'assets/images/avatars/alice.jpg', name: 'David Simmons', position: 'Social Worker', office: 'Ushumun', email: 'dsimmons4n@mail.com', phone: '+01 189 681 4417' },
  { url: 'assets/images/avatars/vincent.jpg', name: 'Daniel Johnston', position: 'Help Desk', office: 'São Carlos', email: 'djohnston4o@mail.gov', phone: '+60 028 943 7919' },
  { url: 'assets/images/avatars/joyce.jpg', name: 'Ann King', position: 'Internal Auditor', office: 'Liren', email: 'aking4p@mail.com', phone: '+91 103 932 6545' },
  { url: 'assets/images/avatars/danielle.jpg', name: 'Phillip Franklin', position: 'VP Accounting', office: 'Soba', email: 'pfranklin4q@mail.com', phone: '+25 820 986 7626' },
  { url: 'assets/images/avatars/carl.jpg', name: 'Gary Gonzalez', position: 'Speech Pathologist', office: 'Gangkou', email: 'ggonzalez4r@mail.cc', phone: '+10 862 046 7916' }
];

@Component({
  selector: 'app-project-team-members',
  templateUrl: './project-team-members.component.html',
  styleUrls: ['./project-team-members.component.css']
})
export class ProjectTeamMembersComponent implements AfterViewInit, OnInit, OnDestroy {

  displayedColumns: string[] = ['url', 'name', 'position', 'office', 'email', 'phone'];
  dataSource = ELEMENT_DATA;

  ngAfterViewInit() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}