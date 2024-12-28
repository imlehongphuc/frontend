 function acb() {
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
Swal.fire("Thành công", "Bạn đã copy thành công !", "success");

}
else {
  
Swal.fire({
  title: 'ACB',
  text: 'Vui lòng quét mã QR bên dưới !',
  imageUrl: 'https://mediahometech.com/theme1/image/qr.jpg',
  imageWidth: 400,
  imageHeight: 400,
  imageAlt: 'Custom image',
  showCancelButton: true,
  confirmButtonText: '<a style="color: white;" href="image/qr.jpg" download="qr.jpg">Download</a>',
  cancelButtonText: 'Sao chép',
  cancelButtonColor: 'rgb(221, 51, 51)',
  color: '#fff',

})

.then((result) => {
  if (result.isConfirmed) {
  
  }
 else if (result.isDenied) {
    Swal.fire("Thành công", "Bạn đã copy thành công !", "success"); 
 }
})
 

}

}

 function mbbank() {
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
Swal.fire("Thành công", "Bạn đã copy thành công !", "success");

}
else {
  
Swal.fire({
  title: 'MB Bank',
  text: 'Vui lòng quét mã QR bên dưới !',
  imageUrl: 'https://mediahometech.com/theme1/image/mbbank.png',
  imageWidth: 400,
  imageHeight: 400,
  imageAlt: 'Custom image',
  showCancelButton: true,
  confirmButtonText: '<a style="color: white;" href="image/mbbank.png" download="mbbank.png">Download</a>',
  cancelButtonText: 'Sao chép',
  cancelButtonColor: 'rgb(221, 51, 51)',
  color: '#fff',

})

.then((result) => {
  if (result.isConfirmed) {
  
  }
 else if (result.isDenied) {
    Swal.fire("Thành công", "Bạn đã copy thành công !", "success"); 
 }
})
 

}

}

 function vietcombank() {
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
Swal.fire("Thành công", "Bạn đã copy thành công !", "success");

}
else {
  
Swal.fire({
  title: 'Vietcombank',
  text: 'Vui lòng quét mã QR bên dưới !',
  imageUrl: 'https://mediahometech.com/theme1/image/vietcomBank.png',
  imageWidth: 400,
  imageHeight: 400,
  imageAlt: 'Custom image',
  showCancelButton: true,
  confirmButtonText: '<a style="color: white;" href="image/vietcomBank.png" download="vietcomBank.png">Download</a>',
  cancelButtonText: 'Sao chép',
  cancelButtonColor: 'rgb(221, 51, 51)',
  color: '#fff',

})

.then((result) => {
  if (result.isConfirmed) {
  
  }
 else if (result.isDenied) {
    Swal.fire("Thành công", "Bạn đã copy thành công !", "success"); 
 }
})
 

}

}

function momo() {
     Swal.fire("Thành công", "Bạn đã copy thành công !", "success"); 
}

function zalopay() {
     Swal.fire("Thành công", "Bạn đã copy thành công !", "success"); 
}

