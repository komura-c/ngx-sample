import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import encoding from 'encoding-japanese';
import { UserData } from '../interfaces/user';

@Component({
  selector: 'app-papaparse',
  templateUrl: './papaparse.component.html',
  styleUrls: ['./papaparse.component.scss'],
})
export class PapaparseComponent implements OnInit {
  title = 'ダミーユーザーデータ';
  json: UserData[] = [
    {
      id: 1,
      name: 'てすとゆーざー',
      mobileNumber: 112,
      email: 'some@mail.com',
      createdAt: 20200501,
      isActive: true,
    },
    {
      id: 2,
      name: 'テストユーザー',
      mobileNumber: 112,
      email: 'some@mail.com',
      createdAt: 20200511,
      isActive: true,
    },
    {
      id: 3,
      name: 'テス田',
      mobileNumber: 112,
      email: 'some@mail.com',
      createdAt: 20200512,
      isActive: true,
    },
    {
      id: 4,
      name: 'テス男',
      mobileNumber: 112,
      email: 'some@mail.com',
      createdAt: 20200513,
      isActive: false,
    },
    {
      id: 5,
      name: 'テス女',
      mobileNumber: 112,
      email: 'some@mail.com',
      createdAt: 20200516,
      isActive: true,
    },
  ];

  constructor(private papa: Papa) {}
  ngOnInit(): void {}

  exportCsv() {
    const unparseConfig = {
      quotes: true,
      header: true,
    };
    const delimiterString = this.papa.unparse(this.json, unparseConfig);
    const strArray = encoding.stringToCode(delimiterString);
    const convertedArray = encoding.convert(strArray, 'SJIS', 'UNICODE');
    const UintArray = new Uint8Array(convertedArray);
    const blobUrl = new Blob([UintArray], { type: 'text/csv' });
    this.downloadCsv(blobUrl);
  }

  downloadCsv(blobURL: Blob) {
    const aTag = document.createElement('a');
    aTag.download = this.title + '.csv';
    // 各ブラウザに合わせ、CSVをダウンロード
    if (window.URL && window.URL.createObjectURL) {
      // for Firefox
      aTag.href = window.URL.createObjectURL(blobURL);
      aTag.click();
    } else if (window.webkitURL) {
      // for Chrome
      aTag.href = (window.URL || window.webkitURL).createObjectURL(blobURL);
      aTag.click();
    } else {
      throw new Error('ダウンロード対応ブラウザは、FirefoxとChromeとなります');
    }
  }
}
