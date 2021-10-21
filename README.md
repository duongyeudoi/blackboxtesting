Bài toán: Tính giá vé xem phim

	Input:
	thu (Thứ trong tuần đi xem phim): Số nguyên ∈ [2 ... 8] 
	(CN được coi là “thứ 8”)
	Trong tuần ∈ [2 … 7)
	Cuối tuần ∈ [7 … 8]
	gio (Giờ chiếu phim): Số nguyên ∈ [7 ... 23]
	Ngày ∈ [7 … 20)
	Đêm ∈ [20 … 23]
	tuoi (Độ tuổi): Số nguyên ∈ [6 ... 100]
	Trẻ em ∈ [6 … 15)
	Người lớn ∈ [15 … 100]
	Output: (VNĐ)
    -1 (Invalid Input)
    giave (Giá vé) và được tính theo công thức sau:
	 giave = 40000 + (20000 nếu thu là cuối tuần) + (20000 nếu gio là đêm) + (20000 nếu tuoi là người lớn) 
   
  
  Đặc tả bài toán: https://docs.google.com/document/d/12YUffhSBUtxV8tS9SUbO2eMBN5s0I8EU/edit?usp=sharing&ouid=108838056744610590039&rtpof=true&sd=true
  
  Mã nguồn được viết bằng Javascript, sử dụng công cụ kiểm thử Jest. Để mã nguồn khởi chạy thành công cần cài đặt Jest trước khi khởi chạy test kiểm thử.
  
  

