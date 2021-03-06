import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the StatusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage implements OnInit{
  car: Object;
  stage: Array<String>;
  relativeDate: any;
  ready: Boolean;
  vin: any;
  websocketInsurance: WebSocket;
  websocket:WebSocket;
  statuses:Array<String>;
  node_addr:string

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

    this.ready = false;
    
    this.node_addr = localStorage.getItem('addr');

    this.car = navParams.get('car');
    
    
    this.stage = [Date.now() + ''];

    this.relativeDate = function(input, start) {
      if (input) {
        input = Date.parse(input);
        start = Date.parse(start);
        var diff = input - start;
        diff = diff / 1000
        diff = Math.round(diff);

        var result = '+' + diff +  ' secs'

        return result;
      }
    };

    this.statuses = ['PLACED', 'SCHEDULED_FOR_MANUFACTURE', 'VIN_ASSIGNED', 'OWNER_ASSIGNED', 'DELIVERED'];
  };

  ngOnInit() {
    this.openWebSocket();
    this.openInsuranceRequestWebSocket();
    this.ready = true;
  }

  openWebSocket() {
    var webSocketURL;
    webSocketURL = 'ws://' + this.node_addr + '/ws/updateorderstatus';

    console.log('connecting websocket', webSocketURL);
    this.websocket = new WebSocket(webSocketURL);

    this.websocket.onopen = function () {
      console.log('updateorderstatus websocket open!');
    };

    var parent = this;
    this.websocket.onclose = function() {
      console.log('closed');
      parent.openWebSocket();
    }

    this.vin = 123456127;

    this.websocket.onmessage = (event) => {
      if (event.data === '__pong__') {
        return;
      }

      var status = JSON.parse(event.data);
      console.log(status);
      if (status.orderStatus === this.statuses[0]) {
        this.stage[0] = status.timestamp;
      } else {
        let i = this.statuses.indexOf(status.orderStatus);
        if(status.orderStatus === this.statuses[2])
        {
          this.vin = status.order.vehicleDetails.vin;
        }
        this.stage[i] = this.relativeDate(status.timestamp, this.stage[0]);
      }
    };
  }

  openInsuranceRequestWebSocket() {
    var webSocketInsuranceURL;
    webSocketInsuranceURL = 'ws://' + this.node_addr + '/ws/requestpolicy';
    console.log('connecting websocket', webSocketInsuranceURL);
    this.websocketInsurance = new WebSocket(webSocketInsuranceURL);

    this.websocketInsurance.onopen = function () {
      console.log('insurance websocket open!');
    };

    var parent = this;

    this.websocketInsurance.onclose = function() {
      console.log('closed');
      parent.openInsuranceRequestWebSocket();
    }

    this.websocketInsurance.onmessage = (event) => {
      var event_data = JSON.parse(event.data);
      if(event_data.request_granted)
      {
        var policy_vin = event_data.vin;

        if(this.vin == policy_vin)
        {
          document.getElementById('insureBtn').getElementsByTagName('span')[0].innerHTML = "Policy Created &#10004; <br /> ("+event_data.policy_id.split('-')[0]+")";
        }
      }
    };
  }

  insure() {
    
    document.getElementById('insureBtn').getElementsByTagName('span')[0].innerHTML = "Processing ..."
    
    // this.geolocation.getCurrentPosition().then((location) => {
    //   success(location)
    // }).catch((err) => {
    //   error(err);
    // })

    this.stage[5] = "Insured";

    var parent = this;

    success();

    function success()
    {
      document.getElementById('insureBtn').getElementsByTagName('span')[0].innerHTML = "Request Sent &#10004;"
      var full_car = {};
      Object.keys(parent.car).forEach((key) => full_car[key] = parent.car[key]);
      full_car["vin"] = parent.vin;
  
      var order = {
        vehicleDetails: full_car,
        requestee: "resource:org.example.vehicle.lifecycle.PrivateOwner#dan",
        policyType: "Fully Comprehensive",
        manufacturing_date: new Date(),
        location:
          {
            // latitude: position.coords.latitude,
            // longitude: position.coords.longitude
            latitude: 51.02670,
            longitude: -1.39887
          }
      };
  
      if(parent.ready) {
        parent.websocketInsurance.send(JSON.stringify(order));
      };
    }
  }
}
