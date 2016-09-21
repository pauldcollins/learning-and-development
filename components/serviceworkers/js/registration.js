"use strict";
async.task(function*() {

  if (! "serviceWorker" in navigator) {
    return;
  }

  const reg = yield navigator.serviceWorker.register("sw.js");


  // if navigator doesn't have controller, 
  if (!navigator.serviceWorker.controller) {
    console.log("First time loading Load!");
    return;
  }

  if (reg.waiting) {
    console.log("There is an update waiting for us!");
    updateReady(reg.waiting); 
    return;
  }
 
  if (reg.installing) {
    console.log("The SW is installing right now");
    return;
  }

  if (reg.active) {
    console.log("An SW is active");
    return;
  }

  reg.onupdatefound = function() {
    console.log('Found and update');
    trackInstallation(reg.installing);
  }

  navigator.serviceworker.oncontrollerchange = function() {
    console.log('New SW Took Over');
    window.location.reload();
  }

  function trackInstallation(sw) {
    console.log(sw.state);
    sw.onstatechange = function() {
      if (sw.state === 'installed') {
        updateReady(sw);
      }
      console.log('The state changed to', sw.state);
    }
  }

  console.log(reg);

  function updateReady(sw) {
    const toast = document.querySelector("#update-toast");
    const refresh = document.querySelector("#refresh");
    const dismiss = document.querySelector("#dismiss");
    toast.classList.add("show");
    dismiss.onclick = () => toast.classList.remove("show");
    refresh.onclick = () => {
      toast.classList.remove("show");
      sw.postMessage({action: "skipWaiting"});
    }
  }
}).catch(err => console.log(err));
