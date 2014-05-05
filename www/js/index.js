/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        app.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
		document.addEventListener("volumedownbutton", app.onVolumeDownKeyDown, false);
 		document.addEventListener("batterystatus", app.onBatteryStatus, false);
 		
 		var networkstate = navigator.connection.type;
 		
 		if(networkstate == "none"){
 			//app.showAlert("Offline", "Conexão");
 		}
 		else{
 			//app.showAlert("Online", "Conexão"); 			
 		}
 		        
		app.findContatos();
    },
    
 	findContatos : function() {
        var options = new ContactFindOptions();
        //options.filter = "Bob";
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, onSuccess, onError, options);
    },

    onSuccess: function(contacts) {
    	app.showAlert("xxx", "yyy");
        for (var i = 0; i < contacts.length; i++) {
            $(".loading").append("Display Name = " + contacts[i].displayName);
        }
    },

    onError: function(contactError) {
        alert('onError!');
    },    
    
	addToContacts : function() {

	    console.log('addToContacts');
	    
	    if (!navigator.contacts) {
	        alert("Contacts API not supported", "Error");
	        return;
	    }
	    
	    var contact = navigator.contacts.create();
	    contact.name = {givenName: "xxx", familyName: "yyy"};
	    var phoneNumbers = [];
	    phoneNumbers[0] = new ContactField('work', "2222222222", false);
	    contact.phoneNumbers = phoneNumbers;
	    contact.save();
	    
	    return false;
	},
        
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		alert(id);
    },

  	onBatteryStatus : function(info) {
        app.showAlert("Level: " + info.level + " isPlugged: " + info.isPlugged, "Bateria");
    },    
 	
 	onVolumeDownKeyDown : function(){
 		app.showAlert('Volume abaixado ', 'Info');
 	},
 	
	showAlert: function (message, title) {
	    if (navigator.notification) {
	        navigator.notification.alert(message, null, title, 'OK');
	    } 
	    else {
	        alert(title ? (title + ": " + message) : message);
	    }
	}          
};
  
app.initialize();
