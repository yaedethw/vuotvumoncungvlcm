// --- CẤU TRÚC LƯU NHIỀU ĐỀ THI (ĐÃ SỬA LỖI & ĐỒNG BỘ) ---
const examsMeta = [

    // =========================================================================
    // =========================================================================
    // 1. TỔNG ÔN TSA (BÀI TẬP THEO CHUYÊN ĐỀ - category luôn là "review")
    // =========================================================================

    // --- [CHUYÊN ĐỀ 1] SỐ HỌC (id: bt_sohoc_...) ---
    { id: "bt_sohoc_01", type: "TSA", category: "review", title: "Tổng hợp kiến thức trọng tâm chủ đề Số học (P1)", questionsCount: 30, time: 45, img: "", isVip: false },
    // { id: "bt_sohoc_02", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 2] HÀM SỐ VÀ ĐỒ THỊ (id: bt_hamso_...) ---
    // { id: "bt_hamso_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 3] HÌNH HỌC KHÔNG GIAN (id: bt_hhkg_...) ---
    { id: "bt_hhkg_01", type: "TSA", category: "review", title: "Góc trong không gian (P1)", questionsCount: 30, time: 45, img: "", isVip: false },
    { id: "bt_hhkg_02", type: "TSA", category: "review", title: "Góc trong không gian (P2)", questionsCount: 30, time: 45, img: "", isVip: false },
    { id: "bt_hhkg_03", type: "TSA", category: "review", title: "Góc trong không gian (P3)", questionsCount: 30, time: 45, img: "", isVip: false },
    // --- [CHUYÊN ĐỀ 4] MỘT SỐ YẾU TỐ THỐNG KÊ (id: bt_thongke_...) ---
    // { id: "bt_thongke_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 5] NGUYÊN HÀM - TÍCH PHÂN (id: bt_tichphan_...) ---
    // { id: "bt_tichphan_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 6] PHƯƠNG TRÌNH - BẤT PHƯƠNG TRÌNH - HỆ BPT (id: bt_ptbpt_...) ---
    // { id: "bt_ptbpt_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 7] ĐẠI SỐ TỔ HỢP (id: bt_tohop_...) ---
    // { id: "bt_tohop_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 8] LƯỢNG GIÁC (id: bt_luonggiac_...) ---
    // { id: "bt_luonggiac_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 9] DÃY SỐ - CSC - CSN - ĐẠO HÀM - GIỚI HẠN (id: bt_dayso_...) ---
    // { id: "bt_dayso_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 10] LŨY THỪA, MŨ VÀ LOGARIT (id: bt_mulog_...) ---
    // { id: "bt_mulog_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 11] MỘT SỐ YẾU TỐ XÁC SUẤT (id: bt_xacsuat_...) ---
    // { id: "bt_xacsuat_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [CHUYÊN ĐỀ 12] PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN OXYZ (id: bt_oxyz_...) ---
    // { id: "bt_oxyz_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 30, time: 45, img: "", isVip: false },

    // --- [TỔNG ÔN] TƯ DUY ĐỌC HIỂU (id: bt_dochieu_...) ---
    // { id: "bt_dochieu_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 20, time: 30, img: "", isVip: false },

    // --- [TỔNG ÔN] TƯ DUY KHOA HỌC (id: bt_khoahoc_...) ---
    // { id: "bt_khoahoc_01", type: "TSA", category: "review", title: "Tên bài...", questionsCount: 20, time: 30, img: "", isVip: false },
    // =========================================================================
    // 2. THƯ VIỆN ĐỀ THI TSA (ĐẠI HỌC BÁCH KHOA HÀ NỘI)
    // =========================================================================
    // --- Tư duy Toán học ---
    { id: "tsa_toan_01", type: "TSA", category: "math", title: "Đề live số 03 - Luyện đề TSA26A (Môn Toán)", questionsCount: 40, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    { id: "tsa_toan_02", type: "TSA", category: "math", title: "BTVN - Luyện đề TSA26A (Môn Toán)", questionsCount: 40, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },

    // --- Tư duy Đọc hiểu ---
    // (Chưa có đề)

    // --- Tư duy Khoa học ---
    { id: "tsa_khoahoc_01", type: "TSA", category: "science", title: "Đề thi Đánh giá Tư duy - TSA26A (Tư duy Khoa học)", questionsCount: 40, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },

    // --- Đề Tổng hợp TSA ---
    { id: "tsa_01", type: "TSA", category: "comprehensive", title: "NTT DETHW - VIP", questionsCount: 3, time: 150, img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", isVip: true },
    { id: "tsa_02", type: "TSA", category: "comprehensive", title: "Đề thi thử HUST 2026 - Lần 1", questionsCount: 1, time: 60, img: "https://i.postimg.cc/tg7k50hw/ID.png", isVip: false },


    // =========================================================================
    // 3. THƯ VIỆN ĐỀ THI HSA (ĐHQG HÀ NỘI)
    // =========================================================================
    // --- Tư duy Định lượng (Toán) ---
    { id: "hsa_toan_01", type: "HSA", category: "math", title: "Đề ĐGNL HSA Số 01 - Định lượng (VLCM)", questionsCount: 50, time: 75, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },

    // --- Tư duy Định tính (Ngữ văn) ---
    { id: "hsa_van_01", type: "HSA", category: "language", title: "Đề ĐGNL HSA Số 01 - Định tính (VLCM)", questionsCount: 50, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    { id: "hsa_van_02", type: "HSA", category: "language", title: "Đề ĐGNL HSA Số 02 - Định tính (VLCM)", questionsCount: 50, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    // --- Khoa học & Tiếng Anh ---
    { id: "hsa_khoahoc_01", type: "HSA", category: "science", title: "Đề ĐGNL HSA Số 01 - Khoa học (VLCM)", questionsCount: 50, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    { id: "hsa_khoahoc_02", type: "HSA", category: "science", title: "Đề ĐGNL HSA Số 02 - Khoa học (VLCM)", questionsCount: 50, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    // --- Đề Tổng hợp HSA ---
    // (Chưa có đề)


    // =========================================================================
    // 4. ĐỀ THI THỬ THPT & SỞ GIÁO DỤC
    // =========================================================================
    // --- Môn Toán học ---
    { id: "thpt_01", type: "THPT", subject: "math", title: "Đề ôn tập Toán THPT - Đề GK1", questionsCount: 2, time: 90, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_lytutrong_01", type: "THPT", subject: "math", title: "Đề ôn tập Toán THPT - Đề GK1 (VLCM)", questionsCount: 2, time: 90, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_toan_01", type: "THPT", subject: "math", title: "Đề thi thử Toán 2025 (Chuẩn cấu trúc)", questionsCount: 22, time: 90, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_toan_02", type: "THPT", subject: "math", title: "Đề thi Tốt nghiệp THPT 2026 môn Toán (Mã đề 0101)", questionsCount: 22, time: 90, img: "https://i.postimg.cc/Qd7xWCzY/ID-3.png", isVip: false },

    // --- Môn Vật lý ---
    { id: "thpt_ly_03", type: "THPT", subject: "physics", title: "Đề ôn tập Giữa HK1 Vật Lí 12 - Đề số 3", questionsCount: 28, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_ly_04", type: "THPT", subject: "physics", title: "Bài tập cấu trúc và sự chuyển thể", questionsCount: 36, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_ly_05", type: "THPT", subject: "physics", title: "Bài tập Định luật 1 - Nhiệt động lực học", questionsCount: 26, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_ly_06", type: "THPT", subject: "physics", title: "Bài tập nhiệt độ thang đo nhiệt độ", questionsCount: 26, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },

    // --- Môn Hóa học ---
    { id: "thpt_hoa_02", type: "THPT", subject: "chemistry", title: "Đề kiểm tra Giữa HK1 Hóa Học 12", questionsCount: 28, time: 45, img: "https://i.postimg.cc/y8x0qmW2/ID-2.png", isVip: false },
    { id: "thpt_hoa_03", type: "THPT", subject: "chemistry", title: "Đề kiểm tra Giữa HK1 Hóa Học 12 (VLCM)", questionsCount: 28, time: 45, img: "https://i.postimg.cc/y8x0qmW2/ID-2.png", isVip: false },
    { id: "thpt_hoa_04", type: "THPT", subject: "chemistry", title: "Bài tập Amine Hóa Học 12 (VLCM)", questionsCount: 25, time: 45, img: "https://i.postimg.cc/y8x0qmW2/ID-2.png", isVip: false },

    // --- Môn Sinh học ---
    { id: "thpt_sinh_03", type: "THPT", subject: "biology", title: "Đề kiểm tra giữa kì 1 Sinh Học 12 - THPT Ngô Gia Tự", questionsCount: 24, time: 45, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
];

// --- DỮ LIỆU CÂU HỎI CHI TIẾT TỪNG ĐỀ ---
const allExamsData = {
    "thpt_hoa_02": [
        // --- PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (18 CÂU) ---
        {
            id: 801, type: "multiple_choice",
            content: "Chất thuộc loại carbohydrate là: <!--[cite: 80] -->",
            options: ["A. polyethylene.", "B. glycerol.", "C. alanine.", "D. cellulose."],
            correctAnswer: "D"
        },
        {
            id: 802, type: "multiple_choice",
            content: "Ester tạo bởi acid acetic và glycerol có công thức cấu tạo là: <!--[cite: 80] -->",
            options: ["A. $(C_3H_5COO)_3C_3H_5$.", "B. $C_3H_5OOCCH_3$.", "C. $(CH_3COO)_3C_3H_5$.", "D. $(CH_3COO)_2C_2H_4$."],
            correctAnswer: "C"
        },
        {
            id: 803, type: "multiple_choice",
            content: "Công thức cấu tạo dạng mạch vòng $\\beta$-fructose là: <!--[cite: 80] -->",
            options: [
                "A. <img src='https://i.postimg.cc/fbzDPyVh/3a.png' class='h-20 inline-block'>",
                "B. <img src='https://i.postimg.cc/BvTNjZpD/3b.png' class='h-20 inline-block'>",
                "C. <img src='https://i.postimg.cc/C1JN4vWn/3c.png' class='h-20 inline-block'>",
                "D. <img src='https://i.postimg.cc/wxf2yGXG/3d.png' class='h-20 inline-block'>"
            ],
            correctAnswer: "D"
        },
        {
            id: 804, type: "multiple_choice",
            content: "Hình ảnh Jack Sparrow với bình rượu và câu nói cửa miệng: “Rum is gone!” trong bộ phim “Cướp biển vùng Caribbean” khiến nhiều người nhớ đến Rum, loại rượu gắn với những tên cướp biển, được lên men từ nước cây mía. Trong nước mía có carbohydrate là: <!--[cite: 80] -->",
            options: ["A. Saccharose.", "B. Glucose.", "C. Fructose.", "D. Lactose."],
            correctAnswer: "A"
        },
        {
            id: 805, type: "multiple_choice",
            content: "Chất phản ứng được với các dung dịch: $NaOH, HCl$ là <!--[cite: 80] -->",
            options: ["A. $C_2H_6$.", "B. $H_2N-CH_2-COOH$.", "C. $CH_3COOH$.", "D. $C_2H_5OH$."],
            correctAnswer: "B"
        },
        {
            id: 806, type: "multiple_choice",
            content: "Số đồng phân ester ứng với công thức phân tử $C_4H_8O_2$ là <!--[cite: 80] -->",
            options: ["A. 6.", "B. 5.", "C. 2.", "D. 4."],
            correctAnswer: "D"
        },
        {
            id: 807, type: "multiple_choice",
            content: "Nicotine làm tăng huyết áp và nhịp tim, có khả năng gây xơ vữa động mạch vành và suy giảm trí nhớ. Trong cây thuốc lá và khói thuốc lá chứa một amine rất độc, đó là nicotine với công thức cấu tạo như sau:<br><img src='https://i.postimg.cc/vm3BGjkd/nc.png' class='mt-4 mb-4 max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Công thức phân tử nicotine là <!--[cite: 80] -->",
            options: ["A. $C_{10}H_{14}N_2$.", "B. $C_{10}H_{12}N_2$.", "C. $C_{11}H_{12}N_2$.", "D. $C_{11}H_{16}N_2$."],
            correctAnswer: "A"
        },
        {
            id: 808, type: "multiple_choice",
            content: "DHA là loại omega-3 phổ biến, có nhiều công dụng đặc biệt là đối với sự phát triển của trẻ em. DHA có công thức khung phân tử như sau:<br><img src='https://i.postimg.cc/qM95gvnm/A-nh-chu-p-ma-n-hi-nh-2026-10-14-125914.png' class='mt-4 mb-4 w-full max-w-lg mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Trong công thức cấu tạo của DHA có bao nhiêu nguyên tử carbon? <!--[cite: 80] -->",
            options: ["A. 22.", "B. 23.", "C. 24.", "D. 25."],
            correctAnswer: "A"
        },
        {
            id: 809, type: "multiple_choice",
            content: "Trong phân tử cellulose các mắt xích liên kết với nhau bằng liên kết nào? <!--[cite: 80] -->",
            options: ["A. $\\alpha$-1,4-glucoside.", "B. $\\alpha$-1,4-glycoside.", "C. $\\beta$-1,4-glucoside.", "D. $\\beta$-1,4-glycoside."],
            correctAnswer: "D"
        },
        {
            id: 810, type: "multiple_choice",
            content: "Xà phòng được điều chế bằng cách nào trong các cách sau: <!--[cite: 80] -->",
            options: ["A. Thủy phân saccharose.", "B. Thủy phân mỡ trong kiềm.", "C. Phản ứng của acid với kim loại.", "D. Dehydrogen hóa mỡ tự nhiên."],
            correctAnswer: "B"
        },
        {
            id: 811, type: "multiple_choice",
            content: "Cho các phát biểu sau:<br>(1) Glucose và fructose không tham gia phản ứng thủy phân.<br>(2) Có thể phân biệt glucose và fructose bằng nước bromine.<br>(3) Carbohydrate là những hợp chất hữu cơ tạp chức, thường có công thức chung là $C_n(H_2O)_m$.<br>(4) Chất béo không phải là carbohydrate.<br>Số phát biểu đúng là <!--[cite: 80] -->",
            options: ["A. 1.", "B. 2.", "C. 3.", "D. 4."],
            correctAnswer: "D"
        },
        {
            id: 812, type: "multiple_choice",
            content: "Công thức hóa học nào sau đây là của nước Schweizer, dùng để hòa tan cellulose trong quá trình sản xuất tơ nhân tạo? <!--[cite: 80] -->",
            options: ["A. $[Cu(NH_3)_4](OH)_2$.", "B. $[Zn(NH_3)_4](OH)_2$.", "C. $[Cu(NH_3)_4]OH$.", "D. $[Ag(NH_3)_4]OH$."],
            correctAnswer: "A"
        },
        {
            id: 813, type: "multiple_choice",
            content: "Ester nào sau đây khi phản ứng với dung dịch NaOH dư, đun nóng không tạo ra hai muối? <!--[cite: 80] -->",
            options: [
                "A. $C_6H_5COOC_6H_5$.",
                "B. $CH_3COOC_6H_5$.",
                "C. $CH_3COO-[CH_2]_2-OOCCH_2CH_3$.",
                "D. $CH_3OOC-COOCH_3$."
            ],
            correctAnswer: "D"
        },
        {
            id: 814, type: "multiple_choice",
            content: "Mùi của ester nào sau đây là đúng? <!--[cite: 80] -->",
            options: [
                "A. Methyl salicylate có mùi dầu gió.",
                "B. Benzyl acetate có mùi thơm dâu tây.",
                "C. Isoamyl acetate có mùi táo.",
                "D. Methyl butanoate có mùi chuối chín."
            ],
            correctAnswer: "A"
        },
        {
            id: 815, type: "multiple_choice",
            content: "Phát biểu nào dưới đây không đúng khi nói về protein? <!--[cite: 80] -->",
            options: [
                "A. Protein là những hợp chất cao phân tử.",
                "B. Protein phức tạp là những protein tạo thành từ protein đơn giản và lipid.",
                "C. Protein đơn giản là những protein tạo thành từ các gốc $\\beta$-amino acid.",
                "D. Protein có vai trò là nền tảng về cấu trúc và chức năng của mọi sự sống."
            ],
            correctAnswer: "C"
        },
        {
            id: 816, type: "multiple_choice",
            content: "Ở nhiệt độ thường, nhỏ vài giọt dung dịch iodine vào lát cắt củ khoai lang thấy <!--[cite: 80] -->",
            options: ["A. màu xanh rêu.", "B. màu xanh tím.", "C. màu nâu đỏ.", "D. màu hồng."],
            correctAnswer: "B"
        },
        {
            id: 817, type: "multiple_choice",
            content: "Công thức chung của amine no, đơn chức, mạch hở là <!--[cite: 80] -->",
            options: ["A. $C_nH_{2n+3}N$.", "B. $C_nH_{2n+1}N$.", "C. $C_nH_{2n-1}NH_2$.", "D. $C_nH_{2n+2}NH_2$."],
            correctAnswer: "A"
        },
        {
            id: 818, type: "multiple_choice",
            content: "Cho phổ IR của ba chất hữu cơ ngẫu nhiên trong các chất sau: $HOCH_2CH_2OH$ (1); $CH_3CH_2CHO$ (2); $CH_3COOCH_3$ (3).<br><img src='https://i.postimg.cc/WpHmbJjv/18.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Ghép cặp nào sau đây là đúng? <!--[cite: 80] -->",
            options: ["A. 1-a, 2-b, 3-c.", "B. 1-b, 2-c, 3-a.", "C. 1-b, 2-a, 3-c.", "D. 1-c, 2-a, 3-b."],
            correctAnswer: "A"
        },

        // --- PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
        {
            id: 819, type: "true_false",
            content: "Protein là hợp chất cao phân tử được hình thành từ một hay nhiều chuỗi polypeptide. Protein có thể được phân loại thành protein đơn giản và protein phức tạp. Các phát biểu sau đúng hay sai? <!--[cite: 80] -->",
            propositions: [
                "Insulin, albumin (có nhiều trong lòng trắng trứng) thuộc loại protein đơn giản. <!--[cite: 80] -->",
                "Fibroin (có trong tơ tằm) thuộc loại protein phức tạp. <!--[cite: 80] -->",
                "Các nguyên tố tạo nên protein đơn giản là C, H, O và N. <!--[cite: 80] -->",
                "Nucleic acid, lipid thuộc loại protein phức tạp. <!--[cite: 80] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'true'}
        },
        {
            id: 820, type: "true_false",
            content: "Ethyl propionate là một ester có mùi thơm của dứa chín. Các phát biểu sau đúng hay sai? <!--[cite: 80] -->",
            propositions: [
                "Công thức phân tử của ethyl propionate là $CH_3COOC_2H_5$. <!--[cite: 80] -->",
                "Ở điều kiện thường, ethyl propionate là chất khí. <!--[cite: 80] -->",
                "Phản ứng thủy phân ethyl propionate trong môi trường acid là phản ứng thuận nghịch. <!--[cite: 80] -->",
                "Ethyl propionate được điều chế từ propanoic acid và ethyl alcohol. <!--[cite: 80] -->"
            ],
            correctAnswer: {0: 'false', 1: 'false', 2: 'true', 3: 'true'}
        },
        {
            id: 821, type: "true_false",
            content: "Glucose và fructose là hai hợp chất có sự quan trọng đáng kể trong lĩnh vực y tế và công nghiệp thực phẩm. <!--[cite: 80] -->",
            propositions: [
                "Trong y học, glucose được dùng làm thuốc tăng lực. <!--[cite: 80] -->",
                "Trong công nghiệp thực phẩm, fructose dùng để sản xuất siro, kẹo mứt, nước trái cây. <!--[cite: 80] -->",
                "Glucose được sử dụng trong sản xuất bánh kẹo, ethyl alcohol. <!--[cite: 80] -->",
                "Glucose là nguyên liệu để tráng gương, tráng ruột phích. <!--[cite: 80] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'false'}
        },
        {
            id: 822, type: "true_false",
            content: "Trong tự nhiên, carbohydrate có vai trò không thể thay thế trong việc cấu thành các cấu trúc sinh vật. Khi nói về cấu trúc và tính chất của một số carbohydrate: <!--[cite: 80] -->",
            propositions: [
                "Phân biệt glucose và saccharose bằng phản ứng tráng gương. <!--[cite: 80] -->",
                "Phân biệt saccharose và glycerol bằng $Cu(OH)_2$. <!--[cite: 80] -->",
                "Phân biệt tinh bột và cellulose bằng $I_2$. <!--[cite: 80] -->",
                "Phân biệt glucose và fructose bằng dung dịch $Br_2$. <!--[cite: 80] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'true'}
        },

        // --- PHẦN III: CÂU TRẢ LỜI NGẮN (6 CÂU) ---
        {
            id: 823, type: "fill_blank",
            content: "Cho dãy các dung dịch: glucose, saccharose, ethanol, glycerol, aldehyde acetic, ethylen glycol, ethyl formate. Số dung dịch trong dãy phản ứng được với $Cu(OH)_2$ ở nhiệt độ thường tạo thành dung dịch có màu xanh lam là bao nhiêu? <!--[cite: 80] -->",
            correctAnswer: "4"
        },
        {
            id: 824, type: "fill_blank",
            content: "Lactose chủ yếu được tìm thấy trong sữa và các sản phẩm từ sữa. Trong phân tử lactose, có một nhóm -OH hemiacetal. Dựa trên hình vẽ dưới đây, hãy cho biết nhóm -OH hemiacetal của lactose là nhóm nằm ở vị trí số mấy?<br><img src='https://i.postimg.cc/CK7kyRJm/2-tln.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'> <!--[cite: 80] -->",
            correctAnswer: "7"
        },
        {
            id: 825, type: "fill_blank",
            content: "Geranyl acetate được tìm thấy trong hoa hồng và geranium. Khi phân tích thành phần khối lượng nguyên tố thì cho kết quả như sau: %C = 73,47%, %O = 16,33%, còn lại là hydrogen. Phổ khối lượng (MS) xác định phân tử khối của hợp chất này là 196.<br><img src='https://i.postimg.cc/DyGGvjB7/3-tln.png' class='mt-4 mb-4 w-full max-w-lg mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Trong phân tử geranyl acetate có bao nhiêu nguyên tử hydrogen? <!--[cite: 80] -->",
            correctAnswer: "20"
        },
        {
            id: 826, type: "fill_blank",
            content: "Tiến hành thí nghiệm thử tính chất của cellulose theo các bước sau:<br>- Bước 1: Cho lần lượt 4 mL $HNO_3$, 8 mL $H_2SO_4$ đặc vào cốc thủy tinh, lắc đều và làm lạnh.<br>- Bước 2: Thêm tiếp vào cốc một nhúm bông. Đặt cốc chứa hỗn hợp phản ứng vào nồi nước nóng (khoảng 60-70°C) khuấy nhẹ trong 5 phút.<br>- Bước 3: Lọc lấy chất rắn rửa sạch bằng nước, ép khô bằng giấy lọc sau đó sấy khô.<br>Cho các nhận định sau:<br>(1) Sau bước 3, sản phẩm thu được có màu vàng.<br>(2) Có thể thay thế nhúm bông bằng tinh bột.<br>(3) Sau bước 3, sản phẩm thu được là cellulose nitrate có tính dễ cháy.<br>(4) Thí nghiệm trên chứng minh trong phân tử cellulose có 3 nhóm OH tự do.<br>(5) Sau bước 3, lấy sản phẩm thu được đốt cháy thấy có khói trắng xuất hiện.<br>(6) Phản ứng xảy ra giữa cellulose và hỗn hợp acid tạo ra sản phẩm dễ tan trong acetone.<br>(7) Nước lạnh được sử dụng để rửa sản phẩm nhằm loại bỏ acid còn sót lại.<br>(8) Sau bước 3, sản phẩm thu được có thể được sử dụng làm màng phim.<br>Có bao nhiêu nhận định ĐÚNG? <!--[cite: 80] -->",
            correctAnswer: "5"
        },
        {
            id: 827, type: "fill_blank",
            content: "Cho dung dịch methylamine đến dư vào 5 ống nghiệm chứa lần lượt các dung dịch sau: $HCl, FeCl_3, CuSO_4, MgCl_2, CH_3COOH$. Sau phản ứng có bao nhiêu ống nghiệm thu được kết tủa? <!--[cite: 80] -->",
            correctAnswer: "2"
        },
        {
            id: 828, type: "fill_blank",
            content: "Thủy phân hoàn toàn 8,8 gam ester đơn chức, mạch hở X với 100 mL dung dịch NaOH 1M (vừa đủ) thu được 8,2 gam muối hữu cơ Y và một alcohol Z. Số nguyên tử hydrogen có trong X là bao nhiêu? <!--[cite: 80] -->",
            correctAnswer: "8"
        }
    ],
    "tsa_01": [
        { id: 1, type: "true_false", content: "Cho hàm số $y = f(x) = \\sqrt{1 + \\cos(x)}$. Khi ta xét $x \\in (0, \\pi)$, các nhận định dưới đây là đúng hay sai?", propositions: ["Phương trình $\\sqrt{1 + \\cos(x)} = \\cos\\left(\\frac{x}{2}\\right)$ có nghiệm", "Phương trình $\\sqrt{1 + \\cos(x)} = \\cos\\left(\\frac{x}{4}\\right)$ có nghiệm", "Phương trình $\\sqrt{1 + \\cos(x)} = \\cos\\left(\\frac{\\pi}{8}\\right)$ có đúng 01 nghiệm"], correctAnswer: {0: 'true', 1: 'false', 2: 'true'} },
        { id: 2, type: "fill_blank", content: "Bất phương trình $(\\log_2 x)^2 + \\log_3 \\frac{36}{x} \\leq \\left(1 + \\log_3 \\frac{36}{x}\\right) \\log_2 x$ có tập nghiệm là $x \\in [a, b]$. Giá trị của $a + b/2 =$", correctAnswer: "10" },
        { id: 7, type: "multiple_choice", content: "Cho hàm số: $y = \\frac{1+x}{1-x}$. Nhận xét nào sau đây đúng?", options: ["A. Đồ thị hàm số có TCN $y = 1$, TCĐ $x = 1$", "B. Đồ thị hàm số có TCN $y = -1$, TCĐ $x = 1$", "C. Đồ thị hàm số có TCN $y = 1$, TCĐ $x = -1$", "D. Đồ thị hàm số có TCN $y = -1$, TCĐ $x = -1$"], correctAnswer: "B" }
    ],
    "tsa_02": [
        { id: 101, type: "fill_blank", content: "Tính $l = \\lim_{x \\to 0} \\frac{1-\\cos 2x}{x} =$", correctAnswer: "0" }
    ],
    
    
    "thpt_toan_01": [
        { id: 1, type: "multiple_choice", content: "Lâm trường Tam Đảo thống kê đường kính thân gỗ của 60 cây xoan đào được cho ở bảng sau:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Đường kính (cm)</th><td class='border border-gray-300 p-2'>[20; 22)</td><td class='border border-gray-300 p-2'>[22; 24)</td><td class='border border-gray-300 p-2'>[24; 26)</td><td class='border border-gray-300 p-2'>[26; 28)</td><td class='border border-gray-300 p-2'>[28; 30)</td></tr><tr><th class='border border-gray-300 p-2'>Tần số</th><td class='border border-gray-300 p-2'>5</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>18</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>10</td></tr></table><br>Nhóm chứa mốt của mẫu số liệu đã cho là:", options: ["A. [20; 22)", "B. [28; 30)", "C. [24; 26)", "D. [22; 24)"], correctAnswer: "D" },
        { id: 2, type: "multiple_choice", content: "Một hộp có 5 viên bi màu đỏ và 7 viên bi màu xanh. Lấy ngẫu nhiên 2 viên bi từ hộp đó. Xác suất để lấy được 2 viên bi màu đỏ bằng:", options: ["A. $\\frac{5}{33}$", "B. $\\frac{5}{22}$", "C. $\\frac{7}{33}$", "D. $\\frac{7}{22}$"], correctAnswer: "A" },
        { id: 3, type: "multiple_choice", content: "Trong không gian $Oxyz$, đường thẳng đi qua hai điểm $A(1; 2; 3), B(5; 4; -1)$ có phương trình chính tắc là:", options: ["A. $\\frac{x+1}{2} = \\frac{y+2}{1} = \\frac{z+3}{-2}$", "B. $\\frac{x-1}{2} = \\frac{y-2}{1} = \\frac{z-3}{2}$", "C. $\\frac{x+5}{-2} = \\frac{y+4}{-1} = \\frac{z-1}{2}$", "D. $\\frac{x-5}{2} = \\frac{y-4}{1} = \\frac{z+1}{-2}$"], correctAnswer: "D" },
        { id: 4, type: "multiple_choice", content: "Cho $\\int_{2}^{5} f(x)dx = 2$ và $\\int_{2}^{5} g(x)dx = 5$. Giá trị của tích phân $\\int_{2}^{5} [f(x) - 2g(x)]dx$ bằng:", options: ["A. -8", "B. 12", "C. 1", "D. -3"], correctAnswer: "A" },
        { id: 5, type: "multiple_choice", content: "Biết phương trình $2x^2 + x + 3 = 1 - x$ có hai nghiệm phân biệt $x_1; x_2$. Tổng $x_1 + x_2$ bằng:", options: ["A. -3", "B. -1", "C. 2", "D. -2"], correctAnswer: "A" },
        { id: 6, type: "multiple_choice", content: "Cho cấp số cộng $(u_n)$ có $u_1 = -2$ và công sai $d = 3$. Giá trị của $u_{10}$ bằng:", options: ["A. $u_{10} = -39$", "B. $u_{10} = -29$", "C. $u_{10} = 25$", "D. $u_{10} = 28$"], correctAnswer: "C" },
        { id: 7, type: "multiple_choice", content: "Đạo hàm của hàm số $f(x) = \\sin x + \\cos(3x)$ là:", options: ["A. $f'(x) = -\\cos x + 3\\sin(3x)$", "B. $f'(x) = \\cos x - 3\\sin(3x)$", "C. $f'(x) = \\cos x + 3\\sin(3x)$", "D. $f'(x) = -\\cos x + \\sin(3x)$"], correctAnswer: "B" },
        { id: 8, type: "multiple_choice", content: "Tập nghiệm của bất phương trình $\\log_{\\frac{1}{3}}(2x - 1) > -2$ là:", options: ["A. $(\\frac{1}{2}; 5)$", "B. $(\\frac{1}{2}; +\\infty)$", "C. $(5; +\\infty)$", "D. $(-\\infty; 5)$"], correctAnswer: "A" },
        { id: 9, type: "multiple_choice", content: "Cho hàm số $y = f(x)$ có đạo hàm là $f'(x) = (x - 1)(x - 2)^2(x + 3), \\forall x \\in \\mathbb{R}$. Số điểm cực trị của hàm số đã cho là:", options: ["A. 2", "B. 3", "C. 1", "D. 0"], correctAnswer: "A" },
        { id: 10, type: "multiple_choice", content: "Giá trị lớn nhất của hàm số $f(x) = \\frac{2x + 3}{x - 1}$ trên đoạn $[2; 5]$ bằng:", options: ["A. $\\frac{13}{4}$", "B. 5", "C. 7", "D. 2"], correctAnswer: "C" },
        { id: 11, type: "multiple_choice", content: "Tập nghiệm của phương trình $\\sin x = 0$ là:", options: ["A. $S = \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$", "B. $S = \\{k\\pi, k \\in \\mathbb{Z}\\}$", "C. $S = \\{k2\\pi, k \\in \\mathbb{Z}\\}$", "D. $S = \\{\\pi + k2\\pi, k \\in \\mathbb{Z}\\}$"], correctAnswer: "B" },
        { id: 12, type: "multiple_choice", content: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 2, AD = 3, AA' = 6$. Độ dài vectơ $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng:", options: ["A. 7", "B. $7\\sqrt{3}$", "C. $11\\sqrt{3}$", "D. 11"], correctAnswer: "A" },
        { id: 13, type: "true_false", content: "Trong không gian $Oxyz$, cho $A(0; 1; 1)$, $B(1; 0; -3)$, $C(-1; -2; -3)$ và mặt cầu $(S)$ có phương trình $x^2 + y^2 + z^2 - 2x + 2z - 2 = 0$.", propositions: ["$\\overrightarrow{AB} = (1; -1; -4)$", "Mặt phẳng $(ABC)$ có phương trình $2x - 2y + z - 1 = 0$", "Mặt phẳng $(ABC)$ cắt mặt cầu $(S)$ theo một đường tròn có bán kính bằng $\\frac{4\\sqrt{2}}{3}$", "Điểm $G(a; b; c)$ là trọng tâm của tam giác $ABC$ thì $a + b + c = 2$"], correctAnswer: {0: "true", 1: "false", 2: "true", 3: "false"} },
        { id: 14, type: "true_false", content: "Một cây cà chua khi mới trồng có chiều cao 15cm. Gọi $h(t)$ là chiều cao của cây tại thời điểm đúng $t$ tuần sau khi trồng ($0 \\le t \\le 16$). Tốc độ tăng chiều cao được cho bởi hàm số $h'(t) = -0.02t^3 + 0.32t^2$ (cm/tuần).", propositions: ["Tại thời điểm đúng $t$ tuần sau khi trồng, chiều cao của cây là $h(t) = -\\frac{t^4}{200} + \\frac{32t^3}{300}$ (cm)", "Tại thời điểm tốc độ tăng chiều cao lớn nhất, cây cao hơn 80cm", "Trong khoảng thời gian 10 tuần đầu, tốc độ tăng chiều cao trung bình lớn hơn 5.6 (cm/tuần)", "Tại thời điểm đúng 6 tuần sau khi trồng, chiều cao của cây cà chua là 31.56 (cm)"], correctAnswer: {0: "false", 1: "false", 2: "true", 3: "true"} },
        { id: 15, type: "true_false", content: "Một công ty đấu thầu hai dự án. Xác suất trúng thầu dự án thứ nhất là 0.8. Nếu trúng thầu dự án 1 thì xác suất trúng thầu dự án 2 là 0.9. Nếu không trúng thầu dự án 1 thì xác suất trúng thầu dự án 2 là 0.2.", propositions: ["Xác suất để công ty không trúng thầu dự án thứ nhất là 0.2", "Xác suất để công ty trúng thầu dự án thứ hai là 0.76", "Xác suất để công ty trúng thầu cả hai dự án là 0.72", "Nếu công ty không trúng thầu dự án thứ hai thì xác suất trúng thầu dự án thứ nhất là 0.12"], correctAnswer: {0: "true", 1: "true", 2: "true", 3: "false"} },
        { id: 16, type: "true_false", content: "Cho hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$.", propositions: ["Đường tiệm cận xiên của đồ thị hàm số là đường thẳng $y = ax + b$. Khi đó $a - 2b = 5$", "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có phương trình là $y = 2x - 3$", "Gọi $A, B$ lần lượt là các điểm cực đại, cực tiểu của đồ thị hàm số và $O$ là gốc tọa độ. Diện tích tam giác $OAB$ bằng 6", "Hàm số nghịch biến trên khoảng $(-1; 3)$"], correctAnswer: {0: "true", 1: "true", 2: "true", 3: "false"} },
        { id: 17, type: "fill_blank", content: "Nếu một doanh nghiệp sản xuất $x$ sản phẩm trong một tháng ($x \\in \\mathbb{N}^*, 1 \\le x \\le 5000$) thì doanh thu là $F(x) = -0.03x^2 + 800x$ (nghìn đồng), chi phí sản xuất bình quân là $G(x) = \\frac{50000}{x} + 450$ (nghìn đồng). Trong một tháng, doanh nghiệp đó cần sản xuất ít nhất bao nhiêu sản phẩm để lợi nhuận thu được lớn hơn 100 triệu đồng?", correctAnswer: "446" },
        { id: 18, type: "fill_blank", content: "Cho hình lăng trụ $ABCD.A'B'C'D'$ có đáy $ABCD$ là hình thoi, $\\widehat{ABC} = 60^\\circ$. Biết $CA' = CB' = CC'$. Góc giữa $(BCC'B')$ và $(ABC)$ bằng $45^\\circ$. Khoảng cách giữa $AA'$ và $BC$ bằng $6\\sqrt{3}$. Thể tích khối lăng trụ đã cho bằng $a\\sqrt{2}$, giá trị của $a$ bằng bao nhiêu?", correctAnswer: "864" },
        { id: 19, type: "fill_blank", content: "Cho hình hộp $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Biết $\\widehat{BAD} = 90^\\circ$, $\\widehat{BAA'} = \\widehat{DAA'} = 60^\\circ$. Số đo góc giữa hai vectơ $\\overrightarrow{AC'}$ và $\\overrightarrow{DC'}$ bằng bao nhiêu độ? (Làm tròn kết quả đến hàng đơn vị).", correctAnswer: "130" },
        { id: 20, type: "fill_blank", content: "Bạn Minh dùng một miếng bìa hình vuông $ABCD$ cạnh $40cm$ cắt để làm một chiếc đèn lồng gồm ba phần: Phần thân là lăng trụ tứ giác đều, hai đầu là hai hình chóp tứ giác đều. Thể tích lớn nhất của chiếc đèn bằng bao nhiêu $cm^3$? (Làm tròn kết quả đến hàng đơn vị).", correctAnswer: "3057" },
        { id: 21, type: "fill_blank", content: "Có hai trục $Ox, Oy$ đặt trên mặt đất; tia $Oz$ hướng lên trên (đơn vị: km). Một Ra đa tại $A(12; 8; 3)$ có khả năng phát hiện thiết bị trong vòng bán kính 30km. UAV bay từ $M(72; 28; 3)$ đến $N(-32; -30; 3)$ với vận tốc không đổi là 240km/h. Hình ảnh của UAV xuất hiện trên màn hình Ra đa bao nhiêu phút? (Làm tròn đến hàng đơn vị).", correctAnswer: "14" },
        { id: 22, type: "fill_blank", content: "Cho hình nón có bán kính đáy $OA = 6cm$ và chiều cao $SO = 8cm$. Cắt hình nón bởi mặt phẳng song song với trục $SO$ và cách trục $SO$ khoảng 3cm. Thể tích phần không chứa đỉnh $S$ bằng bao nhiêu $cm^3$? (Làm tròn đến hàng phần chục).", correctAnswer: "33.2" }
    ],
    "thpt_toan_02": [
        { id: 501, type: "multiple_choice", content: "Cho cấp số cộng $(u_n)$ có $u_1=5$ và công sai $d=-1$. Giá trị của $u_2$ bằng <!--[cite: 2, 6] -->", options: ["A. 4.", "B. -5.", "C. 5.", "D. -4."], correctAnswer: "A" },
        { id: 502, type: "multiple_choice", content: "Cho các hàm số $y=f(x)$ và $y=g(x)$ có đạo hàm trên tập số thực $\\mathbb{R}$ thỏa mãn $f'(x)=x$ và $g'(x)=x^2$. Đạo hàm của hàm số $y=f(x)+g(x)$ là <!--[cite: 2, 6] -->", options: ["A. $3x$.", "B. $1+x^2$.", "C. $x+x^2$.", "D. $1+2x$."], correctAnswer: "C" },
        { id: 503, type: "multiple_choice", content: "Cho $\\int f(x)dx = \\sin x + C$. Phát biểu nào sau đây là đúng? <!--[cite: 2, 6] -->", options: ["A. $\\int [3+f(x)]dx = 3x + \\cos x + C$.", "B. $\\int [3+f(x)]dx = 3x + \\sin x + C$.", "C. $\\int [3+f(x)]dx = 3x - \\cos x + C$.", "D. $\\int [3+f(x)]dx = 3x - \\sin x + C$."], correctAnswer: "B" },
        { id: 504, type: "multiple_choice", content: "Nghiệm của phương trình $\\log_3(x-1)=1$ là <!--[cite: 2, 6] -->", options: ["A. $x=2$.", "B. $x=3$.", "C. $x=5$.", "D. $x=4$."], correctAnswer: "D" },
        { id: 505, type: "multiple_choice", content: "Trong không gian với hệ tọa độ $Oxyz$, cho hai điểm $A(1;5;1)$ và $B(3;3;1)$. Vectơ $\\overrightarrow{AB}$ có tọa độ là <!--[cite: 2, 6] -->", options: ["A. $(2;-2;0)$.", "B. (-2;2;0).", "C. $(4;8;2)$.", "D. $(2;4;1)$."], correctAnswer: "A" },
        { id: 506, type: "multiple_choice", content: "Cho hai biến cố độc lập $A$ và $B$ có xác suất thỏa mãn $P(A)=0,5$ và $P(B)=0,4$. Giá trị của $P(AB)$ bằng <!--[cite: 2, 6] -->", options: ["A. 0,8.", "B. 0,1.", "C. 0,9.", "D. 0,2."], correctAnswer: "D" },
        { id: 507, type: "multiple_choice", content: "Cho hình lập phương $ABCD.A'B'C'D'$ (xem hình dưới). Vectơ nào sau đây bằng vectơ $\\overrightarrow{AB}$?<br><img src='https://i.postimg.cc/GpwpRfVD/c7.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'> <!--[cite: 2, 6] -->", options: ["A. $\\overrightarrow{AA'}$.", "B. $\\overrightarrow{D'C'}$.", "C. $\\overrightarrow{CD}$.", "D. $\\overrightarrow{AD}$."], correctAnswer: "B" },
        { id: 508, type: "multiple_choice", content: "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases}x+y-3<0\\\\ x-y+1>0\\end{cases}$? <!--[cite: 2, 7] -->", options: ["A. $(1;0)$.", "B. $(0;2)$.", "C. $(-1;1)$.", "D. $(1;2)$."], correctAnswer: "A" },
        { id: 509, type: "multiple_choice", content: "Hàm số $F(x)=4x^3$ là một nguyên hàm của hàm số nào sau đây? <!--[cite: 2, 7] -->", options: ["A. $f_2(x)=3x^2$.", "B. $f_3(x)=12x^2$.", "C. $f_1(x)=x^4$.", "D. $f_4(x)=4x^4$."], correctAnswer: "B" },
        { id: 510, type: "multiple_choice", content: "Cho hàm số $y=\\frac{ax+b}{cx+d}$ có bảng biến thiên như hình dưới đây:<br><img src='https://i.postimg.cc/4NW8rk7s/c10-t.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Đường tiệm cận ngang của đồ thị hàm số đã cho có phương trình là <!--[cite: 2, 7] -->", options: ["A. $y=-2$.", "B. $x=-2$.", "C. $x=1$.", "D. $y=1$."], correctAnswer: "A" },
        { id: 511, type: "multiple_choice", content: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1$ và công bội $q$ với $u_1 \\neq 0, q>1$. Số hạng $u_4$ là <!--[cite: 3, 7] -->", options: ["A. $u_4=u_1 \\cdot q^3$.", "B. $u_4=u_1 \\cdot q^4$.", "C. $u_4=u_1+3q$.", "D. $u_4=u_1+4q$."], correctAnswer: "A" },
        { id: 512, type: "multiple_choice", content: "Khảo sát thời gian (đơn vị: phút) học trực tuyến trong một ngày của 42 học sinh, người ta thu được mẫu số liệu ghép nhóm như sau:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Thời gian</th><td class='border border-gray-300 p-2'>[10;20)</td><td class='border border-gray-300 p-2'>[20;30)</td><td class='border border-gray-300 p-2'>[30;40)</td><td class='border border-gray-300 p-2'>[40;50)</td><td class='border border-gray-300 p-2'>[50;60)</td><td class='border border-gray-300 p-2'>[60;70)</td></tr><tr><th class='border border-gray-300 p-2'>Số học sinh</th><td class='border border-gray-300 p-2'>4</td><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>14</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>4</td><td class='border border-gray-300 p-2'>5</td></tr></table><br>Trung vị của mẫu số liệu trên thuộc nhóm nào sau đây? <!--[cite: 3, 7] -->", options: ["A. $[30;40)$.", "B. $[40;50)$.", "C. $[60;70)$.", "D. $[50;60)$."], correctAnswer: "A" },
        { id: 513, type: "true_false", content: "Kết quả quét thử nghiệm hồ sơ y tế của 10000 người: 1000 người nhận cảnh báo (trong đó 700 bệnh, 300 không bệnh); 9000 người không nhận cảnh báo (trong đó 100 bệnh, 8900 không bệnh). Chọn ngẫu nhiên 1 người: <!--[cite: 3, 7] -->", propositions: ["Xác suất để người đó không nhận được cảnh báo từ ứng dụng bằng 0,9.", "Xác suất để người đó không có bệnh, biết rằng người đó không nhận được cảnh báo, lớn hơn 0,98.", "Xác suất để người đó không có bệnh bằng 0,9.", "Xác suất để người đó không nhận được cảnh báo, biết rằng người đó không có bệnh, nhỏ hơn 0,95."], correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'} },
        { id: 514, type: "true_false", content: "Cho hàm số $f(x)=\\frac{1}{3}x^3-5x^2+9x+8$. <!--[cite: 3, 8] -->", propositions: ["Hàm số đã cho có đạo hàm là $f'(x)=x^2-10x+9$.", "Phương trình $f'(x)=0$ có tập nghiệm là $S=\\{1;9\\}$.", "Hàm số đã cho nghịch biến trên khoảng $(1;9)$.", "Giá trị cực tiểu của hàm số đã cho bằng $\\frac{37}{3}$."], correctAnswer: {0: 'true', 1: 'true', 2: 'true', 3: 'false'} },
        { id: 515, type: "true_false", content: "Một hệ thống pin năng lượng mặt trời có năng lượng điện lưu trữ là $F(t)$ (kWh) với $F(0)=0$. Tốc độ lưu trữ năng lượng là $f(t)=F'(t) = -0,3t^2 + 3,6t$ (kW) với $0 \\le t \\le 12$. <!--[cite: 3, 8] -->", propositions: ["$F(t)=-0,1t^3+1,8t^2$ với $0 \\le t \\le 12$.", "Năng lượng lưu trữ được kể từ thời điểm $t=a$ đến $t=b$ là $\\int_{a}^{b} f(t)dt$.", "Năng lượng điện lưu trữ được kể từ thời điểm $t=1$ đến $t=4$ nhỏ hơn 20,6 kWh.", "Năng lượng lưu trữ được từ $t=1$ đến $t=7$ gấp hai lần năng lượng lưu trữ được từ $t=1$ đến $t=4$."], correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'} },
        { id: 516, type: "true_false", content: "Trong hệ tọa độ $Oxyz$ (1 đơn vị = 10m). Vành đai bảo vệ mục tiêu $O$ là đường tròn tâm $O$, bán kính 7 đơn vị trên $(Oxy)$. Máy bay bay theo đường thẳng từ $M(5;10;4)$ đến $N(14;-2;4)$. <!--[cite: 4, 9] -->", propositions: ["$\\overrightarrow{MN}=(9;-12;0)$.", "Phương trình tham số của $MN$ là $\\begin{cases}x=5+3t\\\\ y=10-4t\\\\ z=0\\end{cases}$ với $t \\in \\mathbb{R}$.", "Khoảng cách ngắn nhất từ máy bay đến vành đai bảo vệ là 50 mét.", "Khoảng cách đạt giá trị nhỏ nhất khi máy bay ở tọa độ $(8;6;4)$."], correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'true'} },
        { id: 517, type: "fill_blank", content: "Cho hình lập phương $ABCD.MNPQ$ có cạnh bằng 6. Gọi $E$ là trung điểm của đoạn thẳng $AB$. Khoảng cách từ điểm $P$ đến mặt phẳng $(MED)$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)? <!--[cite: 4, 10] -->", correctAnswer: "7.35" },
        { id: 518, type: "fill_blank", content: "Bình cần điền 15 số $\\{0;1;2;3;4;5;6;7;8;10;11;12;15;16;20\\}$ vào 15 ô vuông dạng bậc thang sao cho: Hiệu hai số ở 2 ô khác nhau trên cùng 1 hàng hoặc 1 cột không chia hết cho 5.<br><img src='https://i.postimg.cc/dtC2jb2n/ovuong.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Gọi $H$ là số cách điền khác nhau. Giá trị của $\\frac{H}{30}$ bằng bao nhiêu? <!--[cite: 4, 11] -->", correctAnswer: "1152" },
        { id: 519, type: "fill_blank", content: "Khối vật thể tạo thành khi quay nửa trên elip $\\frac{x^2}{1,5^2}+\\frac{y^2}{1^2}=1$ quanh trục $Ox$. Lỗ khoan trụ dọc trục có bán kính $0,2$cm.<br><img src='https://i.postimg.cc/W4z7RXqV/tt.png' class='mt-4 mb-4 w-full max-w-2xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Thể tích của hạt cườm đó bằng bao nhiêu $cm^3$ (làm tròn đến hàng phần trăm)? <!--[cite: 4, 11] -->", correctAnswer: "5.91" },
        { id: 520, type: "fill_blank", content: "Khung hình đa giác đều 12 cạnh $A_1A_2...A_{12}$. Lắp ngẫu nhiên 12 bóng (4 đỏ, 8 xanh) vào 12 đỉnh. Gọi $P$ là xác suất để mỗi hình vuông (tạo từ 4 đỉnh đa giác) đều có ít nhất 1 bóng đỏ. Giá trị của $3190P$ bằng bao nhiêu?<img src='https://i.postimg.cc/nV3cr2Ck/vv.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'> <!--[cite: 5, 12] -->", correctAnswer: "1856" },
        { id: 521, type: "fill_blank", content: "Số liệu bán hàng (kg và nghìn đồng):<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Ngày</th><th class='border border-gray-300 p-2'>Rau muống</th><th class='border border-gray-300 p-2'>Bí xanh</th><th class='border border-gray-300 p-2'>Cà chua</th><th class='border border-gray-300 p-2'>Tổng tiền</th></tr><tr><td class='border border-gray-300 p-2'>Thứ 4</td><td class='border border-gray-300 p-2'>19</td><td class='border border-gray-300 p-2'>14</td><td class='border border-gray-300 p-2'>10</td><td class='border border-gray-300 p-2'>600</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 5</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>540</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 6</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>570</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 7</td><td class='border border-gray-300 p-2'>50</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>?</td></tr></table><br>Biết đơn giá không đổi, tổng tiền thu được ngày thứ Bảy là bao nhiêu? <!--[cite: 5, 12] -->", correctAnswer: "1275" },
        { id: 522, type: "fill_blank", content: "Công ty chế biến $x$ tấn nguyên liệu ($1 \\le x \\le 200$), chi phí $C(x)=0,001x^3+30x+10$ (triệu) và doanh thu $R(x)=60x$ (triệu). Lợi nhuận lớn nhất công ty đạt được trong một tháng là bao nhiêu triệu đồng? <!--[cite: 5, 13] -->", correctAnswer: "1990" }
    ],
    "thpt_sinh_03": [
        { id: 601, type: "multiple_choice", content: "Điều nào dưới đây không đúng với mã di truyền? <!--[cite: 16] -->", options: ["A. Các loài sinh vật đều có chung một bộ mã di truyền trừ một vài ngoại lệ.", "B. Mã di truyền được đọc từ một điểm xác định và gối chồng lên nhau.", "C. Mã di truyền có tính đặc hiệu nghĩa là một bộ ba chỉ mã hóa cho một amino acid.", "D. Trình tự sắp xếp các nucleotide trong gene qui định trình tự sắp xếp các amino acid trong chuỗi polypeptide."], correctAnswer: "B" },
        { id: 602, type: "multiple_choice", content: "Cơ chế điều hòa biểu hiện gene của operon Lac khi có lactose là? <!--[cite: 16] -->", options: ["A. Làm cho enzyme chuyển hóa nó có hoạt tính tăng lên nhiều lần.", "B. Bất hoạt protein ức chế, hoạt hóa operon phiên mã tổng hợp enzyme phân giải lactose.", "C. Là chất gây cảm ứng ức chế biểu hiện của operon, ức chế phiên mã.", "D. Cùng protein ức chế bất hoạt vùng O, gây ức chế phiên mã."], correctAnswer: "B" },
        { id: 603, type: "multiple_choice", content: "Ở một loài thực vật, tính trạng màu hoa do hai cặp gene A, a và B, b phân li độc lập cùng qui định. Kiểu gene có cả allele A và allele B thì hoa có màu đỏ, kiểu gene chỉ có allele A hoặc chỉ có allele B thì hoa có màu vàng, kiểu gene không có 2 loại allele trên thì hoa có màu trắng. Kiểu gene nào sau đây quy định kiểu hình hoa đỏ? <!--[cite: 16] -->", options: ["A. AaBb.", "B. AAbb.", "C. Aabb.", "D. aaBB."], correctAnswer: "A" },
        { id: 604, type: "multiple_choice", content: "Cho trình tự mạch bổ sung của một gene có trình tự các nucleotide là 5' ATTCGTAGGC 3'. Trình tự của mRNA được phiên mã từ gene này sẽ có trình tự là? <!--[cite: 16] -->", options: ["A. 5' AUUCGUAGGC 3'.", "B. 3' UAAGCAUCCG 5'.", "C. 5' ATTCGTAGGC 3'.", "D. 3' AUUCGUAGGC 5'."], correctAnswer: "A" },
        { id: 605, type: "multiple_choice", content: "Enzyme nào được sử dụng để cắt và nối các đoạn DNA trong quy trình tạo động vật biến đổi gene? <!--[cite: 17] -->", options: ["A. Reverse transcriptase và integrase.", "B. Restrictase enzyme và ligase.", "C. Protease và nuclease.", "D. DNA polymerase và helicase."], correctAnswer: "B" },
        { id: 606, type: "multiple_choice", content: "Đơn phân cấu tạo nên DNA là? <!--[cite: 17] -->", options: ["A. Amino acid.", "B. Glicerol.", "C. Monosaccharide.", "D. Nucleotide."], correctAnswer: "D" },
        { id: 607, type: "multiple_choice", content: "Khi thực hiện phép lai giữa hai cây hoa mõm chó thuần chủng có hoa màu đỏ và màu trắng với nhau thu được $F_1$ toàn cây có hoa màu hồng. Cho $F_1$ tự thụ phấn, thu được $F_2$ có kiểu hình phân li theo tỉ lệ 1 đỏ : 2 hồng : 1 trắng. Có thể kết luận tính trạng màu hoa do? <!--[cite: 17] -->", options: ["A. một gene có 2 allele trội, lặn hoàn toàn quy định.", "B. một gene có 2 allele đồng trội quy định.", "C. một gene có 2 allele trội, lặn không hoàn toàn quy định.", "D. hai gene, mỗi gene có 2 allele cùng quy định."], correctAnswer: "C" },
        { id: 608, type: "multiple_choice", content: "Ở người, allele A nằm trên nhiễm sắc thể X quy định máu đông bình thường là trội hoàn toàn so với allele a quy định bệnh máu khó đông. Biết không xảy ra đột biến. Theo lí thuyết, cặp bố mẹ nào sau đây không thể sinh con bị bệnh máu khó đông? <!--[cite: 17] -->", options: ["A. $X^AX^a \\times X^AY$.", "B. $X^AX^A \\times X^aY$.", "C. $X^AX^a \\times X^aY$.", "D. $X^aX^a \\times X^AY$."], correctAnswer: "B" },
        { id: 609, type: "multiple_choice", content: "Cho các thành tựu sau, đâu không phải là thành tựu của tạo động vật chuyển gene? <!--[cite: 17] -->", options: ["A. Cá hồi mang gene mã hóa hormone sinh trưởng có tốc độ sinh trưởng cao so với cá hồi thông thường.", "B. Cừu Dolly được tạo ra từ nhân tế bào trứng kết hợp với tế bào chất tế bào vú không qua thụ tinh.", "C. Bò có mang gene có chứa hàm lượng $\\beta$-lactoglobulin cao.", "D. Cừu mang gene quy định protein antithrombin của người có thể tách chiết làm thuốc chống đông máu dùng trong các ca phẫu thuật."], correctAnswer: "B" },
        { id: 610, type: "multiple_choice", content: "Cấu trúc của operon lac bao gồm những thành phần nào? <!--[cite: 17] -->", options: ["A. Gene điều hòa (lacI), vùng P, vùng O.", "B. Gene điều hòa (lacI), gene cấu trúc(lacZ, lacY, lacA), vùng P.", "C. vùng P, gene cấu trúc(lacZ, lacY, lacA), vùng O.", "D. Gene điều hòa (lacI), gene cấu trúc(lacZ, lacY, lacA), vùng O."], correctAnswer: "C" },
        { id: 611, type: "multiple_choice", content: "Cặp nhiễm sắc thể nào sau đây được xem là cặp tương đồng? <!--[cite: 17] -->", options: ["A. XX.", "B. ZW.", "C. XO.", "D. XY."], correctAnswer: "A" },
        { id: 612, type: "multiple_choice", content: "Ở cây đậu Hà Lan, xét gene quy định màu hoa có 2 allele nằm trên NST thường, allele A quy định hoa tím trội hoàn toàn so với allele a quy định hoa trắng. Tiến hành lai giữa các cây thu được kết quả như sau.<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Phép lai</th><th class='border border-gray-300 p-2'>Tỉ lệ kiểu gene</th></tr><tr><td class='border border-gray-300 p-2'>Cây hoa tím A x Cây hoa trắng</td><td class='border border-gray-300 p-2'>F1:?</td></tr><tr><td class='border border-gray-300 p-2'>Cây F1 x Cây hoa tím dị hợp</td><td class='border border-gray-300 p-2'>F2: 1:2:1</td></tr></table><br>Phép lai ở P là ? <!--[cite: 17] -->", options: ["A. AA x aa.", "B. Aa x aa.", "C. Aa x Aa.", "D. AA x Aa."], correctAnswer: "A" },
        { id: 613, type: "multiple_choice", content: "Khi nói về quá trình tái bản DNA, phát biểu nào sau đây sai? <!--[cite: 17] -->", options: ["A. Nhờ các enzyme tháo xoắn, hai mạch đơn của DNA tách nhau dần tạo nên chạc chữ Y.", "B. Enzyme DNA polimerase tổng hợp và kéo dài mạch mới theo chiều $3' \\rightarrow 5'$.", "C. Quá trình tái bản DNA diễn ra theo nguyên tắc bổ sung và nguyên tắc bán bảo tồn.", "D. Enzyme ligase (enzyme nối) nối các đoạn Okazaki thành mạch đơn hoàn chỉnh."], correctAnswer: "B" },
        { id: 614, type: "multiple_choice", content: "Trong thành phần cấu trúc của một gene điển hình gồm có các phần? <!--[cite: 17] -->", options: ["A. Vùng khởi động, vùng mã hóa và vùng kết thúc.", "B. Vùng điều hòa, vùng mã hóa và vùng kết thúc.", "C. Vùng khởi động, vùng vận hành và vùng cấu trúc.", "D. Vùng cấu trúc, vùng mã hóa và vùng kết thúc."], correctAnswer: "B" },
        { id: 615, type: "multiple_choice", content: "Khi nói về cơ chế dịch mã ở sinh vật nhân thực thì phát biểu nào đúng, phát biểu nào sai? <!--[cite: 18] -->", options: ["A. Khi ribosome tiếp xúc với mã UGA thì quá trình dịch mã dừng lại.", "B. Amino acid mở đầu trong quá trình dịch mã là methyonine.", "C. Mỗi phân tử mRNA có thể tổng hợp được từ một đến nhiều chuỗi polypeptide cùng loại.", "D. Khi dịch mã, ribosome dịch chuyển theo chiều $3' \\rightarrow 5'$ trên phân tử mRNA."], correctAnswer: "A" },
        { id: 616, type: "true_false", content: "Thomas Hunt Morgan đã lai một con ruồi giấm cái mắt đỏ thuần chủng với một con đực mắt trắng, ở $F_1$ thu được 100% ruồi mắt đỏ. Cho $F_1$ tạp giao, thu được $F_2$ có cả ruồi mắt đỏ và mắt trắng. Tuy nhiên, màu mắt trắng chỉ xuất hiện ở con đực. Trong một phép lai khác giữa ruồi cái mắt trắng với ruồi đực mắt đỏ, thu được $F_1$, rồi cho $F_1$ tạp giao, thu được $F_2$. Mỗi nhận định sau đây là đúng hay sai khi xét về thí nghiệm trên đây? <!--[cite: 18] -->", propositions: ["a) Tính trạng màu mắt đỏ trội hơn so với màu mắt trắng.", "b) Gene quy định màu mắt nằm trên nhiễm sắc thể giới tính X.", "c) Ở thế hệ $F_1$ của phép lai 2 có 100% con cái mắt đỏ, 50% con đực mắt đỏ.", "d) Nếu cho ruồi mắt đỏ ở thế hệ $F_2$ của phép lai 2 ngẫu phối thì $F_3$ không thu được màu mắt trắng."], correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'} },
        { id: 617, type: "true_false", content: "Khi nói về cấu trúc siêu hiển vi của NST, mỗi nhận xét sau đây đúng hay sai? <!--[cite: 18] -->", propositions: ["a) Đơn vị cấu trúc nên NST là các nucleosome, có dạng hình cầu.", "b) Mỗi nucleosome gồm lõi với 8 phân tử proteine histone và một đoạn DNA gồm khoảng 146 cặp nucleotide.", "c) Chuỗi nucleosome có vùng dị nhiễm sắc chứa các gene hoạt động còn vùng nguyên nhiễm sắc nằm ở đầu mút hoặc tâm động thì chứa các gene bị bất hoạt.", "d) Mỗi NST có một tâm động giúp NST di chuyển trong phân bào và trình tự đầu mút bảo vệ NST."], correctAnswer: {0: 'false', 1: 'true', 2: 'false', 3: 'true'} },
        { id: 618, type: "true_false", content: "Một loài thực vật, cho cây thân cao, lá nguyên giao phấn với cây thân thấp, lá xẻ (P), thu được $F_1$ gồm toàn cây thân cao, lá nguyên. Lai phân tích cây $F_1$, thu được $F_a$ có kiểu hình phân li theo tỉ lệ 1 cây thân cao, lá nguyên : 1 cây thân cao, lá xẻ : 1 cây thân thấp, lá nguyên : 1 cây thân thấp, lá xẻ. Cho biết mỗi gene quy định một tính trạng. Theo lí thuyết, nhận định nào sau đây đúng hay sai? <!--[cite: 18] -->", propositions: ["a) Cây thân thấp, lá nguyên ở $F_a$ giảm phân bình thường tạo ra 2 loại giao tử.", "b) Cho cây $F_1$ tự thụ phấn, thu được $F_2$ có $1/3$ số cây thân cao, lá xẻ.", "c) Cây thân cao, lá xẻ ở $F_a$ đồng hợp tử về 2 cặp gene.", "d) Kiểu gene cây thân cao, lá nguyên ở $F_a$ và $F_1$ là khác nhau."], correctAnswer: {0: 'false', 1: 'false', 2: 'false', 3: 'false'} },
        { id: 619, type: "true_false", content: "Mỗi nhận định sau là đúng hay sai khi nói về quá trình phiên mã? <!--[cite: 18] -->", propositions: ["a) Mạch khuôn được dùng để tổng hợp RNA có chiều $5' \\rightarrow 3'$.", "b) Quá trình tổng hợp mRNA được thực hiện theo đúng nguyên tắc bổ sung $A=U, T=A, C \\equiv G, G \\equiv C$.", "c) Enzyme RNA polymerase di chuyển trên mạch khuôn theo chiều $5' \\rightarrow 3'$.", "d) Enzyme tham gia quá trình phiên mã là enzyme RNA polymerase."], correctAnswer: {0: 'false', 1: 'true', 2: 'false', 3: 'true'} },
        { id: 620, type: "fill_blank", content: "Một phân tử DNA trên mạch 1 của phân tử DNA xoắn kép có tỷ lệ $(A+G)/(T+C)=2,5$ thì trên mạch bổ sung (mạch 2) tỉ lệ đó là bao nhiêu phần trăm (%)? <!--[cite: 18, 24] -->", correctAnswer: "40" },
        { id: 621, type: "fill_blank", content: "Hóa chất 5-BU có thể làm gene đột biến thay thế cặp A-T thành G-C qua mấy lần tái bản DNA? <!--[cite: 18, 24] -->", correctAnswer: "3" },
        { id: 622, type: "fill_blank", content: "Ở một Đậu Hà Lan, allele A quy định hạt vàng trội hoàn toàn so với allele a quy định hạt xanh; allele B quy định vỏ trơn trội hoàn toàn so với b quy định vỏ nhăn, hai cặp gene nằm trên hai cặp NST tương đồng khác nhau. Cho lai 2 cây với nhau thu được $F_1$ có tỉ lệ kiểu hình hạt vàng, vỏ nhăn chiếm 25%. Theo lí thuyết, có bao nhiêu phép lai phù hợp với kết quả trên?<br>I. $AABb \\times AABb$<br>II. $Aabb \\times Aabb$<br>III. $Aabb \\times aaBb$<br>IV. $AaBb \\times aabb$ <!--[cite: 18, 19, 24] -->", correctAnswer: "3" },
        { id: 623, type: "fill_blank", content: "Xét 7 amino acid đầu mạch của phân tử protein hemoglobin (Hb) ở người bình thường được kí hiệu là HbA và tương ứng của người bệnh kí hiệu là HbB có trình tự như sau:<br>HbA: $Val - His - Leu - Thr - Pro - Glu - Glu$<br>HbB: $Val - His - Leu - Thr - Pro - Val - Glu$<br>Vị trí triplet xảy ra đột biến gene là bao nhiêu? <!--[cite: 19, 24] -->", correctAnswer: "6" },
        { id: 624, type: "fill_blank", content: "Một nhóm nghiên cứu nuôi một số vi khuẩn E.coli trong môi trường chỉ có nito đồng vị nặng ($^{15}N$). Sau đó, chuyển vi khuẩn sang nuôi tiếp năm thế hệ ở môi trường chỉ có nitơ đồng vị nhẹ ($^{14}N$). Tách DNA sau mỗi thệ hệ và thu được kết quả như hình dưới đây. Cho biết X là vị trí của DNA chứa cả hai mạch $^{15}N$, Y là vị trí của DNA chứa cả mạch $^{14}N$ và mạch $^{15}N$; Z là vị trí của DNA chứa cả hai mạch $^{14}N$. Ở thế hệ thứ 4 vạch Z chiếm tỉ lệ bao nhiêu ? (Hãy thể hiện kết quả bằng số thập phân và làm tròn đến 2 chữ số sau dấu phẩy).<br><img src='https://i.postimg.cc/rsHhs1q4/sinhpp.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 19, 24] -->", correctAnswer: "0.88" }
    ],
    "thpt_ly_03": [
        // --- PHẦN I: CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (18 CÂU) ---
        {
            id: 901, type: "multiple_choice",
            content: "Khi cho 2 vật chênh lệch nhiệt độ tiếp xúc nhau, năng lượng nhiệt luôn truyền từ vật có (1)..... sang vật có (2)..... Quá trình truyền nhiệt kết thúc khi hai vật (3)..... (trạng thái này được gọi là trạng thái (4).....). Chọn đáp án có các cụm từ thích hợp điền vào chỗ trống. <!-- -->",
            options: [
                "A. (1) nhiệt độ thấp; (2) nhiệt độ cao; (3) có cùng nội năng; (4) cân bằng nội năng.",
                "B. (1) nhiệt độ thấp; (2) nhiệt độ cao; (3) có cùng nhiệt độ; (4) cân bằng nhiệt.",
                "C. (1) nhiệt độ cao; (2) nhiệt độ thấp; (3) có cùng nội năng; (4) cân bằng nội năng.",
                "D. (1) nhiệt độ cao; (2) nhiệt độ thấp; (3) có cùng nhiệt độ; (4) cân bằng nhiệt."
            ],
            correctAnswer: "D"
        },
        {
            id: 902, type: "multiple_choice",
            content: "Một nhiệt kế thể tích không đổi hiển thị nhiệt độ $0^\\circ\\text{C}$ và $100^\\circ\\text{C}$ tương ứng với các áp suất $50\\text{ cmHg}$ và $90\\text{ cmHg}$. Biết nhiệt độ đọc được là hàm bậc nhất của áp suất. Khi áp suất thủy ngân là $60\\text{ cmHg}$ thì nhiệt độ đọc được bằng <!-- -->",
            options: [
                "A. $25^\\circ\\text{C}$.",
                "B. $40^\\circ\\text{C}$.",
                "C. $15^\\circ\\text{C}$.",
                "D. $12,5^\\circ\\text{C}$."
            ],
            correctAnswer: "A"
        },
        {
            id: 903, type: "multiple_choice",
            content: "Chiều cao của cột thủy ngân trong nhiệt kế thủy ngân thay đổi theo nhiệt độ. Ứng với hai vạch có nhiệt độ là $0^\\circ\\text{C}$ và $100^\\circ\\text{C}$ thì chiều cao của cột thủy ngân trong nhiệt kế là $2\\text{ cm}$ và $22\\text{ cm}$. Khi sử dụng nhiệt kế này để đo nhiệt độ của cơ thể một em bé đang bị sốt thì thấy cột thủy ngân cao $9,9\\text{ cm}$. Theo thang nhiệt Kelvin, nhiệt độ của em bé lúc này là bao nhiêu? <!-- -->",
            options: [
                "A. $321,5\\text{ K}$.",
                "B. $305,5\\text{ K}$.",
                "C. $312,5\\text{ K}$.",
                "D. $327,0\\text{ K}$."
            ],
            correctAnswer: "C"
        },
        {
            id: 904, type: "multiple_choice",
            content: "Nội năng của một hệ là <!-- -->",
            options: [
                "A. tổng công và nhiệt mà hệ truyền ra bên ngoài.",
                "B. tổng công và nhiệt mà hệ nhận được từ bên ngoài.",
                "C. tổng động năng và thế năng tương tác của các phân tử cấu tạo nên hệ.",
                "D. tổng động năng và thế năng của hệ."
            ],
            correctAnswer: "C"
        },
        {
            id: 905, type: "multiple_choice",
            content: "Khi thép đang nóng chảy được làm nguội nhanh về nhiệt độ phòng sẽ giúp tăng độ cứng cho thép và cách làm như vậy được gọi là tôi thép. Người ta có thể sử dụng nước để làm hạ nhiệt độ nhanh cho thép đang nóng đỏ vì <!--[cite: 83] -->",
            options: [
                "A. nhiệt dung riêng của nước cao hơn nhiều so với của thép trong khi đó nhiệt độ sôi của nước lại thấp hơn nhiều so với nhiệt độ nóng chảy của thép.",
                "B. nước có khả năng bốc hơi rất nhanh khi gặp kim loại nóng.",
                "C. nhiệt độ nóng chảy của nước thấp hơn nhiều so với của thép.",
                "D. sử dụng nước là do thói quen vì thật ra có thể để thép nóng đỏ trong không khí thì thép cũng hạ nhanh về nhiệt độ phòng."
            ],
            correctAnswer: "A"
        },
        {
            id: 906, type: "multiple_choice",
            content: "Khi nói về thang đo nhiệt độ Kelvin và Celsius, kết luận nào sau đây là sai? <!--[cite: 83] -->",
            options: [
                "A. Nhiệt độ trong thang nhiệt độ Kelvin được kí hiệu là $T$, có đơn vị $\\text{K}$.",
                "B. Nhiệt độ trong thang nhiệt độ Celsius được kí hiệu là $t$, có đơn vị $^\\circ\\text{C}$.",
                "C. Một độ chia trên thang nhiệt độ Kelvin có giá trị gấp 273 lần một độ chia trên thang nhiệt độ Celsius.",
                "D. Mối liên hệ về các giá trị nhiệt độ giữa hai thang đo là: $T(\\text{K}) = t(^\\circ\\text{C}) + 273,15$."
            ],
            correctAnswer: "C"
        },
        {
            id: 907, type: "multiple_choice",
            content: "Sắp xếp các nhiệt độ sau: $300\\text{ K}, 20^\\circ\\text{C}, 280\\text{ K}, 30^\\circ\\text{C}$ theo thứ tự tăng dần. Thứ tự đúng là: <!--[cite: 83] -->",
            options: [
                "A. $300\\text{ K}, 280\\text{ K}, 20^\\circ\\text{C}, 30^\\circ\\text{C}$.",
                "B. $20^\\circ\\text{C}, 30^\\circ\\text{C}, 280\\text{ K}, 300\\text{ K}$.",
                "C. $280\\text{ K}, 20^\\circ\\text{C}, 300\\text{ K}, 30^\\circ\\text{C}$.",
                "D. $30^\\circ\\text{C}, 300\\text{ K}, 20^\\circ\\text{C}, 280\\text{ K}$."
            ],
            correctAnswer: "C"
        },
        {
            id: 908, type: "multiple_choice",
            content: "Khi nói về quá trình truyền nhiệt lượng khi cho hai vật tiếp xúc với nhau. Kết luận nào sau đây là sai? <!--[cite: 83] -->",
            options: [
                "A. Năng lượng nhiệt được truyền từ vật có nội năng lớn hơn sang vật có nội năng nhỏ hơn.",
                "B. Năng lượng nhiệt được truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp hơn.",
                "C. Vật nóng hơn sẽ giảm nhiệt độ, vật lạnh hơn sẽ tăng nhiệt độ.",
                "D. Khi hai vật ở cùng nhiệt độ, không có truyền năng lượng nhiệt giữa chúng."
            ],
            correctAnswer: "A"
        },
        {
            id: 909, type: "multiple_choice",
            content: "Nhiệt hóa hơi riêng của một chất là nhiệt lượng cần cung cấp để $1\\text{ kg}$ chất đó: <!--[cite: 83] -->",
            options: [
                "A. bay hơi hết.",
                "B. hóa hơi hoàn toàn.",
                "C. hóa hơi hoàn toàn ở nhiệt độ sôi.",
                "D. hóa hơi."
            ],
            correctAnswer: "C"
        },
        {
            id: 910, type: "multiple_choice",
            content: "Các nhiệt kế thường dùng như nhiệt kế rượu, nhiệt kế thủy ngân, được chế tạo dựa trên <!--[cite: 83] -->",
            options: [
                "A. sự nở vì nhiệt của thể tích một lượng khí xác định ở áp suất không đổi.",
                "B. sự nở vì nhiệt của ống thủy tinh chứa chất lỏng.",
                "C. sự nở dài của chất lỏng trong ống thủy tinh.",
                "D. sự nở dài của một thanh kim loại thẳng."
            ],
            correctAnswer: "C"
        },
        {
            id: 911, type: "multiple_choice",
            content: "Phần năng lượng nhiệt mà vật này truyền cho vật kia hoặc vật này nhận từ vật kia gọi là <!--[cite: 83] -->",
            options: [
                "A. nội năng.",
                "B. nhiệt lượng.",
                "C. nhiệt độ.",
                "D. thế năng."
            ],
            correctAnswer: "B"
        },
        {
            id: 912, type: "multiple_choice",
            content: "Cặp nhiệt độ được chọn làm mốc trong thang đo nhiệt độ Kelvin là <!--[cite: 83] -->",
            options: [
                "A. nhiệt độ nước đóng băng và nhiệt độ sôi của băng.",
                "B. độ không tuyệt đối và nhiệt độ nước sôi của nước tinh khiết.",
                "C. độ không tuyệt đối và nhiệt độ điểm ba của nước.",
                "D. nhiệt độ nước đóng băng và nhiệt độ điểm ba của nước."
            ],
            correctAnswer: "C"
        },
        {
            id: 913, type: "multiple_choice",
            content: "Chọn phát biểu sai? Sự bay hơi của một khối chất lỏng <!--[cite: 83] -->",
            options: [
                "A. phụ thuộc vào nhiệt độ, nhiệt độ càng cao sự bay hơi xảy ra càng nhanh.",
                "B. phụ thuộc vào độ ẩm của không khí trên mặt thoáng, độ ẩm càng lớn thì sự bay hơi xảy ra càng nhanh.",
                "C. phụ thuộc vào diện tích mặt thoáng, diện tích mặt thoáng càng lớn thì sự bay hơi xảy ra càng nhanh.",
                "D. xảy ra ở nhiệt độ bất kỳ."
            ],
            correctAnswer: "B"
        },
        {
            id: 914, type: "multiple_choice",
            content: "Khi làm muối, người ta dựa vào hiện tượng nào của nước? <!--[cite: 83] -->",
            options: [
                "A. Đông đặc.",
                "B. Ngưng tụ.",
                "C. Bay hơi.",
                "D. Sự sôi."
            ],
            correctAnswer: "C"
        },
        {
            id: 915, type: "multiple_choice",
            content: "Phát biểu nào sau đây nói về nội năng là không đúng? <!--[cite: 83] -->",
            options: [
                "A. Nội năng là một dạng năng lượng.",
                "B. Nội năng của một vật có thể tăng lên hoặc giảm đi.",
                "C. Nội năng là nhiệt lượng.",
                "D. Nội năng có thể chuyển hóa thành các dạng năng lượng khác."
            ],
            correctAnswer: "C"
        },
        {
            id: 916, type: "multiple_choice",
            content: "Để diệt trừ các bào tử nấm và kích thích quá trình nảy mầm của hạt giống lúa, người nông dân đã sử dụng một kinh nghiệm dân gian là ngâm chúng vào trong nước ấm theo công thức \"hai sôi, ba lạnh\". Tức là nước ấm ở nhiệt độ $t^\\circ\\text{C}$ sẽ được tạo ra bằng cách pha hai phần nước sôi ($100^\\circ\\text{C}$) với ba phần nước lạnh ($t_0^\\circ\\text{C}$). Chọn biểu thức đúng. <!--[cite: 83] -->",
            options: [
                "A. $t = \\frac{200 + 2t_0}{5}$.",
                "B. $t = \\frac{200 + 3t_0}{5}$.",
                "C. $t = \\frac{300 + 2t_0}{5}$.",
                "D. $t = \\frac{100 + 3t_0}{5}$."
            ],
            correctAnswer: "B"
        },
        {
            id: 917, type: "multiple_choice",
            content: "Dùng một ca nước ở thùng chứa nước A có nhiệt độ $t_A = 20^\\circ\\text{C}$ và ở thùng chứa nước B ở nhiệt độ $t_B = 80^\\circ\\text{C}$ rồi đổ vào thùng nước C. Biết rằng trước khi đổ, trong thùng chứa nước C đã có sẵn một lượng nước ở nhiệt độ $t_C = 40^\\circ\\text{C}$ và bằng tổng số ca nước vừa mới đổ thêm vào nó. Bỏ qua sự trao đổi nhiệt với môi trường, với bình chứa và ca múc nước. Để có nhiệt độ nước ở thùng C là $50^\\circ\\text{C}$ thì số ca nước phải múc ở mỗi thùng A và B lần lượt là: <!--[cite: 83] -->",
            options: [
                "A. $n$ ca và $2n$ ca.",
                "B. $3n$ ca và $2n$ ca.",
                "C. $2n$ ca và $n$ ca.",
                "D. $n$ ca và $3n$ ca."
            ],
            correctAnswer: "A"
        },
        {
            id: 918, type: "multiple_choice",
            content: "Nhiệt hóa hơi riêng có đơn vị đo là <!--[cite: 83] -->",
            options: [
                "A. J/kg.độ",
                "B. J",
                "C. J/kg.K",
                "D. J/kg"
            ],
            correctAnswer: "D"
        },

        // --- PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
        {
            id: 919, type: "true_false",
            content: "Tại điểm ba của nước: <!--[cite: 83] -->",
            propositions: [
                "a) nước tinh khiết tồn tại đồng thời ở cả ba thể: rắn, lỏng, khí. <!--[cite: 83] -->",
                "b) nhiệt độ của hệ khảo sát được chọn làm mốc trên thang đo Kelvin và có giá trị là $273,16\\text{ K}$. <!--[cite: 83] -->",
                "c) hệ khảo sát có áp suất $1\\text{ atm}$. <!--[cite: 83] -->",
                "d) hệ khảo sát có nhiệt độ theo thang Celsius là $0,01^\\circ\\text{C}$. <!--[cite: 83] -->"
            ],
            correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'true'}
        },
        {
            id: 920, type: "true_false",
            content: "Có hai chai nước lạnh A và B hoàn toàn giống nhau. Cho chai nước A vào chậu nước đến khi cân bằng nhiệt thì thấy nhiệt độ nước trong chậu giảm xuống. Lấy chai nước A ra ngoài và cho chai nước B vào chậu nước đến khi cân bằng nhiệt thì thấy nhiệt độ nước trong chậu tiếp tục giảm xuống, lấy chai B ra khỏi chậu nước. Xem như chỉ có sự trao đổi nhiệt giữa chai nước A, B và nước trong chậu. <!--[cite: 83] -->",
            propositions: [
                "a) Độ giảm nhiệt độ của chậu nước trong lần nhúng chai nước A nhiều hơn lần nhúng chai nước B. <!--[cite: 83] -->",
                "b) Sau khi lấy các chai nước ra khỏi chậu thì nhiệt độ của chai nước A cao hơn nhiệt độ của chai nước B. <!--[cite: 83] -->",
                "c) Tổng độ tăng nhiệt độ của 2 chai nước bằng tổng độ giảm nhiệt độ của nước trong chậu ở 2 lần nhúng. <!--[cite: 83] -->",
                "d) Nhiệt lượng của chậu nước truyền cho hai chai nước là như nhau. <!--[cite: 83] -->"
            ],
            correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'}
        },
        {
            id: 921, type: "true_false",
            content: "Giả sử một học sinh tạo ra một nhiệt kế sử dụng một thang nhiệt độ mới cho riêng mình, gọi là thang nhiệt độ Z, có đơn vị là $^\\circ\\text{Z}$. Trong đó, nhiệt độ của nước đá đang tan ở $1\\text{ atm}$ là $x^\\circ\\text{Z}$, nhiệt độ nước sôi ở $1\\text{ atm}$ là $y^\\circ\\text{Z}$. Từ vạch $x^\\circ\\text{Z}$ đến vạch $y^\\circ\\text{Z}$ được chia thành 180 khoảng, mỗi khoảng ứng với $1^\\circ\\text{Z}$. <!--[cite: 83] -->",
            propositions: [
                "a) Nếu nhiệt độ cơ thể người là $37^\\circ\\text{C}$ tương ứng với $86,6^\\circ\\text{Z}$ thì giá trị của $x$ là 20. <!--[cite: 83] -->",
                "b) Độ biến thiên nhiệt độ $18^\\circ\\text{C}$ trong thang nhiệt độ Celsius bằng với độ biến thiên nhiệt độ $10^\\circ\\text{Z}$ trong thang nhiệt độ Z. <!--[cite: 83] -->",
                "c) Mối liên hệ giữa $x$ và $y$ là: $y = x + 180$. <!--[cite: 83] -->",
                "d) Một độ chia trên thang nhiệt độ Z bằng 1,8 lần độ chia trên thang nhiệt độ Celsius. <!--[cite: 83] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'false'}
        },
        {
            id: 922, type: "true_false",
            content: "Khi nung nóng một khối khí chứa trong một xilanh có pit-tông đóng kín làm cho nhiệt độ của khối khí tăng. Pit-tông này có thể dịch chuyển không ma sát trong xilanh.<br><img src='https://i.postimg.cc/Y0XCmSw9/4ds.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 83] -->",
            propositions: [
                "a) Nhiệt độ của khối khí trong xilanh thay đổi do quá trình truyền nhiệt. <!--[cite: 83] -->",
                "b) Khi nhận nhiệt, động năng của các phân tử là không đổi. <!--[cite: 83] -->",
                "c) Khi cho pit-tông chuyển động tự do để khối khí dãn nở với áp suất không đổi. Lúc này khối khí đã sinh công. <!--[cite: 83] -->",
                "d) Khi giữ pit-tông để thể tích khí không đổi thì toàn bộ nhiệt lượng khối khí nhận được dùng để tăng nội năng của khí (khối khí không tỏa nhiệt). <!--[cite: 83] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'true'}
        },

        // --- PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (6 CÂU) ---
        {
            id: 923, type: "fill_blank",
            content: "Một vật có khối lượng $2\\text{ kg}$ trượt không vận tốc đầu từ đỉnh xuống chân một mặt nghiêng dài $40\\text{ m}$, nghiêng một góc $60^\\circ$ so với phương ngang. Tốc độ của vật ở chân mặt phẳng nghiêng là $4,5\\text{ m/s}$. Cho rằng, $75\\%$ công của lực ma sát giữa mặt phẳng nghiêng và vật chuyển thành nội năng của vật, bỏ qua phần nhiệt lượng mặt phẳng nghiêng truyền cho vật. Lấy $g = 9,8\\text{ m/s}^2$. Độ biến thiên nội năng của vật trong quá trình trên là bao nhiêu kilôjun (kJ)? (Kết quả lấy đến hai chữ số sau dấu phẩy thập phân, dùng dấu chấm). <!--[cite: 83] -->",
            correctAnswer: "0.49"
        },
        {
            id: 924, type: "fill_blank",
            content: "Trong một hệ đun nước bằng năng lượng Mặt Trời, bức xạ Mặt Trời đi vào trong phần góp qua các lớp phủ trong suốt làm nóng nước trong ống. Giả thiết rằng hiệu suất của toàn bộ hệ là $20\\%$ (nghĩa là $80\\%$ năng lượng Mặt Trời bị mất khỏi hệ). Hỏi diện tích của phần góp là bao nhiêu mét vuông khi cần nâng nhiệt độ của $200\\text{ lít}$ nước trong bình chứa từ $20^\\circ\\text{C}$ đến $40^\\circ\\text{C}$ trong 1 giờ? (Kết quả lấy đến một chữ số thập phân, dùng dấu chấm). Biết khối lượng riêng của nước là $1000\\text{ kg/m}^3$; nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$; cường độ ánh sáng Mặt Trời tới là $700\\text{ W/m}^2$.<br><img src='https://i.postimg.cc/8CDgNVqL/c2-tln.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 83] -->",
            correctAnswer: "33.3"
        },
        {
            id: 925, type: "fill_blank",
            content: "Trong một bình nhiệt lượng kế có chứa $200\\text{ ml}$ nước ở nhiệt độ ban đầu $t_0 = 10^\\circ\\text{C}$. Người ta đổ một cốc $50\\text{ ml}$ nước ở nhiệt độ $60^\\circ\\text{C}$ vào bình rồi sau khi cân bằng nhiệt lại múc ra khỏi bình $50\\text{ ml}$ nước. Bỏ qua sự trao đổi nhiệt với các bình và môi trường. Hỏi sau tối thiểu bao nhiêu lượt thì nhiệt độ của nước trong bình sẽ lớn hơn $40^\\circ\\text{C}$? (Một lượt đổ gồm một lần múc nước vào và một lần múc nước ra). <!--[cite: 83] -->",
            correctAnswer: "5"
        },
        {
            id: 926, type: "fill_blank",
            content: "Biết nhiệt dung riêng của nước đá là $2100\\text{ J/kg.K}$, nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$. Để tìm nhiệt nóng chảy riêng của nước đá, người ta dùng một bếp điện để đun một hệ gồm một bình bằng đồng đựng một lượng nước đá với nhiệt độ ban đầu của hệ là $-5^\\circ\\text{C}$. Dùng nhiệt kế đo nhiệt độ của hệ, thu được bảng sau:<br><img src='https://i.postimg.cc/7hJWSBFb/4-tln.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Biết rằng từ thời điểm 0 đến $60\\text{ s}$ và $1340\\text{ s}$ đến $1540\\text{ s}$, số chỉ của nhiệt kế tăng liên tục. Coi như nhiệt lượng mà hệ nhận được tỉ lệ với thời gian đun. Nhiệt nóng chảy riêng của nước đá đo được trong thí nghiệm này là $a \\cdot 10^5\\text{ J/kg}$. Giá trị của $a$ bằng bao nhiêu? (Dùng dấu chấm thập phân) <!--[cite: 83] -->",
            correctAnswer: "3.36"
        },
        {
            id: 927, type: "fill_blank",
            content: "Sự biến thiên nhiệt độ của khối nước đá đựng trong ca nhôm theo nhiệt lượng cung cấp được cho trên đồ thị. Cho nhiệt dung riêng của nước và nhôm lần lượt là $c_1 = 4200\\text{ J/kg.K}$; $c_2 = 880\\text{ J/kg.K}$, nhiệt nóng chảy riêng của nước đá là $\\lambda = 3,4 \\cdot 10^5\\text{ J/kg}$. Khối lượng của ca nhôm bằng bao nhiêu gam? (Kết quả làm tròn đến hàng đơn vị).<br><img src='https://i.postimg.cc/RhfzvVVP/5-tln.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 83] -->",
            correctAnswer: "455"
        },
        {
            id: 928, type: "fill_blank",
            content: "Hiện nay, người ta có thể dùng các vỉ đá được làm nóng sẵn trong lò để nướng thức ăn. Giả sử, một vỉ đá có khối lượng $1,2\\text{ kg}$; nhiệt độ ban đầu là $28^\\circ\\text{C}$ được làm nóng trong lò có công suất $20\\text{ kW}$. Coi như toàn bộ năng lượng của lò cung cấp sẽ dùng để làm nóng vỉ đá. Biết rằng, để làm cho $1\\text{ kg}$ đá làm vỉ này tăng thêm $1^\\circ\\text{C}$ thì cần nhiệt lượng $5500\\text{ J}$. Để vỉ đá đạt được nhiệt độ $1000^\\circ\\text{C}$ thì cần thời gian bao nhiêu phút? (Kết quả lấy đến hai chữ số sau dấu phẩy thập phân, dùng dấu chấm). <!--[cite: 83] -->",
            correctAnswer: "5.35"
        }
    ],
    "hsa_toan_01": [
        {
            id: 1001, type: "multiple_choice",
            content: "Một chiếc cổng hình parabol có phương trình $y=-3x^2$ và có chiều rộng $d=8\\text{ m}$. Hãy tính chiều cao $h$ của chiếc cổng. <!-- -->",
            options: ["A. $h=45\\text{ m}$.", "B. $h=48\\text{ m}$.", "C. $h=50\\text{ m}$.", "D. $h=40\\text{ m}$."],
            correctAnswer: "B"
        },
        {
            id: 1002, type: "fill_blank",
            content: "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ.<br><img src='https://i.postimg.cc/J4cxxXzn/C2.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Hàm số $g(x)=f\\left(\\frac{2x+3}{x+1}\\right)$ có bao nhiêu điểm cực trị? <!--[cite: 84] -->",
            correctAnswer: "1"
        },
        {
            id: 1003, type: "multiple_choice",
            content: "Cho hàm số $f(x)=\\log_2(x^2+1)$. Tính $f'(1)$. <!--[cite: 85] -->",
            options: ["A. $f'(1)=\\frac{1}{2\\ln 2}$.", "B. $f'(1)=\\frac{1}{\\ln 2}$.", "C. $f'(1)=\\frac{1}{2}$.", "D. $f'(1)=1$."],
            correctAnswer: "B"
        },
        {
            id: 1004, type: "multiple_choice",
            content: "Họ nguyên hàm của hàm số $f(x)=e^{2x}$ là <!--[cite: 85] -->",
            options: ["A. $\\frac{1}{2}e^x+C$.", "B. $\\frac{1}{2}e^{2x}+C$.", "C. $2e^{2x}+C$.", "D. $2e^x+C$."],
            correctAnswer: "B"
        },
        {
            id: 1005, type: "multiple_choice",
            content: "Cho hình chóp tứ giác $S.ABCD$ có tất cả các cạnh đều bằng $a$. Khoảng cách từ $D$ đến đường thẳng $SB$ bằng <!--[cite: 85] -->",
            options: ["A. $a$.", "B. $\\frac{a}{2}$.", "C. $\\frac{a}{3}$.", "D. $\\frac{a\\sqrt{3}}{2}$."],
            correctAnswer: "A"
        },
        {
            id: 1006, type: "multiple_choice",
            content: "Trong các mệnh đề sau, mệnh đề nào sai? <!--[cite: 85, 86] -->",
            options: [
                "A. Hai đường thẳng cùng vuông góc với một mặt phẳng thì song song.",
                "B. Hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì song song.",
                "C. Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thì song song.",
                "D. Hai mặt phẳng phân biệt cùng vuông góc với một mặt phẳng thì song song."
            ],
            correctAnswer: "C"
        },
        {
            id: 1007, type: "multiple_choice",
            content: "Trong không gian $Oxyz$, điểm $A(1;2;3)$ thuộc mặt phẳng có phương trình nào dưới đây? <!--[cite: 86] -->",
            options: ["A. $x-2y+z=0$.", "B. $x+2y+3z=0$.", "C. $x-2y+3z=0$.", "D. $x+2y+3z=1$."],
            correctAnswer: "A"
        },
        {
            id: 1008, type: "multiple_choice",
            content: "Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của $AB$. Cắt tứ diện $ABCD$ bởi mặt phẳng đi qua $M$ và song song với $BC$ và $AD$, thiết diện thu được là hình gì? <!--[cite: 86] -->",
            options: ["A. Tam giác đều.", "B. Tam giác vuông.", "C. Hình bình hành.", "D. Ngũ giác."],
            correctAnswer: "C"
        },
        {
            id: 1009, type: "multiple_choice",
            content: "Cấp số cộng $(u_n)$ có số hạng đầu $u_1=1$ và công sai $d=2$. Công thức số hạng tổng quát của dãy số $(u_n)$ là <!-- -->",
            options: ["A. $u_n=2n-3$.", "B. $u_n=2n+1$.", "C. $u_n=2n-1$.", "D. $u_n=2n+3$."],
            correctAnswer: "C"
        },
        {
            id: 1010, type: "multiple_choice",
            content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, cạnh $a$. Đường thẳng $SO$ vuông góc với mặt phẳng đáy và $SO=\\frac{a\\sqrt{3}}{2}$. Tính góc giữa $(SCD)$ và $(ABCD)$. <!--[cite: 87] -->",
            options: ["A. $90^\\circ$.", "B. $45^\\circ$.", "C. $60^\\circ$.", "D. $30^\\circ$."],
            correctAnswer: "C"
        },
        {
            id: 1011, type: "fill_blank",
            content: "Hình phẳng $(H)$ được giới hạn bởi đồ thị $(C)$ của hàm số đa thức bậc ba và parabol $(P)$ có trục đối xứng vuông góc với trục hoành. Phần tô đậm như hình vẽ có diện tích bằng $\\frac{a}{b}$ ($a, b \\in \\mathbb{Z}; (a,b)=1$). Giá trị của biểu thức $a-3b$ bằng bao nhiêu?<br><img src='https://i.postimg.cc/pdyBP1Yr/C11.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 87, 88] -->",
            correctAnswer: "1"
        },
        {
            id: 1012, type: "multiple_choice",
            content: "Trong năm đầu tiên đi làm, anh A được nhận lương là 10 triệu đồng mỗi tháng. Cứ hết một năm, anh A lại được tăng lương, mỗi tháng năm sau tăng 12% so với mỗi tháng năm trước. Mỗi khi lĩnh lương anh A đều cất đi phần lương tăng so với năm ngay trước để tiết kiệm mua ô tô. Hỏi sau ít nhất bao nhiêu năm thì anh A mua được ô tô giá 500 triệu biết rằng anh A được gia đình hỗ trợ 32% giá trị chiếc xe? <!--[cite: 88, 89] -->",
            options: ["A. 11 năm.", "B. 12 năm.", "C. 13 năm.", "D. 10 năm."],
            correctAnswer: "C"
        },
        {
            id: 1013, type: "multiple_choice",
            content: "Trong một buổi giao lưu, có 7 học sinh trường A và 7 học sinh trường B ngồi vào 2 bàn dài đối diện nhau. Hỏi có bao nhiêu cách xếp sao cho 2 người ngồi đối diện và ngồi cạnh nhau thì không cùng trường? <!-- -->",
            options: ["A. $2 \\cdot 7!$.", "B. $2 \\cdot 7!7!$.", "C. $7!7!$.", "D. $7!$."],
            correctAnswer: "B"
        },
        {
            id: 1014, type: "fill_blank",
            content: "Cho hàm số $y=f(x)$. Hàm số $y=f'(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ. Biết $f(-1)=\\frac{13}{4}, f(2)=6$. Giá trị nhỏ nhất của hàm số $g(x)=f^3(x)-3f(x)$ trên đoạn $[-1;2]$ bằng bao nhiêu? (Nhập kết quả dưới dạng phân số tối giản a/b)<br><img src='https://i.postimg.cc/GtnPJ30y/C14.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 89, 90] -->",
            correctAnswer: "1573/64"
        },
        {
            id: 1015, type: "multiple_choice",
            content: "Số sản phẩm một công nhân làm được trong một ngày được cho như sau:<br>18, 25, 39, 12, 54, 27, 46, 25, 19, 8, 36, 22, 20, 19, 17, 44, 5, 18, 23, 28, 25, 34, 46, 27, 16.<br>Hãy chuyển mẫu số liệu sang dạng ghép nhóm với sáu nhóm có độ dài bằng nhau: $[1;10), [10;19), [19;28), [28;37), [37;46), [46;55)$. Sau đó tính mốt của mẫu số liệu ghép nhóm trên. <!--[cite: 90, 91] -->",
            options: ["A. 24.", "B. 22,75.", "C. 19.", "D. 23,5."],
            correctAnswer: "B"
        },
        {
            id: 1016, type: "multiple_choice",
            content: "Một thư viện có 9 quyển sách Văn học, 10 quyển sách Khoa học tự nhiên và 12 quyển sách Kinh tế học, các quyển sách đôi một khác nhau. Có 10 học sinh muốn mượn mỗi bạn 1 quyển sách. Hỏi nếu thư viện yêu cầu sau khi họ mượn xong mỗi thể loại còn ít nhất 1 quyển thì họ có bao nhiêu cách mượn sách? <!--[cite: 91] -->",
            options: [
                "A. $A_{31}^{10}-9!-10!-12!$.",
                "B. $22 \\cdot 9!+10!+A_{12}^{10}$.",
                "C. $A_{31}^{10}-22 \\cdot 9!-10!$.",
                "D. $A_{31}^{10}-9!-22 \\cdot 10!$."
            ],
            correctAnswer: "C"
        },
        {
            id: 1017, type: "fill_blank",
            content: "Cho tam giác vuông $ABC$ vuông tại $A$ có tích độ dài hai cạnh góc vuông bằng 15. Khi chu vi tam giác $ABC$ nhỏ nhất thì độ dài cạnh $BC$ bằng bao nhiêu? (Làm tròn đến chữ số thập phân thứ nhất, dùng dấu chấm) <!--[cite: 91, 92] -->",
            correctAnswer: "5.5"
        },
        {
            id: 1018, type: "multiple_choice",
            content: "Biểu đồ bên dưới thể hiện giá trị sản phẩm trung bình thu được trên một hecta đất trồng cao su và đất trồng cà phê của cả nước từ năm 2018 đến năm 2022 (đơn vị: triệu đồng).<br><img src='https://i.postimg.cc/dQGjQCd7/C18.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Phát biểu nào sau đây là sai? <!--[cite: 92, 93] -->",
            options: [
                "A. Giá trị sản phẩm trung bình thu được trên một hecta đất trồng cà phê cao hơn trên một hecta đất trồng cao su.",
                "B. Giá trị sản phẩm thu được trên cả đất trồng cao su và đất trồng cà phê đều có xu hướng tăng từ năm 2018 đến năm 2022.",
                "C. Tổng giá trị sản phẩm trung bình thu được trên một hecta đất trồng cà phê cao gấp khoảng 1,1 lần trên một hecta đất trồng cao su.",
                "D. Giá trị sản phẩm thu được trên đất trồng cao su từ năm 2020 đến năm 2022 không tăng nhanh bằng từ năm 2018 đến năm 2020."
            ],
            correctAnswer: "C"
        },
        {
            id: 1019, type: "multiple_choice",
            content: "Cho tam giác $ABC$ thỏa mãn điều kiện $\\sin B = 2\\sin C \\cdot \\cos A$. Mệnh đề nào sau đây đúng? <!-- -->",
            options: [
                "A. Tam giác $ABC$ vuông tại $A$.",
                "B. Tam giác $ABC$ vuông tại $B$.",
                "C. Tam giác $ABC$ cân tại $A$.",
                "D. Tam giác $ABC$ cân tại $B$."
            ],
            correctAnswer: "D"
        },
        {
            id: 1020, type: "multiple_choice",
            content: "Giá trị của tổng $P=C_4^0-2C_4^1+4C_4^2-8C_4^3+16C_4^4$ là <!--[cite: 93] -->",
            options: ["A. 1.", "B. -1.", "C. 81.", "D. 0."],
            correctAnswer: "A"
        },
        {
            id: 1021, type: "multiple_choice",
            content: "Cho hàm số $y=ax^3+bx^2+cx+d$ ($a,b,c,d \\in \\mathbb{R}$) có đồ thị là đường cong trong hình bên. Có bao nhiêu số dương trong các số $a,b,c,d$?<br><img src='https://i.postimg.cc/QxskFMJC/C21.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 93, 94] -->",
            options: ["A. 1.", "B. 3.", "C. 2.", "D. 4."],
            correctAnswer: "A"
        },
        {
            id: 1022, type: "multiple_choice",
            content: "Một hộp đựng 10 chiếc thẻ được đánh số từ 0 đến 9. Lấy ngẫu nhiên ra 3 chiếc thẻ, tính xác suất để 3 chữ số trên 3 chiếc thẻ được lấy ra có thể ghép thành một số chia hết cho 5. <!--[cite: 94] -->",
            options: ["A. $\\frac{2}{5}$.", "B. $\\frac{3}{5}$.", "C. $\\frac{8}{15}$.", "D. $\\frac{7}{15}$."],
            correctAnswer: "C"
        },
        {
            id: 1023, type: "multiple_choice",
            content: "Cho $\\Delta ABC$ có $AB=4, AC=7, \\widehat{A}=55^\\circ$. Độ lớn của góc $B$ gần nhất với số nào sau đây? <!--[cite: 94, 95] -->",
            options: ["A. $70,6^\\circ$.", "B. $64,31^\\circ$.", "C. $55^\\circ$.", "D. $90,15^\\circ$."],
            correctAnswer: "D"
        },
        {
            id: 1024, type: "multiple_choice",
            content: "Một chất điểm A xuất phát từ O, chuyển động thẳng với vận tốc biến thiên theo thời gian bởi quy luật $v(t)=\\frac{1}{150}t^2+\\frac{59}{75}t\\text{ (m/s)}$, trong đó $t$ là khoảng thời gian tính từ lúc A bắt đầu chuyển động. Từ trạng thái nghỉ, một chất điểm B cũng xuất phát từ O, chuyển động thẳng cùng hướng với A nhưng chậm hơn 3 giây so với A và có gia tốc bằng $a\\text{ (m/s}^2\\text{)}$ ($a$ là hằng số). Sau khi B xuất phát được 12 giây thì đuổi kịp A. Vận tốc của B tại thời điểm đuổi kịp A bằng: <!--[cite: 95] -->",
            options: ["A. $20\\text{ (m/s)}$.", "B. $16\\text{ (m/s)}$.", "C. $13\\text{ (m/s)}$.", "D. $15\\text{ (m/s)}$."],
            correctAnswer: "B"
        },
        {
            id: 1025, type: "multiple_choice",
            content: "Cho hình thang $ABCD$ vuông tại $A$ và $D$ có $AB=6a, AD=CD=\\frac{1}{2}AB$, $M$ thuộc cạnh $AD$ sao cho $AM=\\frac{1}{3}AD$. Tính $T=(\\overrightarrow{MB}+2\\overrightarrow{MC})\\cdot(\\overrightarrow{CD}-\\overrightarrow{BD})$. <!--[cite: 95, 96] -->",
            options: ["A. $T=27a$.", "B. $T=\\frac{1}{27}a$.", "C. $T=27a^2$.", "D. $T=\\frac{1}{27}a^2$."],
            correctAnswer: "C"
        },
        {
            id: 1026, type: "multiple_choice",
            content: "Xác định các giá trị của tham số $m$ để hàm số $y=x^3-3mx^2-m$ nghịch biến trên khoảng $(0;1)$? <!--[cite: 96] -->",
            options: ["A. $m \\ge 0$.", "B. $m < \\frac{1}{2}$.", "C. $m \\le 0$.", "D. $m \\ge \\frac{1}{2}$."],
            correctAnswer: "D"
        },
        {
            id: 1027, type: "fill_blank",
            content: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $a$. Lấy điểm $M$ thuộc đoạn $AD'$, điểm $N$ thuộc đoạn $BD$ sao cho $AM=DN=x$ ($0 < x < \\frac{a\\sqrt{2}}{2}$). Khi độ dài đoạn $MN$ đạt giá trị nhỏ nhất thì $x=ka$. Giá trị của biểu thức $T=9k^2+1$ bằng bao nhiêu? <!--[cite: 96, 97] -->",
            correctAnswer: "3"
        },
        {
            id: 1028, type: "fill_blank",
            content: "Gọi $S_n$ là tổng $n$ số hạng đầu tiên trong cấp số cộng $(a_n)$ với $a_1 \\neq 0$. Biết $S_8=S_{11}$, tỉ số $\\frac{a_4}{a_6}$ bằng bao nhiêu? (Nhập kết quả dưới dạng phân số tối giản a/b) <!--[cite: 97] -->",
            correctAnswer: "3/2"
        },
        {
            id: 1029, type: "multiple_choice",
            content: "Cho hàm số $f(x)$ là hàm đa thức bậc 3 và có đồ thị như hình vẽ.<br><img src='https://i.postimg.cc/bwVQV9X5/C29.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Xét hàm số $g(x)=f(2x^3+x-1)+m$. Với giá trị nào của $m$ thì giá trị nhỏ nhất của $g(x)$ trên đoạn $[0;1]$ bằng $-20$? <!-- -->",
            options: ["A. -19.", "B. 2.", "C. -21.", "D. 11."],
            correctAnswer: "A"
        },
        {
            id: 1030, type: "multiple_choice",
            content: "Tất cả các giá trị thực của tham số $m$ để hàm số $y=-x^3-6x^2+(4m-9)x+4$ nghịch biến trên khoảng $(-\\infty;-1)$ là <!--[cite: 98, 99] -->",
            options: ["A. $(-\\infty;-\\frac{3}{4}]$.", "B. $[-\\frac{3}{4};+\\infty)$.", "C. $[0;+\\infty)$.", "D. $(-\\infty;0]$."],
            correctAnswer: "A"
        },
        {
            id: 1031, type: "multiple_choice",
            content: "Đường tròn $x^2+y^2-1=0$ tiếp xúc đường thẳng nào trong các đường thẳng dưới đây? <!--[cite: 99] -->",
            options: ["A. $x+y=0$.", "B. $3x+4y-1=0$.", "C. $3x-4y+5=0$.", "D. $x+y-1=0$."],
            correctAnswer: "C"
        },
        {
            id: 1032, type: "multiple_choice",
            content: "Phương trình $\\sqrt{x-2}+\\sqrt{4-x}=x^2-6x+11$ có bao nhiêu nghiệm nguyên? <!--[cite: 99] -->",
            options: ["A. 3.", "B. 2.", "C. 1.", "D. 0."],
            correctAnswer: "C"
        },
        {
            id: 1033, type: "fill_blank",
            content: "Cho hàm số $f(x)$ có đạo hàm $f'(x)=-x^{2027}(x+1)^{2028}(2x+7)^{2029}, \\forall x \\in \\mathbb{R}$. Số điểm cực trị của hàm số đã cho là <!--[cite: 100] -->",
            correctAnswer: "2"
        },
        {
            id: 1034, type: "multiple_choice",
            content: "Một cơ sở in ấn mua máy in với giá 100 triệu đồng. Trong 5 năm tiếp theo, mỗi năm giá trị máy in giảm 5% so với năm trước và từ năm thứ 6 trở đi, mỗi năm giá trị máy in giảm 10% so với năm trước. Sau 10 năm kể từ khi mua máy in, cơ sở đã thanh lí máy in bằng với giá trị của máy. Cơ sở in ấn đã thanh lí máy in với giá bao nhiêu? (Lấy kết quả gần nhất) <!--[cite: 100] -->",
            options: ["A. 50,2 triệu đồng.", "B. 46,9 triệu đồng.", "C. 49,5 triệu đồng.", "D. 45,7 triệu đồng."],
            correctAnswer: "D"
        },
        {
            id: 1035, type: "multiple_choice",
            content: "Số nghiệm phương trình $\\sin x \\cos\\left(2x+\\frac{\\pi}{6}\\right)-\\frac{1}{2}\\sin 2x=0$ trong khoảng $(0;\\pi]$ là <!--[cite: 100, 101] -->",
            options: ["A. 4.", "B. 1.", "C. 2.", "D. 3."],
            correctAnswer: "C"
        },
        {
            id: 1036, type: "multiple_choice",
            content: "Cho hàm số $y=x^3+\\frac{3}{2}(m+1)x^2+3(m+1)x+2022$. Tìm điều kiện của $m$ để hàm số không có cực trị? <!--[cite: 101] -->",
            options: ["A. $m < -1$ hoặc $m > 3$.", "B. $m \\le -1$ hoặc $m \\ge 3$.", "C. $m \\in (-1;3)$.", "D. $m \\in [-1;3]$."],
            correctAnswer: "D"
        },
        {
            id: 1037, type: "fill_blank",
            content: "Một khu rừng có trữ lượng gỗ là $8 \\cdot 10^6\\text{ (m}^3\\text{)}$. Giả sử tốc độ sinh trưởng của các cây ở khu rừng đó không đổi và bằng $3,05\\%$ mỗi năm và lượng gỗ thu được sau $n$ năm xác định bởi công thức $S_n=Ae^{nr}$ với $A$ là trữ lượng gỗ ban đầu, $r$ là tốc độ sinh trưởng của các cây trong khu rừng sau một năm. Sau 20 năm, khu rừng đó sẽ có trữ lượng gỗ là bao nhiêu triệu $\\text{m}^3$? Coi như rừng cây không bị khai thác và kết quả làm tròn đến hàng đơn vị. <!--[cite: 101] -->",
            correctAnswer: "15"
        },
        {
            id: 1038, type: "fill_blank",
            content: "Mái của một căn nhà nghiêng đều một góc $\\alpha$ so với mặt đất được minh họa như hình vẽ. Biết rằng nếu đặt trong không gian $Oxyz$ thì mặt đất nằm tương ứng với mặt phẳng $(Oxy)$, đoạn $AB$ là một cạnh của mái nhà với $A(2;-4;3)$ và $B(-3;1;4)$. Góc $\\alpha$ bằng bao nhiêu độ? (Kết quả làm tròn đến hàng đơn vị)<br><img src='https://i.postimg.cc/LXLLXdqP/C38.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><!-- -->",
            correctAnswer: "8"
        },
        {
            id: 1039, type: "fill_blank",
            content: "Gọi $S$ là tập nghiệm của phương trình $(2^{x^2-x}-4)\\sqrt{2-\\log_2 x}=0$. Số phần tử của $S$ là <!--[cite: 102] -->",
            correctAnswer: "2"
        },
        {
            id: 1040, type: "multiple_choice",
            content: "Cho hình chóp $S.ABCD$ đáy $ABCD$ là hình vuông cạnh bằng $a$; cạnh bên $SA$ vuông góc với đáy, góc giữa $SC$ và đáy bằng $45^\\circ$. Khoảng cách giữa hai đường thẳng $SC$ và $BD$ bằng? <!--[cite: 102, 103] -->",
            options: ["A. $\\frac{a}{2}$.", "B. $\\frac{3a}{2}$.", "C. $a$.", "D. $2a$."],
            correctAnswer: "A"
        },
        {
            id: 1041, type: "multiple_choice",
            content: "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$, góc giữa mặt bên và mặt đáy bằng $60^\\circ$. Tính diện tích xung quanh của hình nón đỉnh $S$, đáy là hình tròn ngoại tiếp tam giác $ABC$. <!--[cite: 103] -->",
            options: [
                "A. $\\frac{\\pi a^2\\sqrt{3}}{3}$.",
                "B. $\\frac{\\pi a^2\\sqrt{7}}{6}$.",
                "C. $\\frac{\\pi a^2\\sqrt{7}}{4}$.",
                "D. $\\frac{\\pi a^2\\sqrt{10}}{8}$."
            ],
            correctAnswer: "B"
        },
        {
            id: 1042, type: "fill_blank",
            content: "Từ các số $7, 8, 9$ lập được bao nhiêu số tự nhiên gồm 6 chữ số thỏa mãn đồng thời hai điều kiện sau: Mỗi chữ số xuất hiện đúng hai lần và hai chữ số giống nhau không đứng cạnh nhau? <!-- -->",
            correctAnswer: "76"
        },
        {
            id: 1043, type: "fill_blank",
            content: "Cho hàm số $y=f(x)$ có đồ thị hàm số $y=f'(x)$ trên đoạn $[-1;3]$ như hình vẽ sau:<br><img src='https://i.postimg.cc/5NxLxRfd/C43.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Giá trị của biểu thức $f(3)-f(-1)$ là <!--[cite: 104, 105] -->",
            correctAnswer: "6"
        },
        {
            id: 1044, type: "multiple_choice",
            content: "Trong không gian $Oxyz$, cho điểm $I(2;-3;1)$ và mặt phẳng $(P): 2x-y+2z-3=0$. Mặt cầu tâm $I$ và tiếp xúc với $(P)$ có phương trình là <!--[cite: 105] -->",
            options: [
                "A. $(x-2)^2+(y+3)^2+(z-1)^2=9$.",
                "B. $(x-2)^2+(y+3)^2+(z-1)^2=3$.",
                "C. $(x+2)^2+(y-3)^2+(z+1)^2=9$.",
                "D. $(x+2)^2+(y-3)^2+(z+1)^2=3$."
            ],
            correctAnswer: "A"
        },
        {
            id: 1045, type: "fill_blank",
            content: "Kết quả khảo sát 100 khán giả trường quay và cho điểm tiết mục biểu diễn X theo thang điểm 100 được thống kê dưới bảng sau đây:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Số điểm</th><td class='border border-gray-300 p-2'>[50;60)</td><td class='border border-gray-300 p-2'>[60;70)</td><td class='border border-gray-300 p-2'>[70;80)</td><td class='border border-gray-300 p-2'>[80;90)</td><td class='border border-gray-300 p-2'>[90;100)</td></tr><tr><th class='border border-gray-300 p-2'>Số người</th><td class='border border-gray-300 p-2'>3</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>32</td><td class='border border-gray-300 p-2'>18</td><td class='border border-gray-300 p-2'>22</td></tr></table><br>Phương sai của mẫu số liệu ghép nhóm trên bằng bao nhiêu? (làm tròn đến hàng đơn vị) <!--[cite: 105] -->",
            correctAnswer: "133"
        },
        {
            id: 1046, type: "fill_blank",
            content: "Trong không gian $Oxyz$, cho ba điểm $A(1;-2;1), B(0;3;3), C(2;-1;5)$ và điểm $M$ thuộc mặt phẳng $(\\alpha): x+2y+2z+1=0$. Biểu thức $P=|2\\overrightarrow{MA}+5\\overrightarrow{MB}-\\overrightarrow{MC}|$ đạt giá trị nhỏ nhất bằng bao nhiêu? <!--[cite: 106] -->",
            correctAnswer: "18"
        },
        {
            id: 1047, type: "fill_blank",
            content: "Hình phẳng giới hạn bởi các đường $y=4+2x-x^2, y=x^2, x=-1, x=2$ có diện tích là bao nhiêu? <!--[cite: 106] -->",
            correctAnswer: "9"
        },
        {
            id: 1048, type: "multiple_choice",
            content: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC), AB \\perp BC, SA=AB=a, AC=a\\sqrt{3}$.<br><img src='https://i.postimg.cc/Z5nNNv9V/C48.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$ là góc <!-- -->",
            options: ["A. $\\widehat{CSA}$.", "B. $\\widehat{SCA}$.", "C. $\\widehat{CSB}$.", "D. $\\widehat{SCB}$."],
            correctAnswer: "C"
        },
        {
            id: 1049, type: "multiple_choice",
            content: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC), AB \\perp BC, SA=AB=a, AC=a\\sqrt{3}$. Giá trị $\\tan \\widehat{CSB}$ bằng bao nhiêu? <!--[cite: 107] -->",
            options: ["A. 0.", "B. $\\sqrt{3}$.", "C. $\\frac{\\sqrt{3}}{3}$.", "D. 1."],
            correctAnswer: "D"
        },
        {
            id: 1050, type: "multiple_choice",
            content: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC), AB \\perp BC, SA=AB=a, AC=a\\sqrt{3}$. Góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$ bằng <!--[cite: 107] -->",
            options: ["A. $30^\\circ$.", "B. $45^\\circ$.", "C. $60^\\circ$.", "D. $90^\\circ$."],
            correctAnswer: "B"
        }
    ],
    "hsa_van_01": [
        // --- CÂU 1 - 5: ĐỌC HIỂU VĂN BẢN 1 ---
        {
            id: 271810, type: "multiple_choice",
            content: "<b>Đọc đoạn trích sau và trả lời các câu hỏi từ 1 đến 5:</b><br><i>“Một người tù cổ đeo gông, chân vướng xiềng, đang dậm tô nét chữ trên tấm lụa trắng tinh căng phẳng trên mảnh ván. Người tù viết xong một chữ, viên quản ngục lại vội khúm núm cất những đồng tiền kẽm đánh dấu ô chữ đặt trên phiến lụa óng. Và cái thầy thơ lại gầy gò, thì run run bưng chậu mực. Thay bút con, đề xong lạc khoản, ông Huấn Cao thở dài, buồn bã đỡ viên quản ngục đứng thẳng người dậy và đĩnh đạc bảo:<br>- Ở đây lẫn lộn. Ta khuyên thầy Quản nên thay chốn ở đi. Chỗ này không phải là nơi để treo một bức lụa trắng trẻo với những nét chữ vuông vắn tươi tắn nó nói lên những cái hoài bão tung hoành của một đời con người. Thoi mực, thầy mua ở đâu tốt và thơm quá. Thầy có thấy mùi thơm ở chậu mực bốc lên không?... Tôi bảo thực đấy: thầy Quản nên tìm về nhà quê mà ở đã, thầy hãy thoát khỏi cái nghề này đi đã, rồi hãy nghĩ đến chuyện chơi chữ. Ở đây, khó giữ <u><b>thiên lương</b></u> cho lành vững và rồi cũng đến nhem nhuốc mất cái đời lương thiện đi.”</i><br>(Nguyễn Tuân, <i>Chữ người tử tù</i>)<br><br><b>Câu 1:</b> Xét trong văn bản, từ nào sau đây được sử dụng với nghĩa chuyển?",
            options: ["A. Khúm núm.", "B. Đĩnh đạc.", "C. Buồn bã.", "D. Nhem nhuốc."],
            correctAnswer: "D"
        },
        {
            id: 271811, type: "multiple_choice",
            content: "<b>Câu 2:</b> Dòng nào sau đây giải thích đúng nghĩa của từ <u><b>thiên lương</b></u> (gạch chân, in đậm) trong đoạn trích ở Câu 1?",
            options: [
                "A. Sự tốt bụng của con người được hình thành trong quá trình sống.",
                "B. Lòng yêu và ham thích cái đẹp, cái cao quý của con người.",
                "C. Bản tính tốt đẹp của con người do trời phú mà có được.",
                "D. Đức tính hi sinh và sự nhẫn nhịn của con người trong cuộc sống."
            ],
            correctAnswer: "C"
        },
        {
            id: 271813, type: "multiple_choice",
            content: "<b>Câu 3:</b> Trong đoạn văn ở Câu 1, tác giả đã miêu tả nhân vật Huấn Cao gắn liền với",
            options: ["A. khí phách hiên ngang.", "B. tinh thần bất khuất.", "C. nhân cách cao đẹp.", "D. tài năng siêu việt."],
            correctAnswer: "C"
        },
        {
            id: 271812, type: "multiple_choice",
            content: "<b>Câu 4:</b> Bối cảnh giao tiếp hẹp xuất hiện trong văn bản ở Câu 1 là",
            options: [
                "A. nơi cung cấp nhiều quan lại nhũng nhiễu.",
                "B. nơi pháp trường khi kẻ tử tù vừa bị hành hình.",
                "C. đêm cuối cùng của kẻ tử tù ở trong nhà ngục.",
                "D. ngày đầu tiên của kẻ tử tù khi chuyển nhà ngục mới."
            ],
            correctAnswer: "C"
        },
        {
            id: 271814, type: "multiple_choice",
            content: "<b>Câu 5:</b> Dòng nào sau đây nói KHÔNG đúng về đặc sắc nghệ thuật trong đoạn văn ở Câu 1?",
            options: ["A. Thủ pháp nhân hóa.", "B. Nghệ thuật tương phản.", "C. Bút pháp lãng mạn.", "D. Nghệ thuật miêu tả."],
            correctAnswer: "A"
        },

        // --- CÂU 6 - 10: ĐỌC HIỂU VĂN BẢN 2 ---
        {
            id: 271815, type: "multiple_choice",
            content: "<b>Đọc đoạn trích sau và trả lời các câu hỏi từ 6 đến 10:</b><br><i>“Gió theo lối gió, mây đường mây,<br>Dòng nước buồn thiu, hoa bắp lay...<br>Thuyền ai đậu bến <u><b>sông Trăng</b></u> đó,<br>Có chở trăng về kịp tối nay?<br><br>Mơ khách đường xa, khách đường xa<br>Áo em trắng quá nhìn không ra...<br>Ở đây sương khói mờ nhân ảnh<br>Ai biết tình ai có đậm đà?”</i><br>(Hàn Mặc Tử, <i>Đây thôn Vĩ Dạ</i>, Ngữ văn 11, tập hai, NXB Giáo dục Việt Nam, 2017)<br><br><b>Câu 6:</b> Phương thức biểu đạt chính được sử dụng trong văn bản là",
            options: ["A. tự sự.", "B. biểu cảm.", "C. nghị luận.", "D. thuyết minh."],
            correctAnswer: "B"
        },
        {
            id: 271817, type: "multiple_choice",
            content: "<b>Câu 7:</b> Đâu là cách hiểu đúng của câu thơ: <i>“Gió theo lối gió, mây đường mây”</i>?",
            options: [
                "A. Thiên nhiên liên tục vận động theo quy luật của vũ trụ.",
                "B. Thiên nhiên quấn quýt, gắn bó không thể tách rời.",
                "C. Hình ảnh thiên nhiên gắn với sự tan tác, chia lìa.",
                "D. Sự thanh nhã, lãng mạn của đời sống thiên nhiên."
            ],
            correctAnswer: "C"
        },
        {
            id: 271818, type: "multiple_choice",
            content: "<b>Câu 8:</b> Từ <u><b>sông Trăng</b></u> (gạch chân, in đậm) trong đoạn trích ở Câu 6, được hiểu là",
            options: [
                "A. dòng sông được người dân đặt tên là “Trăng” vì vẻ đẹp thuần khiết.",
                "B. con sông ở tỉnh Sóc Trăng – nơi tác giả sinh sống và chữa bệnh.",
                "C. ánh sáng của mặt trăng chiếu xuống dòng sông vô cùng lấp lánh.",
                "D. tác giả thấy mặt trăng xuất hiện nhiều như thể có cả một dòng sông."
            ],
            correctAnswer: "C"
        },
        {
            id: 271816, type: "multiple_choice",
            content: "<b>Câu 9:</b> Việc sử dụng đại từ “ai” trong đoạn thơ ở Câu 6 có ý nghĩa:",
            options: ["A. thể hiện sự mơ hồ.", "B. thể hiện sự hoài nghi.", "C. thể hiện sự chán nản.", "D. thể hiện sự lãng quên."],
            correctAnswer: "A"
        },
        {
            id: 271819, type: "multiple_choice",
            content: "<b>Câu 10:</b> Biện pháp tu từ nào được sử dụng trong câu thơ <i>“Mơ khách đường xa, khách đường xa”</i>?",
            options: ["A. Điệp từ.", "B. Điệp ngữ.", "C. Nhân hóa.", "D. Hoán dụ."],
            correctAnswer: "B"
        },

        // --- CÂU 11 - 15: ĐỌC HIỂU VĂN BẢN 3 ---
        {
            id: 271820, type: "multiple_choice",
            content: "<b>Đọc đoạn trích sau và trả lời các câu hỏi từ 11 đến 15:</b><br>(1) <i>“Văn hóa ứng xử từ lâu đã trở thành chuẩn mực trong việc đánh giá nhân cách con người. Cảm ơn là một trong các biểu hiện của ứng xử có văn hóa. Ở ta, từ cảm ơn được nghe rất nhiều trong các cuộc họp: cảm ơn sự có mặt của quý vị đại biểu, cảm ơn sự chú ý của mọi người... Nhưng đó chỉ là những lời khô cứng, ít cảm xúc. Chỉ có lời cảm ơn <u><b>chân thành</b></u>, xuất phát từ đáy lòng, từ sự tôn trọng nhau bất kể trên dưới mới thực sự là điều cần có cho một xã hội văn minh. Người ta có thể cảm ơn vì những chuyện rất nhỏ như được nhường vào cửa trước, được chỉ đường khi hỏi... Ấy là chưa kể đến những chuyện lớn lao như cảm ơn người đã cứu mạng mình, người đã chìa tay giúp đỡ mình trong cơn hoạn nạn... Những lúc đó, lời cảm ơn còn có nghĩa là đội ơn.</i><br>(2) <i>Còn một từ nữa cũng thông dụng không kém ở các xứ sở văn minh là \"Xin lỗi\". Ở những nơi công cộng, người ta hết sức tránh chen lấn, va chạm nhau. Nếu có ai đó vô ý khẽ chạm vào người khác, lập tức từ xin lỗi được bật ra hết sức tự nhiên. Từ xin lỗi còn được dùng cả khi không có lỗi. Xin lỗi khi xin phép nhường đường, xin lỗi trước khi dừng ai đó lại hỏi đường hay nhờ bấm hộ một kiểu ảnh. Tóm lại, khi biết mình có thể làm phiền đến người khác dù rất nhỏ, người ta cũng đều xin lỗi. Hiển nhiên, xin lỗi còn được thốt ra trong những lúc người nói cảm thấy mình thực sự có lỗi. Từ xin lỗi ở đây đi kèm với một tâm trạng hối lỗi, mong được tha thứ hơn là một cử chỉ văn minh thông thường. Đôi khi, lời xin lỗi được nói ra đúng nơi, đúng lúc còn có thể xóa bỏ biết bao mặc cảm, thù hận, đau khổ... Người có lỗi mà không biết nhận lỗi là có lỗi lớn nhất. Xem ra sức mạnh của từ xin lỗi còn lớn hơn cảm ơn.</i><br>(3) <i>Nếu toa thuốc cảm ơn có thể trị bệnh khiếm nhã, vô ơn, ích kỷ thì toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác. Vì thế, hãy để cảm ơn và xin lỗi trở thành hai từ thông dụng trong ngôn ngữ hàng ngày của chúng ta.”</i><br>(Sưu tầm)<br><br><b>Câu 11:</b> Chủ đề của đoạn trích trên là gì?",
            options: [
                "A. Ý nghĩa của lời cảm ơn trong cuộc sống thường ngày.",
                "B. Văn hóa nước ta trong sự so sánh với thế giới.",
                "C. Lời xin lỗi và cách hành xử văn minh của con người.",
                "D. Văn hóa ứng xử của con người trong đời sống."
            ],
            correctAnswer: "D"
        },
        {
            id: 271821, type: "multiple_choice",
            content: "<b>Câu 12:</b> Theo đoạn trích ở Câu 11, lời cảm ơn nên được dùng khi nào?",
            options: [
                "A. Trong các cuộc họp có nhiều người quan trọng.",
                "B. Trong những tình huống nghiêm trọng.",
                "C. Trong những chuyện nhỏ nhặt hàng ngày.",
                "D. Trong mọi tình huống cần thiết của cuộc sống."
            ],
            correctAnswer: "D"
        },
        {
            id: 271824, type: "multiple_choice",
            content: "<b>Câu 13:</b> Đoạn văn ở Câu 11 sử dụng phương thức biểu đạt chính nào?",
            options: ["A. Tự sự.", "B. Thuyết minh.", "C. Giải thích.", "D. Nghị luận."],
            correctAnswer: "D"
        },
        {
            id: 271822, type: "multiple_choice",
            content: "<b>Câu 14:</b> Tác giả khẳng định: <i>“toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác.”</i> vì sao?",
            options: [
                "A. Vì lời xin lỗi sẽ giúp ta biết nhận ra khuyết điểm, sửa lỗi để hoàn thiện bản thân.",
                "B. Vì khi nói lời xin lỗi sẽ khiến cuộc giao tiếp diễn ra suôn sẻ, bớt căng thẳng hơn.",
                "C. Vì nói lời xin lỗi sẽ giúp cho chúng ta nhận ra được những hạn chế của bản thân.",
                "D. Vì lời xin lỗi sẽ làm cho đối phương cảm thấy mình được kính nể và tôn trọng."
            ],
            correctAnswer: "A"
        },
        {
            id: 271823, type: "multiple_choice",
            content: "<b>Câu 15:</b> Từ <u><b>chân thành</b></u> (in đậm, gạch chân) trong đoạn trích ở Câu 11 gần nghĩa hơn cả với từ nào sau đây?",
            options: ["A. Thành thục.", "B. Thân thiết.", "C. Thành tâm.", "D. Thiết thực."],
            correctAnswer: "C"
        },

        // --- CÂU 16 - 20: ĐỌC HIỂU VĂN BẢN 4 ---
        {
            id: 271829, type: "multiple_choice",
            content: "<b>Đọc đoạn trích sau và trả lời các câu hỏi từ 16 đến 20:</b><br><i>“Sự ngưng tụ hơi nước là quá trình hơi nước trong không khí được chuyển sang thể nước lỏng. Ngưng tụ hơi nước rất quan trọng đối với chu trình tuần hoàn nước bởi vì nó hình thành nên các đám mây. Những đám mây này có thể tạo ra mưa, nó là cách chính để nước quay trở lại Trái Đất. Ngưng tụ hơi nước là quá trình ngược với bốc hơi nước. Sự ngưng tụ hơi nước cũng là nguyên nhân của hiện tượng sương, hoặc nước trên mắt kính của bạn khi bạn từ một phòng lạnh đi ra ngoài trong một ngày nóng, ẩm ướt, còn trong một ngày lạnh nước có thể nhỏ giọt bên ngoài cốc uống nước của bạn hay có nước ở phía bên trong cửa sổ ngôi nhà bạn.<br>Thậm chí trên những bầu trời trong xanh không một gợn mây, thì nước vẫn tồn tại dưới hình thức hơi nước và những giọt nước li ti không thể nhìn thấy được. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi, muối, khói trong khí quyển để hình thành nên các hạt nhân mây (giọt mây nhỏ, đám mây nhỏ), nó gia tăng khối lượng và phát triển thành những đám mây. Khi những giọt nước kết hợp với nhau, gia tăng về kích thước, những đám mây có thể phát triển và mưa có thể xảy ra. Các đám mây hình thành trong khí quyển do không khí chứa hơi nước bốc lên cao và lạnh đi. Phần quan trọng của quá trình này là không khí sát mặt đất ấm lên do bức xạ mặt trời. Nguyên nhân lớp khí quyển phía bên trên mặt đất lạnh đi là do áp lực không khí. Không khí có trọng lượng và tại mực nước biển trọng lượng của một cột không khí nén xuống trên đầu bạn khoảng 32kg trên mỗi inch vuông, áp lực này, được gọi là khí áp, nó là kết quả của mật độ không khí trong cột không khí phía trên. Càng lên cao càng ít không khí phía bên trên, và vì thế càng ít áp lực. Khí áp thấp hơn và mật độ không khí giảm theo độ cao. Điều này làm cho không khí trở nên lạnh hơn.”</i><br>(Theo Gleick, <i>Tài nguyên nước, Bách khoa từ điển về khí hậu và thời tiết</i>, NXB Đại học Oxford, New York, quyển 2, trang 817-823)<br><br><b>Câu 16:</b> Xác định phong cách ngôn ngữ của đoạn trích.",
            options: ["A. Khoa học.", "B. Nghệ thuật.", "C. Chính luận.", "D. Sinh hoạt."],
            correctAnswer: "A"
        },
        {
            id: 271825, type: "multiple_choice",
            content: "<b>Câu 17:</b> Theo tác giả, quá trình hơi nước trong không khí được chuyển sang thể nước lỏng được gọi là gì?",
            options: [
                "A. Bản chất của hạt mưa rơi.",
                "B. Nguyên nhân nước bốc hơi.",
                "C. Hiện tượng xuất hiện sương.",
                "D. Sự ngưng tụ hơi nước."
            ],
            correctAnswer: "D"
        },
        {
            id: 271828, type: "multiple_choice",
            content: "<b>Câu 18:</b> Theo đoạn trích ở Câu 16, khi có áp lực không khí sẽ dẫn tới điều gì sau đây?",
            options: [
                "A. Những giọt nước li ti không nhìn thấy được.",
                "B. Những đám mây mỏng có thể tạo ra mưa.",
                "C. Lớp khí quyển phía bên trên mặt đất lạnh đi.",
                "D. Xuất hiện sương mù dày đặc trên mặt đất."
            ],
            correctAnswer: "C"
        },
        {
            id: 271826, type: "multiple_choice",
            content: "<b>Câu 19:</b> Thông tin nào KHÔNG được nhắc tới trong đoạn văn thứ hai của ngữ liệu ở Câu 16?",
            options: [
                "A. Lớp khí quyển phía bên trên mặt đất lạnh đi và tác động bức xạ đến mặt trời.",
                "B. Khi các hạt nhân mây (giọt mây nhỏ và đám mây nhỏ) gia tăng khối lượng.",
                "C. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi trong khí quyển.",
                "D. Những phân tử nhỏ bé của khói trong khí quyển kết hợp với các phân tử nước."
            ],
            correctAnswer: "A"
        },
        {
            id: 271827, type: "multiple_choice",
            content: "<b>Câu 20:</b> Đoạn trích ở Câu 16 bàn về vấn đề gì?",
            options: [
                "A. Nguyên nhân xuất hiện lớp khí quyển.",
                "B. Sự vận động của những giọt nước li ti.",
                "C. Nguyên nhân xuất hiện hạt phân tử nước.",
                "D. Sự ngưng tụ hơi nước trong không khí."
            ],
            correctAnswer: "D"
        },

        // --- CÂU 21 - 25: TÌM LỖI SAI ---
        {
            id: 183816, type: "multiple_choice",
            content: "<b>Câu 21:</b> Xác định một từ/cụm từ SAI về ngữ pháp/ngữ nghĩa/logic/phong cách.<br><i>Đang trên ghế giảng đường, song nhiều bạn trẻ đã rất năng động, tự tìm tòi việc làm, mang về thu nhập hàng chục triệu đồng.</i>",
            options: ["A. Đang.", "B. song.", "C. tìm tòi.", "D. thu nhập."],
            correctAnswer: "C"
        },
        {
            id: 183817, type: "multiple_choice",
            content: "<b>Câu 22:</b> Xác định một từ/cụm từ SAI về ngữ pháp/ngữ nghĩa/logic/phong cách.<br><i>Với tỉ lệ 92,79% đại biểu có mặt tán thành, Quốc hội thông qua Nghị quyết thí điểm một số cơ chế, chính sách đặc thù phát triển thành phố Cần Thơ, với nhiều chính sách được ban hành ngay lập tức.</i>",
            options: ["A. tán thành.", "B. thí điểm.", "C. đặc thù.", "D. ngay lập tức."],
            correctAnswer: "D"
        },
        {
            id: 183818, type: "multiple_choice",
            content: "<b>Câu 23:</b> Xác định một từ/cụm từ SAI về ngữ pháp/ngữ nghĩa/logic/phong cách.<br><i>Trong sự chuyển mình của Hà Nội, có những cái tưởng như được thêm vào, và thực chất lại là mất đi một cách rất đáng tiếc.</i>",
            options: ["A. chuyển mình.", "B. cái.", "C. và.", "D. rất đáng tiếc."],
            correctAnswer: "C"
        },
        {
            id: 183819, type: "multiple_choice",
            content: "<b>Câu 24:</b> Xác định một từ/cụm từ SAI về ngữ pháp/ngữ nghĩa/logic/phong cách.<br><i>Bài thơ “Từ ấy” là lời tâm nguyện của người thanh niên yêu nước giác ngộ lý tưởng cách mạng. Sự vận động của tâm trạng nhà thơ được thể hiện linh động bằng những hình ảnh tươi sáng, các biện pháp tu từ và ngôn ngữ giàu nhạc điệu.</i>",
            options: ["A. tâm nguyện.", "B. giác ngộ.", "C. linh động.", "D. ngôn ngữ."],
            correctAnswer: "C"
        },
        {
            id: 183820, type: "multiple_choice",
            content: "<b>Câu 25:</b> Xác định một từ/cụm từ SAI về ngữ pháp/hoặc ngữ nghĩa/logic/phong cách.<br><i>Trong thời đại khoa học công nghệ phát triển làm mưa làm gió và sự xuất hiện của cuộc cách mạng công nghiệp lần thứ tư thì đổi mới giáo dục đào tạo không chỉ trở nên quan trọng mà còn bức thiết hơn bao giờ hết, có ý nghĩa quyết định tương lai của mỗi dân tộc, mỗi quốc gia.</i>",
            options: ["A. khoa học công nghệ.", "B. làm mưa làm gió.", "C. cách mạng công nghiệp.", "D. quyết định tương lai."],
            correctAnswer: "B"
        },

        // --- CÂU 26 - 28: TÌM TỪ KHÁC NHÓM ---
        {
            id: 183821, type: "multiple_choice",
            content: "<b>Câu 26:</b> Chọn một từ mà cấu tạo/ý nghĩa của nó KHÔNG cùng nhóm với các từ còn lại.",
            options: ["A. xanh xao.", "B. trắng bệch.", "C. vàng vọt.", "D. đỏ rực."],
            correctAnswer: "D"
        },
        {
            id: 183822, type: "multiple_choice",
            content: "<b>Câu 27:</b> Chọn một từ mà cấu tạo/ý nghĩa của nó KHÔNG cùng nhóm với các từ còn lại.",
            options: ["A. đùm bọc.", "B. cứu trợ.", "C. cứu giúp.", "D. ủng hộ."],
            correctAnswer: "D"
        },
        {
            id: 183823, type: "multiple_choice",
            content: "<b>Câu 28:</b> Chọn một từ mà cấu tạo/ý nghĩa của nó KHÔNG cùng nhóm với các từ còn lại.",
            options: ["A. cao.", "B. thấp.", "C. nông.", "D. dài."],
            correctAnswer: "C"
        },

        // --- CÂU 29 - 33: ĐIỀN TỪ VÀO CHỖ TRỐNG ---
        {
            id: 183826, type: "multiple_choice",
            content: "<b>Câu 29:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>Mặt Trời điều khiển vòng tuần hoàn nước _____ việc làm nóng nước trên những đại dương, làm bốc hơi nước _____ trong không khí.</i>",
            options: ["A. bằng/ lên.", "B. bằng/ vào.", "C. từ/ lên.", "D. bằng/ trên."],
            correctAnswer: "B"
        },
        {
            id: 183827, type: "multiple_choice",
            content: "<b>Câu 30:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>Nếu học sinh được phép học trực tiếp, các nhà trường _____ làm tốt công tác phòng chống dịch, tận dụng tối đa thời gian để ôn tập, củng cố nội dung còn khiếm khuyết _____ học sinh học trực tuyến.</i>",
            options: ["A. cần/ khi.", "B. đã/ khi.", "C. đã/ lúc.", "D. cần/ nhưng."],
            correctAnswer: "A"
        },
        {
            id: 183828, type: "multiple_choice",
            content: "<b>Câu 31:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>Đô thị hóa _____ sự phát triển riêng của một đô thị về quy mô và số lượng dân số, mà còn gắn liền với những biến đổi về kinh tế - xã hội _____ môi trường thiên nhiên của một hệ thống đô thị.</i>",
            options: ["A. không chỉ là/ và.", "B. không chỉ/ cùng.", "C. chính là/ và.", "D. chính là/ cùng."],
            correctAnswer: "A"
        },
        {
            id: 183829, type: "multiple_choice",
            content: "<b>Câu 32:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>Theo báo cáo được UNICEF _____ ngày 11/12/2006, trong vòng nhiều năm qua, Việt Nam luôn dẫn đầu khu vực châu Á – Thái Bình Dương về các chỉ số bình đẳng giới.</i>",
            options: ["A. giới thiệu.", "B. truyền ra.", "C. tiết lộ.", "D. công bố."],
            correctAnswer: "D"
        },
        {
            id: 183830, type: "multiple_choice",
            content: "<b>Câu 33:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>_____ văn học biểu hiện trước hết ở cách nhìn, cách cảm thụ có tính chất khám phá, ở giọng điệu riêng biệt của tác giả.</i>",
            options: ["A. Quá trình.", "B. Giai đoạn.", "C. Phong cách.", "D. Trào lưu."],
            correctAnswer: "C"
        },

        // --- CÂU 34 - 43: ĐỌC HIỂU ĐOẠN TRÍCH NGẮN ---
        {
            id: 183831, type: "multiple_choice",
            content: "<b>Câu 34:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Thấy hắn toan làm dữ, cụ đành dịu giọng:<br>- Thôi, cầm lấy vậy, tôi không còn hơn.<br>Hắn vênh cái mặt lên, rất là kiêu ngạo:<br>- Tao đã bảo tao không đòi tiền.<br>- Giỏi! Hôm nay mới thấy anh không đòi tiền. Thế thì anh cần gì?<br>Hắn dõng dạc:<br>- Tao muốn làm người lương thiện.<br>Bá Kiến cười ha hả:<br>- Ô tưởng gì! Tôi chỉ cần anh lương thiện cho thiên hạ nhờ.”</i><br>(Nam Cao, <i>Chí Phèo</i>, Ngữ văn 11, tập một, NXB Giáo dục Việt Nam, 2014)<br><br>Nét nổi bật nhất về nghệ thuật của đoạn trích là gì?",
            options: [
                "A. Từ ngữ giàu tính tạo hình.",
                "B. Lựa chọn chi tiết đặc sắc.",
                "C. Phân tích tâm lí nhân vật.",
                "D. Ngôn ngữ đối thoại sinh động."
            ],
            correctAnswer: "D"
        },
        {
            id: 183832, type: "multiple_choice",
            content: "<b>Câu 35:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Theo các nhà nghiên cứu, Omicron gắn chặt hơn vào các tế bào và chống lại được một số kháng thể. Mô hình cấu trúc về cách thức Omicron gắn vào tế bào và kháng thể giúp làm rõ phương thức hoạt động của biến thể này, cũng như tạo ra được các kháng thể trung hòa. Các nhà nghiên cứu ví von biến thể Omicron có cấu tạo giống như “hai đôi bàn tay đan vào nhau”. Bằng cách sử dụng các mô hình máy tính để tìm hiểu về protein đột biến trên bề mặt biến thể Omicron, các nhà nghiên cứu tiến hành phân tích được các tương tác phân tử diễn ra khi một đột biến này bám vào một protein bề mặt tế bào được gọi là thụ thể ACE2 - vốn được coi là “cửa ngõ” để virus xâm nhập vào tế bào, nhằm giúp hiểu rõ cách thức các đột biến của Omicron liên kết với nhau để làm lây nhiễm sang các tế bào.”</i><br>(Cổng thông tin điện tử Bộ Y Tế (MOH))<br><br>Phong cách ngôn ngữ của đoạn trích là gì?",
            options: ["A. Khoa học.", "B. Chính luận.", "C. Nghệ thuật.", "D. Sinh hoạt."],
            correctAnswer: "A"
        },
        {
            id: 183833, type: "multiple_choice",
            content: "<b>Câu 36:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>(1) “Tràn trề trên mặt bàn, chạm cả vào cành quất Lí cố tình để sát vào mâm cỗ cho bữa ăn thêm đẹp, thêm sang, là la liệt bát đĩa ngồn ngộn các món ăn. (2) Ngoài các món thường thấy ở cỗ Tết như gà luộc, giò, chả, nem, măng hầm chân giò, miến nấu lòng gà, xúp lơ xào thịt bò... – món nào cũng mang dấu ấn tài hoa của người chế biến – là các món khác thường như gà quay ướp húng lìu, vịt tần hạt sen, chả chìa, mọc, vây...”</i><br>(Ma Văn Kháng, <i>Mùa lá rụng trong vườn</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2008)<br><br>Xác định tác dụng của dấu gạch ngang (–) trong câu (2).",
            options: [
                "A. Đánh dấu lời nói trực tiếp của nhân vật.",
                "B. Để chỉ sự ngang hàng trong quan hệ.",
                "C. Đánh dấu bộ phận chú thích, giải thích.",
                "D. Nối các từ nằm trong một liên danh."
            ],
            correctAnswer: "C"
        },
        {
            id: 183834, type: "multiple_choice",
            content: "<b>Câu 37:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Con gặp lại nhân dân như nai về suối cũ<br>Cỏ đón giêng hai, chim én gặp mùa,<br>Như đứa trẻ thơ đói lòng gặp sữa<br>Chiếc nôi ngừng bỗng gặp cánh tay đưa.”</i><br>(Chế Lan Viên, <i>Tiếng hát con tàu</i>, Ngữ văn 12, tập một, NXB Giáo dục Việt Nam, 2021)<br><br>Biện pháp tu từ nghệ thuật nào được sử dụng trong câu thơ: <i>“Con gặp lại nhân dân như nai về suối cũ”</i>?",
            options: ["A. So sánh.", "B. Nhân hóa.", "C. Đảo ngữ.", "D. Hoán dụ."],
            correctAnswer: "A"
        },
        {
            id: 183835, type: "multiple_choice",
            content: "<b>Câu 38:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Cô Hiền bên ngoại, chị Đại bên nội là những người đàn bà có đầu óc rất thực tế. Mọi sự mọi việc đều được các bà tính toán trước cả. Và luôn luôn tính đúng vì không có lòng tự ái, sự ganh đua, thói thời thượng chen vô. Không có cả sự lãng mạn hay mộng mơ vớ vẩn. Đã tính là làm, đã làm là không thèm để ý đến những đàm tiếu của thiên hạ. Cô tuyên bố thẳng thừng với tôi: “Một đời tao chưa từng bị ai cám dỗ, kể cả chế độ.””</i><br>(Nguyễn Khải, <i>Một người Hà Nội</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)<br><br>Đoạn trích thể hiện tính cách nổi bật nào của nhân vật cô Hiền?",
            options: [
                "A. Kín đáo, tế nhị.",
                "B. Chăm chỉ, chịu khó.",
                "C. Ngay thẳng, thật thà.",
                "D. Giỏi giang, bản lĩnh."
            ],
            correctAnswer: "D"
        },
        {
            id: 183836, type: "multiple_choice",
            content: "<b>Câu 39:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Bà lão khẽ dặng hắng một tiếng, nhẹ nhàng nói với “nàng dâu mới”:<br>- Ừ, thôi thì các con đã phải duyên phải kiếp với nhau, u cũng mừng lòng...<br>Tràng <u><b>thở đánh phào một cái</b></u>, ngực nhẹ hẳn đi. Hắn ho khẽ một tiếng, bước từng bước dài ra sân.”</i><br>(Kim Lân, <i>Vợ nhặt</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2014)<br><br>Cụm từ <u><b>thở đánh phào một cái</b></u> (gạch chân, in đậm) trong đoạn trích trên thể hiện tâm trạng gì của nhân vật Tràng?",
            options: [
                "A. Chán nản vì người mẹ đã nói quá nhiều về mình.",
                "B. Buồn bã vì người vợ mới không được như ý mình.",
                "C. Vui mừng vì mẹ đã chấp nhận người vợ của mình.",
                "D. Sợ hãi khi mẹ nói về hoàn cảnh gia đình của mình."
            ],
            correctAnswer: "C"
        },
        {
            id: 183837, type: "multiple_choice",
            content: "<b>Câu 40:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Con sóng dưới lòng sâu<br>Con sóng trên mặt nước<br>Ôi con sóng nhớ bờ<br>Ngày đêm không ngủ được<br>Lòng em nhớ đến anh<br>Cả trong mơ còn thức”</i><br>(Xuân Quỳnh, <i>Sóng</i>, Ngữ văn 12, tập một, NXB Giáo dục Việt Nam, 2021)<br><br>Những trạng thái của \"sóng\" trong đoạn trích trên thể hiện điều gì dưới đây?",
            options: [
                "A. Một trái tim rạo rực, khao khát được yêu thương.",
                "B. Nỗi trăn trở của người phụ nữ trong tình yêu.",
                "C. Khát vọng muốn bất tử hóa tình yêu của tác giả.",
                "D. Nỗi nhớ trong tình yêu của người phụ nữ."
            ],
            correctAnswer: "D"
        },
        {
            id: 183838, type: "multiple_choice",
            content: "<b>Câu 41:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Nhưng bây giờ thì hắn tỉnh. Hắn bâng khuâng như tỉnh dậy sau một cơn say rất dài. Cũng như những người say tỉnh dậy, hắn thấy miệng đắng, lòng mơ hồ buồn. Người thì bủn rủn, chân tay không buồn nhấc. Hay là đói rượu? <u><b>Nghĩ đến rượu, hắn hơi rùng mình.</b></u> Ruột gan lại nôn nao lên một tí. Hắn sợ rượu cũng như những người ốm thường sợ cơm. Tiếng chim hót ngoài kia vui vẻ quá! Có tiếng cười nói của những người đi chợ. Anh thuyền chài gõ mái chèo đuổi cá. Những tiếng quen thuộc ấy hôm nào chả có. Nhưng hôm nay hắn mới nghe thấy... Chao ôi là buồn!”</i><br>(Nam Cao, <i>Chí Phèo</i>, Ngữ văn 11, tập một, NXB Giáo dục Việt Nam, 2014)<br><br>Câu <u><b>Nghĩ đến rượu, hắn hơi rùng mình.</b></u> (gạch chân, in đậm) trong đoạn trích đã diễn tả:",
            options: [
                "A. “Hắn” bỗng nhiên cảm thấy rượu hôm qua không ngon như mọi khi.",
                "B. Nhân vật “hắn” lo sợ về bệnh tật kéo đến ở tuổi già.",
                "C. Báo hiệu một chuyển biến trong con người nhân vật.",
                "D. Cơn say trước kéo dài khiến “hắn” cảm thấy mệt."
            ],
            correctAnswer: "C"
        },
        {
            id: 183839, type: "multiple_choice",
            content: "<b>Câu 42:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Bác nhớ miền Nam, nỗi nhớ nhà<br>Miền Nam mong Bác, nỗi mong cha.”</i><br>(Tố Hữu, <i>Bác ơi!</i>, Ngữ văn 12, tập một, NXB Giáo dục Việt Nam, 2019)<br><br>Biện pháp tu từ nào được sử dụng trong câu thơ trên?",
            options: ["A. Nhân hóa.", "B. Hoán dụ.", "C. Nói quá.", "D. Liệt kê."],
            correctAnswer: "B"
        },
        {
            id: 183840, type: "multiple_choice",
            content: "<b>Câu 43:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Em ơi em Đất Nước là máu xương của mình<br>Phải biết gắn bó san sẻ<br>Phải biết hóa thân cho dáng hình xứ sở<br>Làm nên Đất Nước muôn đời...”</i><br>(Nguyễn Khoa Điềm, <i>Đất Nước</i> - trích trường ca <i>Mặt đường khát vọng</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2014)<br><br>Giọng điệu chủ đạo của toàn bộ đoạn trích trên là gì?",
            options: [
                "A. Ngọt ngào, say đắm.",
                "B. Thiết tha, bồi hồi.",
                "C. Hạnh phúc, tự hào.",
                "D. Lưu luyến, bịn rịn."
            ],
            correctAnswer: "A"
        },

        // --- CÂU 44 - 48: ĐỌC HIỂU VĂN BẢN 5 ---
        {
            id: 82775, type: "multiple_choice",
            content: "<b>Đọc văn bản sau và trả lời các câu hỏi từ 44 đến 48:</b><br><i>“Người đàn bà nhận ra được tôi ngay. Mụ nhấp nhổm xoay mình trên chiếc ghế như bị kiến đốt, và về sau tôi mới sực nghĩ ra, mụ nghĩ rằng tòa án đã bố trí sẵn tôi ngồi phía sau để chuẩn bị làm nhân chứng.<br>- Chị cứ ngồi nguyên đấy! - Đẩu nói với vẻ mặt đầy hào hứng của một con người bảo vệ công lí vừa có thêm người đến tiếp viện, anh chạy sang phòng bên xách một chiếc ghế cho tôi. Bấy giờ, dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi, với mấy vết thương đã lên da non nhưng vẫn để lại dấu vết trên mặt.<br>- Tùy bà! - Đẩu thay đổi cách xưng hô, khoác lên mình cái cung cách bề ngoài của một vị chánh án - chủ trương nguyên tắc của chúng tôi là kêu gọi hòa thuận...<br>Đang ngồi cúi gục xuống, người đàn bà bỗng ngẩng lên nhìn thẳng vào chúng tôi, lần lượt từng người một, với một vẻ ban đầu hơi ngơ ngác.<br>- Chị cảm ơn các chú! – Người đàn bà đột nhiên thốt lên bằng một giọng khẩn thiết – Đây là chị nói thành thực, chị cảm ơn các chú. Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn... cho nên các chú đâu có hiểu được cái việc của các người làm ăn lam lũ, khó nhọc...<br>Chỉ mấy lời mào đầu ấy, người đàn bà đã mất hết cái vẻ ngoài khúm núm, sợ sệt. Điệu bộ khác, ngôn ngữ khác.<br>Cũng phải nói thật, những lời ấy, nhất là đấy lại là lời một người đàn bà khốn khổ, không phải dễ nghe đối với chúng tôi. Dẫu mặt hãy còn trẻ, Đẩu cũng là một chánh án huyện. Còn tôi, một người đáng lẽ mụ phải biết ơn...”</i><br>(Nguyễn Minh Châu, <i>Chiếc thuyền ngoài xa</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)<br><br><b>Câu 44:</b> Vì sao tác giả lại nói <i>“dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi”</i>?",
            options: [
                "A. Đẩu là chánh án của huyện nhưng người kể chuyện ở đây (nhân vật xưng “tôi”) mới thực sự tham gia xét xử vụ án này.",
                "B. Người đàn bà sợ cái uy của nhân vật xưng “tôi” hơn là sự kiểu cách trong lời lẽ của Đẩu – vị chánh án huyện.",
                "C. Người kể chuyện (nhân vật xưng “tôi”) đã chứng kiến và biết rõ sự thật mà người đàn bà đang cố tình muốn giấu.",
                "D. Người đàn bà thấy được phiên tòa đã có đầy đủ các thành viên và đặc biệt là sự xuất hiện của nhân chứng."
            ],
            correctAnswer: "C"
        },
        {
            id: 82771, type: "multiple_choice",
            content: "<b>Câu 45:</b> Đâu là nhận định đúng về hoàn cảnh của \"người đàn bà\" trong đoạn trích ở Câu 44?",
            options: [
                "A. Người phụ nữ vô cùng bất hạnh vì liên tục bị chồng mình đánh đập.",
                "B. Người đàn bà có cuộc sống nghèo khổ, quanh năm làm lụng vất vả.",
                "C. Người đàn bà hạnh phúc vì đã sinh được nhiều đứa con trai thông minh.",
                "D. Người phụ nữ xấu xí và ế chồng nên đã phải chấp nhận sống trên thuyền."
            ],
            correctAnswer: "B"
        },
        {
            id: 82772, type: "multiple_choice",
            content: "<b>Câu 46:</b> Đâu là cách giải thích hợp lý cho sự thay đổi thái độ của nhân vật Đẩu trong đoạn trích ở Câu 44?",
            options: [
                "A. Đẩu cảm thấy chán nản với câu chuyện của người đàn bà nên muốn bà ta nhanh chóng rời đi.",
                "B. Đẩu cảm thấy mình ở vị trí cao hơn nên không cần thiết phải tỏ ra vui vẻ, nồng nhiệt với người đàn bà.",
                "C. Đẩu thấy trong phòng đã có thêm người ủng hộ mình nên không còn lo lắng về người phụ nữ trước mặt.",
                "D. Đẩu muốn dùng cung cách vị chánh án để người đàn bà nhận thức được toàn bộ các vấn đề trong câu chuyện mà họ đã nói."
            ],
            correctAnswer: "D"
        },
        {
            id: 82773, type: "multiple_choice",
            content: "<b>Câu 47:</b> Câu nói của người phụ nữ: <i>“Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn...”</i> tương đồng về ý nghĩa với câu nào sau đây?",
            options: [
                "A. Con người ta muốn sống tốt thì cần có một công việc đàng hoàng.",
                "B. Trong cuộc sống, không thể chủ quan trong việc đánh giá một con người.",
                "C. Cuộc sống có nhiều điều phức tạp, không thể chỉ đánh giá, nhìn nhận một chiều.",
                "D. Người tốt thì thường gặp những trở ngại rất lớn trong việc làm kinh tế."
            ],
            correctAnswer: "C"
        },
        {
            id: 82774, type: "multiple_choice",
            content: "<b>Câu 48:</b> Trong đoạn trích ở Câu 44, tác giả đã có tâm trạng như thế nào?",
            options: [
                "A. Sung sướng vì mình đã bảo vệ được công lý khi làm chứng cho người đàn bà.",
                "B. Cảm thấy khó hiểu trong cách hành xử và suy nghĩ của người đàn bà.",
                "C. Khó chịu khi thấy người đàn bà dùng thái độ bề trên để nói chuyện với mình.",
                "D. Bức bối vì không thể đánh trả người đã làm cho mình bị thương trên mặt."
            ],
            correctAnswer: "B"
        },

        // --- CÂU 49 - 50: ĐỌC HIỂU NGẮN ---
        {
            id: 266086, type: "multiple_choice",
            content: "<b>Câu 49:</b> Đọc đoạn trích sau và trả lời câu hỏi:<br><i>“Hà Giang là tỉnh địa đầu của Tổ quốc, phía đông giáp tỉnh Cao Bằng, phía tây giáp tỉnh Yên Bái và Lào Cai, phía nam giáp tỉnh Tuyên Quang, phía bắc giáp Trung Quốc. Các cung đường Hà Giang quanh co, cheo leo vốn đầy thách thức cho người lái xe. Thế nhưng khi bạn phóng tầm mắt xung quanh, căng thẳng nhường lại chỗ cho cảm giác thư thái khi chiêm ngưỡng vẻ đẹp cao nguyên. Khí hậu Hà Giang lạnh rõ rệt so với vùng thấp và trung du kế cận. Nhiệt độ trung bình năm khoảng 21-23 độ C. Nét nổi bật của khí hậu là độ ẩm cao trong năm, mưa nhiều và kéo dài. Bạn có thể du lịch Hà Giang vào bất kỳ mùa nào trong năm. Người ta thường đến Hà Giang vào mùa thu lúa chín vàng. Thời gian đẹp nhất là tháng 10, 11 và 12, khi hoa tam giác mạch hay những cánh đồng cải khoe sắc. Còn mùa xuân, hoa mơ, hoa mận nở trắng rừng khiến bạn như đang bồng bềnh trên mây.”</i><br>(Theo <i>vnexpress.net</i>)<br><br>Ý nào sau đây KHÔNG nói về đặc điểm địa lý của tỉnh Hà Giang?",
            options: [
                "A. Phía Đông giáp tỉnh Cao Bằng, phía tây giáp tỉnh Yên Bái và Lào Cai.",
                "B. Tạo cảm giác thư thái cho du khách khi chiêm ngưỡng vẻ đẹp Hà Giang.",
                "C. Hà Giang là một tỉnh có độ ẩm cao suốt năm, mưa nhiều và thường kéo dài.",
                "D. Có khí hậu Hà Giang lạnh rõ rệt so với các vùng đồng bằng, trung du kế cận."
            ],
            correctAnswer: "B"
        },
        {
            id: 266087, type: "multiple_choice",
            content: "<b>Câu 50:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Trong tâm hồn người con gái nhỏ bé, tình yêu và niềm tin mãnh liệt vào cuộc sống, cái sợi chỉ xanh óng ánh ấy, bao nhiêu bom đạn giội xuống cũng không hề đứt, không thể nào tàn phá nổi ư?”</i><br><br>Xác định các biện pháp tu từ có trong câu văn trên.",
            options: [
                "A. Ẩn dụ, câu hỏi tu từ.",
                "B. Hoán dụ, câu hỏi tu từ.",
                "C. Ẩn dụ, so sánh.",
                "D. Hoán dụ, so sánh."
            ],
            correctAnswer: "A"
        }
    ],
"hsa_khoahoc_01": [
  {"id": 101, "type": "multiple_choice", "content": "Khi nói về hiện tượng sôi của chất lỏng, nhận xét nào dưới đây là sai?", "options": ["A. Hiện tượng hóa hơi xảy ra ngay trên bề mặt chất lỏng.", "B. Hiện tượng hóa hơi xảy ra ngay trong lòng chất lỏng.", "C. Khi chuyển sang thể khí, thế năng tương tác phân tử giảm.", "D. Khi áp suất tăng, nhiệt độ sôi của chất lỏng cũng tăng."], "correctAnswer": "C", "image": null},
  {"id": 102, "type": "multiple_choice", "content": "Một học sinh thực hiện thí nghiệm xác định hệ số ma sát trượt giữa một vật nặng hình trụ nhỏ bằng thép và một tấm ván phẳng. Ban đầu, vật nặng được giữ tại vị trí A ở đầu trên ván nghiêng nhờ một nam châm điện. Đặt một cổng quang điện tại vị trí B cách A một khoảng 35 cm. Kết nối cổng quang điện và công tắc của nam châm điện với một máy đo để đo thời gian từ lúc vật bắt đầu chuyển động từ A tới khi chạm tới vị trí cổng quang điện tại B. Điều chỉnh góc nghiêng của ván trượt đến 20°. Ngắt nam châm điện để vật nặng bắt đầu trượt xuống. Máy đo được khoảng thời gian vật nặng trượt từ A đến B là 0,58 s. Cho gia tốc trọng trường g = 9,8 m/s². Hệ số ma sát trượt giữa vật nặng và máng trượt đo được xấp xỉ bằng:", "options": ["A. 0,10.", "B. 0,12.", "C. 0,14.", "D. 0,16."], "correctAnswer": "C", "image": "https://i.postimg.cc/8zg1fFjm/102.png"},
  {"id": 103, "type": "fill_blank", "content": "Một người cần di chuyển một chiếc tủ gỗ có dạng hình hộp chữ nhật bằng cách đẩy nó theo phương ngang để nó trượt chậm và đều, sao cho mặt dưới của tủ luôn tiếp xúc toàn diện với mặt sàn nhà. Kích thước chiều cao và chiều rộng của tủ lần lượt là 1,8 m và 1,1 m. Biết hệ số ma sát giữa tủ và sàn nhà bằng 0,35. Độ cao tối đa của điểm đặt lực đẩy so với sàn nhà có giá trị bằng bao nhiêu (tính theo đơn vị mét, kết quả lấy dưới dạng phân số tối giản)?", "options": [], "correctAnswer": "11/7", "image": null},
  {"id": 104, "type": "multiple_choice", "content": "Bếp từ là thiết bị đun nấu phổ biến trong gia đình. Khi bếp hoạt động, dòng điện chạy qua cuộn dây đồng đặt dưới mặt kính của bếp sẽ sinh ra dòng từ trường biến thiên trong vùng không gian phía trên mặt bếp, làm xuất hiện dòng điện chạy bên trong đáy nồi. Dòng điện này được gọi là dòng Foucault, có tác dụng sinh nhiệt rất lớn. Nguyên tắc hoạt động của bếp từ dựa trên hiện tượng:", "options": ["A. Cảm ứng điện từ.", "B. Bức xạ nhiệt.", "C. Dẫn nhiệt do tiếp xúc.", "D. Giao thoa sóng điện từ."], "correctAnswer": "A", "image": null},
  {"id": 105, "type": "multiple_choice", "content": "Trong một công trường xây dựng, một khối đá lớn được kéo lên dọc theo một mặt phẳng nghiêng dài có góc nghiêng 53° bằng một dây cáp nối với động cơ điện. Dây cáp được vắt qua một ròng rọc cố định đặt trên một mặt phẳng ngang ở trên cao. Bỏ qua khối lượng dây cáp, khối lượng ròng rọc, và sức cản không khí. Cho hệ số ma sát giữa bề mặt khối đá và mặt phẳng nghiêng là 0,4. Nếu khối đá được kéo lên với tốc độ không đổi thì hiệu suất chuyển hóa từ cơ năng của động cơ thành thế năng trọng trường của khối đá xấp xỉ bằng:", "options": ["A. 23%.", "B. 35%.", "C. 65%.", "D. 77%."], "correctAnswer": "D", "image": null},
  {"id": 106, "type": "multiple_choice", "content": "Một người chơi đàn ghi-ta cần điều chỉnh dây đàn sao cho âm thanh mà nó phát ra chính là nốt A4 (có tần số 440 Hz). Biết rằng hai đầu dây đàn được gắn cố định. Trước khi điều chỉnh thì tần số âm thanh do dây đàn phát ra là 400 Hz, và khi gẩy thì trên dây có một bụng sóng. Để đạt được nốt A4, người chơi cần vặn chốt điều chỉnh để làm tăng lực căng của dây đàn trong khi không làm thay đổi chiều dài dây. Biết tốc độ truyền sóng trên dây đàn tỉ lệ thuận với căn bậc hai của lực căng dây. Hỏi để đàn phát ra âm A4, và khi gẩy vẫn chỉ có một bụng sóng trên dây, thì người chơi phải tăng lực căng dây đàn thêm bao nhiêu phần trăm?", "options": ["A. 4,9%.", "B. 10%.", "C. 21%.", "D. 24%."], "correctAnswer": "C", "image": null},
  {"id": 107, "type": "multiple_choice", "content": "Một người dùng một bóng đèn sợi đốt sử dụng điện xoay chiều có ghi thông số 120V - 45W để thắp sáng một căn phòng nhỏ. Để bóng đèn này có thể sáng bình thường ở mạng điện xoay chiều có điện áp 220 V thì cần mắc nối tiếp nó với một điện trở phụ R có giá trị xấp xỉ bằng:", "options": ["A. 251 Ω.", "B. 260 Ω.", "C. 267 Ω.", "D. 274 Ω."], "correctAnswer": "C", "image": null},
  {"id": 108, "type": "multiple_choice", "content": "Đưa một khối thép có khối lượng 10 kg và nhiệt độ 25 °C vào trong một lò nung điện có công suất 5 kW. Cho nhiệt độ nóng chảy của thép là 1500 °C; nhiệt dung riêng và nhiệt nóng chảy riêng của thép lần lượt là 460 J/kg.K và 2,5.10^5 J/kg. Biết rằng 87% điện năng tiêu thụ của lò nung chuyển thành nhiệt năng làm nóng khối thép. Để làm nóng chảy hoàn toàn khối thép trên, cần sử dụng lò nung trong thời gian tối thiểu là:", "options": ["A. 1782 s.", "B. 1971 s.", "C. 2135 s.", "D. 2355 s."], "correctAnswer": "C", "image": null},
  {"id": 109, "type": "multiple_choice", "content": "Cho một căn phòng trống hình hộp chữ nhật rộng 5 m, dài 10 m, và cao 3 m. Căn phòng có tường cách nhiệt và nhiệt độ không khí trong phòng đang là 0 °C. Sau khi mở cửa và để không khí trong phòng cân bằng nhiệt với môi trường bên ngoài thì thấy nhiệt độ trong phòng tăng lên 20 °C. Biết áp suất không khí trong phòng luôn cân bằng với áp suất khí quyển bên ngoài và có giá trị là 1,01.10^5 Pa. Cho khối lượng mol của không khí là 29 g/mol; hằng số khí lý tưởng là R = 8,31 J/mol.K. Khối lượng không khí trong phòng đã thoát ra ngoài khi mở cửa xấp xỉ bằng:", "options": ["A. 13,2 kg.", "B. 14,1 kg.", "C. 15,2 kg.", "D. 16,1 kg."], "correctAnswer": "A", "image": null},
  {"id": 110, "type": "multiple_choice", "content": "Nhúng chìm một khối kim loại có khối lượng 5 kg vào bình chứa 2 kg nước. Ban đầu, kim loại và nước cùng ở nhiệt độ phòng. Cấp nhiệt cho bình chứa để làm nóng nước và kim loại cho đến khi nhiệt độ trong bình ổn định ở một mức nhiệt độ nào đó. Biết nhiệt dung riêng của nước lớn gấp 9 lần nhiệt dung riêng của kim loại. Khi so sánh giữa nhiệt lượng mà khối kim loại hấp thụ Q1 và nhiệt lượng mà nước hấp thụ Q2, nhận xét nào dưới đây là đúng?", "options": ["A. Q2 = 9Q1.", "B. Q1 = 9Q2.", "C. Q2 = 3,6Q1.", "D. Q1 = 3,6Q2."], "correctAnswer": "C", "image": null},
  {"id": 111, "type": "multiple_choice", "content": "Một khối khí lý tưởng thực hiện một chu trình được biểu diễn thành giản đồ P-V. Trong đó, áp suất P tính bằng kPa và thể tích V tính bằng m³. Nhiệt độ của khối khí ở trạng thái (2) là 200 K, và ở trạng thái (3) là 1800 K. Thể tích của khối khí ở trạng thái (1) là:", "options": ["A. 1 m³.", "B. 2 m³.", "C. 3 m³.", "D. 4 m³."], "correctAnswer": "C", "image": "LINK_ANH_TAI_DAY"},
  {"id": 112, "type": "multiple_choice", "content": "Một máy chiếu xạ sử dụng nguồn phóng xạ Co-60 với chu kỳ bán rã là 5,27 năm để điều trị ung thư. Để đảm bảo liều lượng chiếu xạ, nguồn Co-60 cần được thay mới khi độ phóng xạ giảm xuống còn một nửa so với độ phóng xạ lúc mới được sản xuất. Tại thời điểm vừa được sản xuất, nguồn Co-60 có độ phóng xạ 1000 Ci. Ở thời điểm hiện tại, độ phóng xạ của nguồn Co-60 đo được là 800 Ci. Sau bao lâu nữa thì cần thay mới nguồn?", "options": ["A. 1,71 năm.", "B. 2,23 năm.", "C. 3,14 năm.", "D. 3,57 năm."], "correctAnswer": "D", "image": null},
  {"id": 113, "type": "multiple_choice", "content": "Một thanh kim loại MN có chiều dài L được kéo với vận tốc v không đổi dọc theo hai thanh ray dẫn điện nằm ngang không ma sát. Từ trường đều B được tạo ra trong vùng không gian chuyển động của thanh kim loại, với các đường sức từ vuông góc với mặt phẳng hình vẽ và hướng từ trong ra ngoài. Cho L = 10 cm, v = 5,0 m/s và B = 1,2 T. Điện trở của thanh kim loại là R = 0,4 Ω. Bỏ qua điện trở của các thanh ray. Công suất tỏa nhiệt trên thanh kim loại xấp xỉ bằng:", "options": ["A. 0,6 W.", "B. 0,7 W.", "C. 0,8 W.", "D. 0,9 W."], "correctAnswer": "D", "image": "LINK_ANH_TAI_DAY"},
  {"id": 114, "type": "multiple_choice", "content": "Sơ đồ của một máy phát điện xoay chiều đơn giản gồm một khung dây dẫn phẳng gồm 200 vòng dây, mỗi vòng có diện tích 100 cm². Cho khung dây quay đều trong từ trường đều với tốc độ 20 vòng/s quanh một trục vuông góc với các đường sức từ. Biết độ lớn cảm ứng từ bằng 0,02 T. Chọn thời điểm ban đầu t = 0 là lúc vectơ pháp tuyến của khung dây ngược hướng với cảm ứng từ. Tại thời điểm t = 2 ms, suất điện động cảm ứng xuất hiện trên khung dây có giá trị xấp xỉ bằng:", "options": ["A. 1,25 V.", "B. -1,25 V.", "C. 4,86 V.", "D. -4,86 V."], "correctAnswer": "B", "image": "LINK_ANH_TAI_DAY"},
  {"id": 115, "type": "multiple_choice", "content": "Trong nghiên cứu các đặc tính về âm và sóng âm, cường độ âm I được định nghĩa là năng lượng mà sóng âm truyền qua một mét vuông diện tích đặt vuông góc với phương truyền sóng trong một giây. Biết cường độ âm nhỏ nhất mà tai người có thể nghe được (ngưỡng nghe) có giá trị I0 = 10^-12 W/m². Trên công trường xây dựng có một máy khoan đang hoạt động và phát ra âm thanh rất lớn. Biết rằng máy khoan phát ra âm thanh đẳng hướng (giống nhau theo mọi hướng) với công suất phát âm là P = 5 W. Bỏ qua sự hấp thụ và phản xạ âm của môi trường. Cường độ âm tại một vị trí cách máy khoan 30 m có giá trị là:", "options": ["A. 2,2.10^-4 W/m².", "B. 4,4.10^-4 W/m².", "C. 1,8.10^-4 W/m².", "D. 1,8.10^-3 W/m²."], "correctAnswer": "B", "image": null},
  {"id": 116, "type": "multiple_choice", "content": "Trong vùng không gian trống trãi, để không nghe thấy âm thanh do máy khoan (công suất P = 5 W) phát ra thì người nghe phải đứng xa máy khoan một khoảng cách tối thiểu bằng:", "options": ["A. 10000 m.", "B. 630783 m.", "C. 126156 m.", "D. 1261566 m."], "correctAnswer": "B", "image": null},
  {"id": 117, "type": "multiple_choice", "content": "Để đo lường độ to của âm thanh, người ta thường sử dụng khái niệm 'mức cường độ âm' tại một vị trí, tính theo đơn vị đêxiben (dB), được tính bằng công thức L = 10.log(I/I0), trong đó I là cường độ âm tại vị trí đó, và I0 là ngưỡng nghe. Quy định an toàn lao động đòi hỏi mức cường độ âm tại nơi làm việc không được vượt quá 85 dB. Khoảng cách tối thiểu từ máy khoan (P = 5 W) đến vị trí làm việc theo đúng quy định an toàn với tiếng ồn xấp xỉ bằng:", "options": ["A. 12 m.", "B. 24 m.", "C. 36 m.", "D. 48 m."], "correctAnswer": "C", "image": null},
  {"id": 201, "type": "multiple_choice", "content": "Khối lượng của 1 proton gấp bao nhiêu lần khối lượng của 1 electron?", "options": ["A. Khoảng 1836 lần.", "B. Khoảng 5,4 lần.", "C. Khoảng 1,8.10^-53 lần.", "D. Khoảng 0,0005 lần."], "correctAnswer": "A", "image": null},
  {"id": 202, "type": "multiple_choice", "content": "Cho phức chất K3[Fe(C2O4)3] có cấu tạo xung quanh ion trung tâm Fe3+. Số phối tử của phức chất và số phối trí của nhân trung tâm lần lượt là bao nhiêu?", "options": ["A. 6 và 6.", "B. 3 và 3.", "C. 3 và 6.", "D. 6 và 3."], "correctAnswer": "C", "image": "LINK_ANH_TAI_DAY"},
  {"id": 203, "type": "multiple_choice", "content": "Phương trình nào dưới đây biểu diễn phản ứng giữa hai khí gồm ammonia và hydrogen chloride ở điều kiện thường?", "options": ["A. NH3(g) + HCl(g) -> NH2Cl(s) + H2(g)", "B. NH3(g) + HCl(g) -> NH4Cl(s)", "C. NH3(g) + 3HCl(g) -> NCl3(s) + 3H2(g)", "D. 2NH3(g) + 2HCl(g) -> N2(g) + Cl2(g) + 4H2(g)"], "correctAnswer": "B", "image": null},
  {"id": 204, "type": "multiple_choice", "content": "Hợp chất X phản ứng với thuốc thử Tollens tạo thành lớp bạc sáng bóng bám trên bề mặt ống nghiệm. Chất X thuộc loại hợp chất nào dưới đây?", "options": ["A. Aldehyde.", "B. Alkyne.", "C. Phenol.", "D. Alcohol."], "correctAnswer": "A", "image": null},
  {"id": 205, "type": "multiple_choice", "content": "Trong cơn giông khi có sấm sét, khí nitrogen và khí oxygen trong không khí phản ứng trực tiếp với nhau tạo thành hợp chất nào?", "options": ["A. NO.", "B. NO2.", "C. N2O.", "D. N2O5."], "correctAnswer": "A", "image": null},
  {"id": 206, "type": "multiple_choice", "content": "Số oxi hoá của các nguyên tử hydrogen trong hợp chất BH3 là bao nhiêu?", "options": ["A. 0.", "B. +3.", "C. +1.", "D. -1."], "correctAnswer": "D", "image": null},
  {"id": 207, "type": "multiple_choice", "content": "Phát biểu nào sau đây không đúng về tính chất hóa học của ethylamine?", "options": ["A. Dung dịch ethylamine trong nước làm quỳ tím hóa xanh.", "B. Ethylamine có tính base vì phân tử có chứa nhóm -NH2.", "C. Ethylamine tác dụng với nitrous acid ở nhiệt độ thấp (0 - 5 °C) thu được muối diazonium.", "D. Dung dịch ethylamine tác dụng được với dung dịch muối FeCl3."], "correctAnswer": "C", "image": null},
  {"id": 208, "type": "multiple_choice", "content": "Nhận xét nào dưới đây không đúng khi nói về glucose và fructose?", "options": ["A. Đều có trong mật ong.", "B. Đều làm mất màu nước bromine.", "C. Đều tạo được kết tủa đỏ gạch khi tác dụng với Cu(OH)2, đun nóng trong môi trường kiềm.", "D. Đều tạo được dung dịch màu xanh lam khi tác dụng với Cu(OH)2 trong môi trường kiềm."], "correctAnswer": "B", "image": null},
  {"id": 209, "type": "multiple_choice", "content": "Ethyl pentanoate được tạo nên từ phản ứng ester hóa giữa:", "options": ["A. ethene và pentan-1-ol.", "B. ethane và pentanoic acid.", "C. ethanol và pentanoic acid.", "D. ethanoic acid và pentan-1-ol."], "correctAnswer": "C", "image": null},
  {"id": 210, "type": "multiple_choice", "content": "Bảng thông số vật lý của halogen ở áp suất thường: F2 (nóng chảy -220 °C, sôi -188 °C), Cl2 (-101 °C, -35 °C), Br2 (-7 °C, 59 °C), I2 (114 °C, 184 °C). Phương án nào dưới đây giải thích đúng về sự tăng nhiệt độ nóng chảy và nhiệt độ sôi từ F2 đến I2?", "options": ["A. Do tạo được liên kết hydrogen giữa các phân tử.", "B. Do năng lượng liên kết đơn trong phân tử tăng dần từ F2 đến I2.", "C. Do tương tác van der Waals giảm dần từ F2 đến I2.", "D. Do khối lượng, kích thước phân tử và số lượng electron trong các phân tử tăng dần từ F2 đến I2."], "correctAnswer": "D", "image": "LINK_ANH_TAI_DAY"},
  {"id": 211, "type": "multiple_choice", "content": "Nhiệt độ phân hủy thành oxide của các muối carbonate của kim loại nhóm IIA giảm dần theo dãy nào sau đây?", "options": ["A. MgCO3, CaCO3, SrCO3, BaCO3.", "B. BaCO3, SrCO3, CaCO3, MgCO3.", "C. BaCO3, CaCO3, SrCO3, MgCO3.", "D. MgCO3, BaCO3, SrCO3, CaCO3."], "correctAnswer": "B", "image": null},
  {"id": 212, "type": "fill_blank", "content": "Một học sinh cần điều chế một lượng nhỏ 12,4 mL khí acetylene ở điều kiện chuẩn từ calcium carbide CaC2 (độ tinh khiết 99%, M = 64,10 g/mol). Nếu hiệu suất phản ứng là 100%, học sinh này cần sử dụng tối thiểu bao nhiêu mg calcium carbide (làm tròn đến hàng đơn vị)?", "options": [], "correctAnswer": "32", "image": null},
  {"id": 213, "type": "multiple_choice", "content": "Trong công nghiệp methanol (CH3OH) được tổng hợp từ CO và H2 ở nhiệt độ và áp suất cao. Khi cho dòng khí CH4 vào cổng (1) và hơi nước vào cổng (2) ở 200 °C và áp suất 10 bar, phản ứng xảy ra trong hỗn hợp A là:", "options": ["A. 2CH4 + 2H2O <=> CH3OH + CO + 4H2", "B. 2CH4 + H2O <=> 2CO2 + 5H2", "C. CH4 + H2O <=> CH3OH + H2", "D. CH4 + H2O <=> CO + 3H2"], "correctAnswer": "D", "image": "LINK_ANH_TAI_DAY"},
  {"id": 214, "type": "multiple_choice", "content": "Sau khi hạ nhiệt độ của hỗn hợp A (gồm CO, H2, CH4 dư, H2O dư) về 25 °C thì thu được hỗn hợp B và chất nào bị ngưng tụ rồi được loại khỏi hệ phản ứng qua cổng (4)?", "options": ["A. Nước và CH4.", "B. Methanol, nước và CH4.", "C. Nước.", "D. Methanol và nước."], "correctAnswer": "C", "image": "LINK_ANH_TAI_DAY"},
  {"id": 215, "type": "multiple_choice", "content": "Biết phản ứng tổng hợp methanol từ hỗn hợp gồm CO và H2 là một quá trình tỏa nhiệt (ΔH < 0). Để chuyển dịch cân bằng theo chiều tạo ra methanol (tăng hiệu suất tổng hợp), quá trình này nên thực hiện ở:", "options": ["A. nhiệt độ thấp và áp suất cao.", "B. nhiệt độ cao và áp suất thấp.", "C. nhiệt độ cao và áp suất cao.", "D. nhiệt độ thấp và áp suất thấp."], "correctAnswer": "A", "image": null},
  {"id": 216, "type": "multiple_choice", "content": "Biết Pb2+ trong dung dịch oxi hóa được Sn. Khi nhúng hai thanh kim loại Pb và Sn nối với nhau bằng dây dẫn điện vào một dung dịch chất điện li thì:", "options": ["A. cả Pb và Sn đều bị ăn mòn điện hóa.", "B. cả Pb và Sn đều không bị ăn mòn điện hóa.", "C. chỉ có Pb bị ăn mòn điện hóa.", "D. chỉ có Sn bị ăn mòn điện hóa."], "correctAnswer": "D", "image": null},
  {"id": 217, "type": "multiple_choice", "content": "Điện phân dung dịch KNO3 và điện phân dung dịch H2SO4 với điện cực trơ giống nhau ở điều gì?", "options": ["A. Đều là không làm thay đổi số mol chất tan.", "B. Nồng độ mol/L của các chất không thay đổi.", "C. Ở cathode đều xảy ra sự khử H2O.", "D. pH của dung dịch không đổi trong quá trình điện phân."], "correctAnswer": "A", "image": null},
  {"id": 301, "type": "multiple_choice", "content": "Sắp xếp trình tự các giai đoạn trong cơ chế hoạt động của enzyme sao cho đúng?<br>(1) Enzyme xúc tác làm biến đổi cơ chất.<br>(2) Enzyme liên kết cơ chất tạo nên phức hợp enzyme - cơ chất.<br>(3) Tạo sản phẩm và giải phóng enzyme.", "options": ["A. (2) -> (1) -> (3).", "B. (2) -> (3) -> (1).", "C. (1) -> (2) -> (3).", "D. (1) -> (3) -> (2)."], "correctAnswer": "A", "image": null},
  {"id": 302, "type": "multiple_choice", "content": "Hiệu ứng nhà kính là một hiện tượng tăng nồng độ khí CO2 trong khí quyển do các nhà máy sản xuất, hoạt động giao thông, đốt cháy các nhiên liệu hóa thạch làm trái đất nóng lên, băng tan chảy, mực nước biển dâng cao và các loài sinh vật trên trái đất nguy cơ tuyệt chủng. Có bao nhiêu giải pháp làm giảm hiệu ứng nhà kính trong các ý sau?<br>(1) Trồng rừng phủ xanh đồi trọc để chúng quang hợp làm giảm CO2.<br>(2) Ra qui định bảo vệ rừng, xử lý mạnh các trường hợp phá rừng.<br>(3) Thực hiện làm màng xanh xung quanh nhà để điều tiết vi khí hậu trong gia đình.<br>(4) Tuyên truyền và giáo dục ý thức về giá trị và ích lợi của việc bảo vệ rừng.", "options": ["A. 1.", "B. 2.", "C. 3.", "D. 4."], "correctAnswer": "D", "image": null},
  {"id": 303, "type": "multiple_choice", "content": "Nối bộ phận với chức năng của các ngăn tim ở người cho đúng.<br>1. Tâm nhĩ trái - a. Nhận máu giàu CO2 từ tĩnh mạch chủ bơm vào tâm thất<br>2. Tâm nhĩ phải - b. Nhận máu từ tâm nhĩ bơm vào động mạch chủ nuôi cơ thể<br>3. Tâm thất trái - c. Nhận máu từ tâm nhĩ bơm vào động mạch phổi trao đổi chất<br>4. Tâm thất phải - d. Nhận máu giàu O2 từ tĩnh mạch phổi bơm vào tâm thất", "options": ["A. 1d, 2a, 3b, 4c.", "B. 1a, 2d, 3c, 4d.", "C. 1d, 2b, 3a, 4c.", "D. 1a, 2b, 3c, 4d."], "correctAnswer": "A", "image": null},
  {"id": 304, "type": "multiple_choice", "content": "Mô tả các bộ phận của hệ dẫn truyền tim: [M] là nút xoang nhĩ, [N] là nút nhĩ thất, [O] là bó His, [P] là mạng Purkinje. Dựa vào kiến thức về hệ dẫn truyền tim, hãy cho biết có bao nhiêu phát biểu sau đây là đúng?<br>1. [M] hoạt động làm cơ tâm nhĩ co.<br>2. [N] có khả năng tự phát xung theo chu kì.<br>3. [P] lan truyền xung thần kinh từ dưới lên.<br>4. [O] là mạng Purkinje, [P] là bó His.", "options": ["A. 1.", "B. 2.", "C. 3.", "D. 4."], "correctAnswer": "B", "image": "LINK_ANH_TAI_DAY"},
  {"id": 305, "type": "multiple_choice", "content": "Sơ đồ cơ chế điều hòa cân bằng nội môi gồm: [1] Bộ phận tiếp nhận kích thích, [2] Bộ phận điều khiển, [3] Bộ phận thực hiện. Cho các phát biểu sau:<br>1. [1] là bộ phận điều khiển, [2] là bộ phận tiếp nhận, [3] là bộ phận thực hiện.<br>2. Tín hiệu được truyền từ [2] truyền đến [3] dưới dạng xung thần kinh hoặc hormone.<br>3. [5] là quá trình kết quả đáp ứng tác động ngược đến bộ phận tiếp nhận kích thích.<br>4. Quá trình điều khiển trong được thực hiện bởi trung ương thần kinh hoặc tuyến nội tiết.<br>Có bao nhiêu phát biểu đúng?", "options": ["A. 1, 2, 4.", "B. 2, 3, 4.", "C. 1, 3, 4.", "D. 1, 2, 3."], "correctAnswer": "B", "image": "LINK_ANH_TAI_DAY"},
  {"id": 306, "type": "multiple_choice", "content": "Quan sát biểu đồ mức độ hấp thụ ánh sáng của các sắc tố quang hợp (Chlorophyll a, Chlorophyll b, Carotenoid). Cho các phát biểu sau:<br>1. Diệp lục hấp thụ ánh sáng chủ yếu ở vùng đỏ (700nm) và xanh tím (400 - 500nm).<br>2. Carotenoid hấp thụ ánh sáng chủ yếu ở vùng xanh tím.<br>3. Diệp lục và carotenoid gần như không hấp thụ được ánh sáng ở vùng xanh lục (500 - 600nm).<br>4. Ở vùng ánh sáng xanh tím, diệp lục hấp thụ mạnh hơn carotenoid.<br>Có bao nhiêu phát biểu đúng?", "options": ["A. 1, 2, 3.", "B. 2, 3, 4.", "C. 1, 3, 4.", "D. 1, 2, 4."], "correctAnswer": "A", "image": "LINK_ANH_TAI_DAY"},
  {"id": 307, "type": "multiple_choice", "content": "Quan sát sơ đồ chu trình Calvin trong quang hợp. Cho các phát biểu sau:<br>1. [1] là PEP và là chất nhận CO2 đầu tiên.<br>2. [2] là PGA (3C) và là sản phẩm cố định CO2 đầu tiên.<br>3. [3] là ATP, [4] là NADPH được cung cấp từ pha sáng.<br>4. Giai đoạn cố định CO2 liên quan chặt chẽ đến sự thoát hơi nước.<br>Phát biểu nào sau đây đúng?", "options": ["A. 1, 2, 4.", "B. 1, 3, 4.", "C. 2, 3, 4.", "D. 1, 2, 3."], "correctAnswer": "C", "image": "LINK_ANH_TAI_DAY"},
  {"id": 308, "type": "multiple_choice", "content": "Thầy giáo tiến hành thí nghiệm trồng cùng một loại cây theo 2 cách: một chậu để thẳng đứng và một chậu để nằm ngang. Khi nói về thí nghiệm này, cho các phát biểu sau:<br>1. Thí nghiệm chứng minh cho tính hướng trọng lực của thân và rễ.<br>2. Hiện tượng này có ý nghĩa đảm bảo cây được định vị vững chắc, không bị đổ, chống lại gió bão.<br>3. Trọng lực làm auxin (AIA) ở 2 phía của thân và rễ không đều nhau.<br>4. Thí nghiệm cho thấy thân hướng trọng lực âm, rễ hướng trọng lực dương.<br>Số phát biểu đúng là:", "options": ["A. 1, 2, 3.", "B. 1, 2, 4.", "C. 1, 3, 4.", "D. 2, 3, 4."], "correctAnswer": "A", "image": "LINK_ANH_TAI_DAY"},
  {"id": 309, "type": "multiple_choice", "content": "Ở chó Labrador, màu sắc lông do 2 locut gen nằm trên 2 cặp NST thường quy định (Gen A/a quy định khả năng sản xuất Eumelanin, Gen B/b quy định khả năng sản xuất Pheomelanin). Sự tương tác giữa hai cặp gen này quyết định kiểu hình màu lông đen, nâu hoặc vàng. Tính trạng màu sắc lông ở chó Labrador di truyền theo quy luật di truyền nào?", "options": ["A. Phân li độc lập.", "B. Liên kết gen.", "C. Hoán vị gen.", "D. Tương tác gen."], "correctAnswer": "D", "image": null},
  {"id": 310, "type": "multiple_choice", "content": "Đem lai các cá thể chó Labrador lông đen (có 4 kiểu gen A-B-) với các cá thể lông nâu (có 2 kiểu gen A-bb), theo lí thuyết sẽ có tối đa bao nhiêu sơ đồ lai nếu không kể vai trò bố mẹ của các tính trạng đem lai?", "options": ["A. 10.", "B. 12.", "C. 8.", "D. 6."], "correctAnswer": "C", "image": null},
  {"id": 311, "type": "multiple_choice", "content": "Khi nói về tính trạng màu sắc lông ở chó Labrador (màu đen, nâu, vàng do tương tác gen A/a và B/b), cho các phát biểu sau:<br>I. Lôcut gen A, a quy định khả năng sản xuất sắc tố Eumelanin trong cơ thể chó Labrador.<br>II. Lôcut gen B, b quy định khả năng sản xuất cả 2 loại sắc tố Pheomelanin và Eumelanin.<br>III. Đem lai 2 dòng chó Labrador lông vàng và lông nâu thuần chủng, có thể thu được đời con có toàn bộ đều lông đen.<br>IV. Một cặp bố mẹ lông đen và nâu sinh con có thể có cả đen, nâu, vàng; nếu điều này xảy ra thì tỷ lệ con lông đen là cao nhất.<br>Có bao nhiêu phát biểu đúng?", "options": ["A. 1.", "B. 2.", "C. 3.", "D. 4."], "correctAnswer": "B", "image": null},
  {"id": 312, "type": "fill_blank", "content": "Sơ đồ phả hệ mô tả 2 bệnh di truyền ở người, trong đó bệnh P do gen lặn nằm trên NST thường quy định, bệnh Q do gen lặn nằm trên vùng không tương đồng của NST giới tính X quy định. Biết rằng không có đột biến mới xảy ra. Xác suất cặp vợ chồng 13-14 sinh đứa con đầu lòng bị cả hai bệnh là bao nhiêu (viết dưới dạng phân số tối giản)?", "options": [], "correctAnswer": "1/80", "image": "LINK_ANH_TAI_DAY"},
  {"id": 313, "type": "multiple_choice", "content": "Trong số các cơ chế hình thành loài sau đây, cơ chế nào hình thành loài mới nhanh nhất?", "options": ["A. Lai xa và đa bội hóa.", "B. Cách li địa lý.", "C. Cách li sinh thái.", "D. Cách li tập tính."], "correctAnswer": "A", "image": null},
  {"id": 314, "type": "multiple_choice", "content": "Phiêu bạt di truyền (biến động di truyền) có thể ảnh hưởng nhất tới quần thể nào sau đây?", "options": ["A. Một quần thể lớn và giao phối ngẫu nhiên.", "B. Một quần thể lớn với sự nhập cư thường xuyên từ quần thể lân cận.", "C. Một quần thể nhỏ bị cô lập.", "D. Một quần thể lớn và giao phối không ngẫu nhiên."], "correctAnswer": "C", "image": null},
  {"id": 315, "type": "multiple_choice", "content": "Quy trình kỹ thuật dựa trên nguyên lý tái tổ hợp DNA và nguyên lý biểu hiện gene, tạo ra các phân tử DNA tái tổ hợp và protein tái tổ hợp được gọi là:", "options": ["A. Công nghệ DNA tái tổ hợp.", "B. Công nghệ sinh học.", "C. Công nghệ tế bào.", "D. Công nghệ vi sinh vật."], "correctAnswer": "A", "image": null},
  {"id": 316, "type": "multiple_choice", "content": "Phát biểu nào sau đây đúng về mối quan hệ giữa các cá thể trong quần thể?", "options": ["A. Hiện tượng ăn thịt đồng loại luôn dẫn đến sự diệt vong của loài.", "B. Quan hệ hỗ trợ giúp quần thể thích nghi tốt hơn với môi trường.", "C. Quan hệ cạnh tranh không xảy ra ở các quần thể thực vật.", "D. Sự cạnh tranh trong quần thể chỉ xảy ra khi môi trường thiếu thức ăn."], "correctAnswer": "B", "image": null}
],
    "thpt_hoa_03": [
    {"id": 1, "type": "multiple_choice", "content": "Hợp chất nào sau đây là ester?", "options": ["A. CH3COOH.", "B. CH3CHO.", "C. CH3COOCH3.", "D. CH3COCH3."], "correctAnswer": "C"},
  {"id": 2, "type": "multiple_choice", "content": "Triolein là chất béo không no, ở trạng thái lỏng. Công thức hóa học của triolein là", "options": ["A. (C17H33COO)3C3H5.", "B. (C17H35COO)3C3H5.", "C. (C15H31COO)3C3H5.", "D. (C17H31COO)3C3H5."], "correctAnswer": "A"},
  {"id": 3, "type": "multiple_choice", "content": "Chất nào sau đây là thành phần chính của xà phòng?", "options": ["A. CH3[CH2]3COONa.", "B. CH3[CH2]11OSO3Na.", "C. CH3[CH2]14COONa.", "D. CH3[CH2]16COOH."], "correctAnswer": "C"},
  {"id": 4, "type": "multiple_choice", "content": "Fructose là một loại monosaccharide có nhiều trong mật ong, có vị ngọt đậm. Công thức phân tử của fructose là", "options": ["A. (C6H10O5)n.", "B. C6H12O6.", "C. C5H10O5.", "D. C12H22O11."], "correctAnswer": "B"},
  {"id": 5, "type": "multiple_choice", "content": "Công thức cấu tạo sau mô tả:<br><img src='https://i.postimg.cc/d1gcz9Sy/5.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Amylose.", "B. Cellulose.", "C. Saccharose.", "D. Amylopectin."], "correctAnswer": "B"},
  {"id": 6, "type": "multiple_choice", "content": "Khi nghiên cứu carbohydrate X ta nhận thấy: - X không tráng gương, có một đồng phân. - X thủy phân trong nước được hai sản phẩm. Vậy X là", "options": ["A. Glucose.", "B. Tinh bột.", "C. Saccharose.", "D. Fructose."], "correctAnswer": "C"},
  {"id": 7, "type": "multiple_choice", "content": "Amine nào sau đây là amine bậc hai?", "options": ["A. trimethylamine.", "B. aniline.", "C. ethylphenylamine.", "D. propylamine."], "correctAnswer": "C"},
  {"id": 8, "type": "multiple_choice", "content": "Số nhóm carboxyl (COOH) trong phân tử glycine là", "options": ["A. 3.", "B. 2.", "C. 1.", "D. 4."], "correctAnswer": "C"},
  {"id": 9, "type": "multiple_choice", "content": "Trong phản ứng tetrapeptide Ala-Gly-Val-Glu, acid đầu C là", "options": ["A. Val.", "B. Ala.", "C. Glu.", "D. Gly."], "correctAnswer": "C"},
  {"id": 10, "type": "multiple_choice", "content": "Cho một loại chất béo có công thức cấu tạo như hình. Phản ứng giữa chất béo trên với hydrogen dư (xt, t°, p) thu được chất béo có công thức là<br><img src='https://i.postimg.cc/NGrKLCtD/10.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. (C15H31COO)(C17H35COO)2C3H5.", "B. (C15H31COO)2(C17H35COO)2C3H5.", "C. (C15H31COO)(C17H33COO)(C17H35COO)C3H5.", "D. (C15H31COO)(C17H33COO)2C3H5."], "correctAnswer": "A"},
  {"id": 11, "type": "multiple_choice", "content": "Thủy phân saccharose, thu được hai monosaccharide X và Y. Chất X có trong máu người với nồng độ trong máu người 4,4 – 7,2 mmol/L (hay 80 – 130 mg/dL). Phát biểu nào sau đây đúng?", "options": ["A. Y bị thủy phân trong môi trường kiềm.", "B. X không có phản ứng tráng bạc.", "C. X có phân tử khối bằng 180.", "D. Y không tan trong nước."], "correctAnswer": "C"},
  {"id": 12, "type": "multiple_choice", "content": "Nhận xét nào sau không đúng?", "options": ["A. Glucose tan tốt trong H2O và có vị ngọt.", "B. Fructose có khả năng tham gia phản ứng tráng bạc.", "C. Đường glucose không ngọt bằng đường saccharose.", "D. Cellulose bị thủy phân bởi dung dịch NaOH tạo glucose."], "correctAnswer": "D"},
  {"id": 13, "type": "multiple_choice", "content": "Cho vào ống nghiệm 3 – 4 giọt dung dịch CuSO4 2% và 2 – 3 giọt dung dịch NaOH 10%. Tiếp tục nhỏ 2 – 3 giọt dung dịch chất X vào ống nghiệm, lắc nhẹ, thu được dung dịch màu xanh lam. Chất X không thể là", "options": ["A. ethanol.", "B. saccharose.", "C. glucose.", "D. glycerol."], "correctAnswer": "A"},
  {"id": 14, "type": "multiple_choice", "content": "Amine X đơn chức. X tác dụng với HCl thu được muối Y có công thức là RNH3Cl. Trong Y, chlorine chiếm 32,42% về khối lượng. Hãy cho biết X có bao nhiêu công thức cấu tạo?", "options": ["A. 3.", "B. 5.", "C. 4.", "D. 2."], "correctAnswer": "C"},
  {"id": 15, "type": "multiple_choice", "content": "Kết quả thí nghiệm của các dung dịch X, Y, Z, T với thuốc thử được ghi ở bảng sau: X, Y phản ứng Cu(OH)2 cho dd xanh lam; Y phản ứng thuốc thử Tollens cho Ag; Z phản ứng nước bromine tạo kết tủa trắng; T làm quỳ tím chuyển xanh. X, Y, Z, T lần lượt là<br><img src='https://i.postimg.cc/L5BRL1NL/15.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Aniline, ethylamine, saccharose, glucose.", "B. Saccharose, aniline, glucose, ethylamine.", "C. Saccharose, glucose, aniline, ethylamine.", "D. Glucose, saccharose, aniline, ethylamine."], "correctAnswer": "C"},
  {"id": 16, "type": "multiple_choice", "content": "Cho hình vẽ sau của amino acid X trong môi trường pH = 6 dưới tác dụng của điện trường: X có thể là<br><img src='https://i.postimg.cc/j2RBVk4C/16.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Glycine.", "B. Alanine.", "C. Lysine.", "D. Glutamic acid."], "correctAnswer": "D"},
  {"id": 17, "type": "multiple_choice", "content": "Công thức cấu tạo của peptide sau có tên là<br><img src='https://i.postimg.cc/DyyRBHZT/17.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Gly-Gly-Ala-Val.", "B. Val-Ala-Gly-Gly.", "C. Val-Gly-Gly-Ala.", "D. Val-Gly-Ala-Gly."], "correctAnswer": "C"},
  {"id": 18, "type": "multiple_choice", "content": "Tiến hành thí nghiệm theo các bước sau:<br>Bước 1: Cho vào cốc thủy tinh chịu nhiệt khoảng 5 gam mỡ lợn và 10mL dung dịch NaOH 40%.<br>Bước 2: Đun sôi nhẹ hỗn hợp, liên tục khuấy đều bằng đũa thủy tinh khoảng 30 phút và thỉnh thoảng thêm nước cất để giữ cho thể tích hỗn hợp không đổi. Để nguội hỗn hợp.<br>Bước 3: Rót thêm vào hỗn hợp 15 – 20 mL dung dịch NaCl bão hòa nóng, khuấy nhẹ. Để yên hỗn hợp.<br>Cho các phát biểu sau:<br>(a) Sau bước 3 thấy có lớp chất rắn màu trắng chứa muối sodium của acid béo nổi lên.<br>(b) Vai trò của dung dịch NaCl bão hòa ở bước 3 là để tách muối sodium của acid béo ra khỏi hỗn hợp.<br>(c) Ở bước 2, nếu không thêm nước cất, hỗn hợp bị cạn khô thì phản ứng thủy phân không xảy ra.<br>(d) Ở bước 1, nếu thay mỡ lợn bằng dầu nhớt thì hiện tượng thí nghiệm sau bước 3 vẫn xảy ra tương tự.<br>(e) Trong công nghiệp, phản ứng ở thí nghiệm trên được ứng dụng để sản xuất xà phòng và glycerol.<br>(f) Sau bước 2, dung dịch trong cốc thủy tinh là đồng nhất.<br>(g) Có thể thay dung dịch NaCl bão hòa bằng dung dịch CaCl2 bão hòa.<br>Số phát biểu đúng là", "options": ["A. 3.", "B. 4.", "C. 5.", "D. 2."], "correctAnswer": "C"},
  {"id": 19, "type": "true_false", "content": "Aspirin được sử dụng làm thuốc giảm đau, hạ sốt. Sau khi uống, aspirin bị thủy phân trong cơ thể tạo thành salicylic acid. Hãy cho biết những phát biểu sau là đúng hay sai:", "propositions": ["a) Aspirin và salicylic acid đều là hợp chất hữu cơ tạp chức và hơn kém nhau 1 liên kết π.", "b) Aspirin và salicylic acid đều chứa hai nhóm chức ở vị trí tương đối meta- trên vòng benzene.", "c) Aspirin và salicylic acid đều tác dụng với dung dịch NaOH theo tỉ lệ mol 1 : 2.", "d) Công thức phân tử của aspirin và salicylic acid lần lượt là C9H8O4 và C7H6O3."], "correctAnswer": {"0": "true", "1": "false", "2": "false", "3": "true"}},
  {"id": 20, "type": "true_false", "content": "Cho sơ đồ phản ứng thủy phân và tráng bạc của carbohydrate. Hãy cho biết những phát biểu sau đây là đúng hay sai:<br><img src='https://i.postimg.cc/fRY7XTh1/19.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "propositions": ["a) Chất T là muối ammonium của gluconic acid.", "b) Chất Z thuộc loại hợp chất hữu cơ đơn chức.", "c) Để chế tạo gương soi, ruột phích, người ta phủ lên thủy tinh một lớp bạc mỏng thường được tạo từ phản ứng (2).", "d) Các chất X, Y, Z và T có cùng số nguyên tử carbon."], "correctAnswer": {"0": "true", "1": "false", "2": "false", "3": "true"}},
  {"id": 21, "type": "true_false", "content": "Ephedrine được sử dụng với hàm lượng nhất định trong các loại thuốc điều trị cảm và dị ứng. Hãy cho biết những phát biểu sau đây là đúng hay sai:", "propositions": ["a) Công thức phân tử của ephedrine là C10H15NO.", "b) Ephedrine thuộc loại hợp chất hữu cơ tạp chức, chứa đồng thời nhóm chức alcohol và amine cùng bậc.", "c) Ephedrine hydrochloride được điều chế từ phản ứng của ephedrine với hydrochloric acid.", "d) Mỗi hộp Ephedrine Aguetant 10 ống x 1 mL có chứa tổng cộng 3 gam ephedrine hydrochloride."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 22, "type": "true_false", "content": "Tiến hành thí nghiệm phản ứng màu biuret / đông tụ protein bằng HNO3 đặc. Hãy cho biết những phát biểu sau đây là đúng hay sai:", "propositions": ["a) Sau bước 1, lòng trắng trứng bắt đầu bị đông tụ tạo thành chất rắn màu trắng.", "b) Trong thí nghiệm trên cần cẩn thận khi làm việc với HNO3 đặc.", "c) Ở bước 2, albumin trong lòng trắng trứng hình thành sản phẩm rắn màu vàng với dung dịch nitric acid đặc do sự đông tụ protein trong môi trường acid.", "d) Nếu thay dung dịch HNO3 đặc bằng dung dịch HCl đặc thì thu được hiện tượng giống như bước 2."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 23, "type": "fill_blank", "content": "Một loại chất béo chứa 89,0% tristearin về khối lượng còn lại là tạp chất trơ. Thực hiện phản ứng xà phòng hóa thu được xà phòng chứa 67,32% muối sodium stearate... Để sản xuất được 100.000 bánh xà phòng (100g/bánh) thì khối lượng chất béo tối thiểu cần sử dụng là bao nhiêu kg?", "options": [], "correctAnswer": "9167"},
  {"id": 24, "type": "fill_blank", "content": "Có bao nhiêu ester có công thức phân tử C4H8O2 và khi thủy phân thu được alcohol bậc I?", "options": [], "correctAnswer": "3"},
  {"id": 25, "type": "fill_blank", "content": "Cho sơ đồ phản ứng: X -> Y -> Z -> T. Phân tử khối của T bằng bao nhiêu amu?<br><img src='https://i.postimg.cc/RFhnPvjh/3-TLN.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "88"},
  {"id": 26, "type": "fill_blank", "content": "Chuyển hóa glucose thành lactic acid giải phóng 2% năng lượng cho cơ thể. Chạy bộ tiêu tốn 400 kcal. Khối lượng lactic acid được chuyển hóa bằng bao nhiêu gam? (làm tròn đến hàng phần mười)", "options": [], "correctAnswer": "40.2"},
  {"id": 27, "type": "fill_blank", "content": "Cho các chất: cellulose (1), saccharose (2), aniline (3), albumin (4), tristearin (5) và Gly-Ala-Val (6). Có bao nhiêu chất bị thủy phân trong môi trường acid ở điều kiện thích hợp?", "options": [], "correctAnswer": "5"},
  {"id": 28, "type": "fill_blank", "content": "Hợp chất hữu cơ Y có 32% C; 6,67% H; 18,67% N; còn lại O. Phổ khối lượng m/z = 75. Thực hiện phản ứng ester hóa giữa Y với CH3OH trong HCl khan. Sản phẩm hữu cơ thu được có tổng số nguyên tử bằng bao nhiêu?<br><img src='https://i.postimg.cc/vHfX7vrX/6-TLN.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "15"}
],
    "thpt_hoa_04": [
  {"id": 1, "type": "multiple_choice", "content": "Khối lượng methylamine cần để tác dụng vừa đủ với 0,01 mol HCl là?", "options": ["A. 0,90 gam.", "B. 0,31 gam.", "C. 0,62 gam.", "D. 0,45 gam."], "correctAnswer": "B"},
  {"id": 2, "type": "multiple_choice", "content": "Khối lượng ethylamine cần để tác dụng vừa đủ với 0,01 mol HCl là?", "options": ["A. 0,31 gam.", "B. 0,59 gam.", "C. 0,45 gam.", "D. 0,90 gam."], "correctAnswer": "C"},
  {"id": 3, "type": "multiple_choice", "content": "Để phản ứng vừa đủ với 1,24 gam amine X (no, đơn chức, mạch hở) cần 400 mL dung dịch HCl 0,1 M. Công thức phân tử của X là?", "options": ["A. CH5N.", "B. C2H7N.", "C. C4H11N.", "D. C3H9N."], "correctAnswer": "A"},
  {"id": 4, "type": "multiple_choice", "content": "Cho 30 gam hỗn hợp hai amine đơn chức tác dụng vừa đủ với V mL dung dịch HCl 1,5 M, thu được dung dịch chứa 47,52 gam hỗn hợp muối. Giá trị của V là ?", "options": ["A. 160.", "B. 720.", "C. 329.", "D. 320."], "correctAnswer": "D"},
  {"id": 5, "type": "multiple_choice", "content": "Trong một phòng thí nghiệm, 23 gam HCl được hòa tan trong 1 lít nước. Hỗn hợp này được sử dụng để trung hòa 4,6 gam butylamine. Thể tích dung dịch HCl đã sử dụng là?", "options": ["A. 200 mL.", "B. 150 mL.", "C. 100 mL.", "D. 250 mL."], "correctAnswer": "C"},
  {"id": 6, "type": "multiple_choice", "content": "Cho 4,5 gam amine X (no, đơn chức, mạch hở) tác dụng hết với dung dịch HCl dư, thu được 8,15 gam muối. Số nguyên tử hydrogen trong phân tử X là ?", "options": ["A. 7.", "B. 4.", "C. 5.", "D. 2."], "correctAnswer": "A"},
  {"id": 7, "type": "multiple_choice", "content": "Cho 19,4 gam hỗn hợp hai amine (no, đơn chức, mạch hở, kế tiếp nhau trong dãy đồng đẳng) tác dụng hết với dung dịch HCl, thu được 34 gam muối. Công thức phân tử của hai amine là?", "options": ["A. C3H9N và C4H11N.", "B. C3H7N và C4H9N.", "C. CH5N và C2H7N.", "D. C2H7N và C3H9N."], "correctAnswer": "D"},
  {"id": 8, "type": "multiple_choice", "content": "Cho 5,9 gam amine đơn chức X tác dụng vừa đủ với dung dịch HCl, sau khi phản ứng xảy ra hoàn toàn thu được dung dịch Y. Làm bay hơi dung dịch Y được 9,55 gam muối khan. Số công thức cấu tạo ứng với công thức phân tử của X là?", "options": ["A. 5.", "B. 4.", "C. 2.", "D. 3."], "correctAnswer": "B"},
  {"id": 9, "type": "multiple_choice", "content": "Trung hoà hoàn toàn 8,88 gam một amine (bậc I, mạch carbon không phân nhánh) bằng acid HCl, tạo ra 17,64 gam muối. Amine có công thức là?", "options": ["A. H2NCH2CH2CH2CH2NH2.", "B. CH3CH2CH2NH2.", "C. H2NCH2CH2NH2.", "D. H2NCH2CH2CH2NH2."], "correctAnswer": "A"},
  {"id": 10, "type": "multiple_choice", "content": "Hỗn hợp X gồm methylamine và dimethylamine có tỉ khối so với methane bằng 2,4625. Lấy 7,88 gam X tác dụng với dung dịch HCl loãng, dư thu được m gam muối. Giá trị của m là?", "options": ["A. 14,98.", "B. 14,45.", "C. 15,18.", "D. 14,27."], "correctAnswer": "C"},
  {"id": 11, "type": "multiple_choice", "content": "Cho 21,6 gam hỗn hợp X gồm methylamine, ethylamine và propylamine (có tỉ lệ số mol tương ứng là 1 : 2 : 1) tác dụng hết với dung dịch HCl thu được m gam muối. Giá trị của m là?", "options": ["A. 36,20.", "B. 39,12.", "C. 43,50.", "D. 40,58."], "correctAnswer": "B"},
  {"id": 12, "type": "multiple_choice", "content": "Cho 0,2 mol hỗn hợp gồm ethylamine và dimethylamine tác dụng với dung dịch HNO3 loãng dư, thu được m gam muối. Giá trị m là?", "options": ["A. 21,6 gam.", "B. 16,1 gam.", "C. 16,3 gam.", "D. 21,4 gam."], "correctAnswer": "D"},
  {"id": 13, "type": "multiple_choice", "content": "Một kỹ thuật viên trong phòng thí nghiệm hóa học sử dụng 0,25 mol propylamine để phản ứng với 0,25 mol nitric acid nhằm điều chế muối propylammonium nitrate. Với hiệu suất phản ứng là 80% thì khối lượng muối thu được là?", "options": ["A. 18,3 gam.", "B. 20,3 gam.", "C. 24,4 gam.", "D. 24,3 gam."], "correctAnswer": "C"},
  {"id": 14, "type": "multiple_choice", "content": "Hỗn hợp E gồm hai amine (no, đơn chức, đồng đẳng kế tiếp); dung dịch T gồm HCl và HNO3 loãng có tỉ lệ số mol tương ứng là 2 : 1. Cho 3,82 gam E phản ứng vừa đủ với T, thu được 6,54 gam hỗn hợp muối. Công thức phân tử của hai amine trong X là?", "options": ["A. CH5N và C2H7N.", "B. C2H7N và C3H9N.", "C. C3H9N và C4H11N.", "D. C4H11N và C5H13N."], "correctAnswer": "A"},
  {"id": 15, "type": "multiple_choice", "content": "Một nhà nghiên cứu đang phát triển một loại thuốc mới và sử dụng 2,0 gam n-butylamine để phản ứng với lượng dư acetic acid nhằm tạo thành muối có tính chất kháng khuẩn. Khối lượng muối thu được là?", "options": ["A. 3,87 gam.", "B. 3,64 gam.", "C. 4,87 gam.", "D. 5,87 gam."], "correctAnswer": "A"},
  {"id": 16, "type": "multiple_choice", "content": "Cho 2,3 gam ethylamine phản ứng với dung dịch muối ammonium chloride dư. Khối lượng muối thu được là?", "options": ["A. 4,17 gam.", "B. 4,95 gam.", "C. 3,86 gam.", "D. 6,42 gam."], "correctAnswer": "A"},
  {"id": 17, "type": "multiple_choice", "content": "Cho 0,15 mol methylamine tác dụng với HNO2 dư ở nhiệt độ thường, thu được V lít khí N2 (đkc). Giá trị của V là?", "options": ["A. 3,359 L.", "B. 3,719 L.", "C. 5,038 L.", "D. 6,718 L."], "correctAnswer": "B"},
  {"id": 18, "type": "multiple_choice", "content": "Để điều chế 0,2 mol muối benzenediazonium chloride với hiệu suất 90%, lượng aniline cần dùng là?", "options": ["A. 0,2 mol.", "B. 0,25 mol.", "C. 0,222 mol.", "D. 0,180 mol."], "correctAnswer": "C"},
  {"id": 19, "type": "multiple_choice", "content": "Trung hòa hoàn toàn 14,16 gam một amine X bằng acid HCl, tạo ra 22,92 gam muối. Amine X tác dụng với nitrous acid ở nhiệt độ thường, giải phóng khí nitrogen. Amine X là?", "options": ["A. H2NCH2CH2CH2NH2.", "B. CH3CH2CH2NH2.", "C. CH3CH2NHCH3.", "D. H2NCH2CH2NH2."], "correctAnswer": "B"},
  {"id": 20, "type": "multiple_choice", "content": "Hỗn hợp 1,07 gam hai amine đơn chức bậc nhất kế tiếp nhau trong dãy đồng đẳng phản ứng vừa hết với nitrous acid ở nhiệt độ thường tạo nên dung dịch X. Cho X tác dụng với Na dư thu được 0,03 mol H2. Xác định công thức 2 amine:", "options": ["A. C3H7NH2 và C4H9NH2.", "B. C2H5NH2 và C3H7NH2.", "C. CH3NH2 và C2H5NH2.", "D. CH3NH2 và C3H7NH2."], "correctAnswer": "C"},
  {"id": 21, "type": "fill_blank", "content": "Một công ty hóa chất X liên kết với công ty may mặc Y, sản xuất ra hợp chất azo màu vàng với một lượng lớn để công ty Y nhuộm cho 3000 chiếc thảm trải sàn và 1000 chiếc túi đựng. Nguyên liệu chính mà công ty hóa chất X sử dụng là aniline và toàn bộ quá trình sản xuất được thực hiện theo sơ đồ chuyển hóa.<br>Biết rằng:<br>+ Mỗi chiếc thảm trải sàn cần 1,5 m² vải với khối lượng 500 g/m².<br>+ Mỗi chiếc túi đựng cần 0,8 m² vải với khối lượng 600 g/m².<br>+ Để nhuộm 100 kg vải cần 280 gam hợp chất azo (màu vàng).<br>+ Hiệu suất quá trình (1) là 80% và hiệu suất quá trình (2) tính theo các chất phản ứng đều bằng 90%.<br>Tổng khối lượng aniline tối thiểu mà công ty X cần sử dụng trong quá trình sản xuất là bao nhiêu kg? (Kết quả làm tròn đến hàng phần mười).", "options": [], "correctAnswer": "11.2"},
  {"id": 22, "type": "multiple_choice", "content": "Để tổng hợp tribromoaniline, 5,0 gam aniline phản ứng với bromine dư. Khối lượng sản phẩm tribromoaniline thu được với hiệu suất 85% là?", "options": ["A. 18,37 gam.", "B. 15,08 gam.", "C. 22,22 gam.", "D. 24,24 gam."], "correctAnswer": "B"},
  {"id": 23, "type": "multiple_choice", "content": "Trong một nhà máy sản xuất hóa chất, người ta sử dụng 4,5 gam aniline để phản ứng với bromine dư. Hiệu suất phản ứng là 90%. Khối lượng sản phẩm tribromoaniline thu được là:", "options": ["A. 14,4 gam.", "B. 16,3 gam.", "C. 15,9 gam.", "D. 22,3 gam."], "correctAnswer": "A"},
  {"id": 24, "type": "multiple_choice", "content": "Một nhà máy sản xuất thuốc nhuộm sử dụng 5,813 gam aniline phản ứng với bromine dư. Khối lượng bromine cần dùng để phản ứng hoàn toàn với aniline là:", "options": ["A. 12,0 gam.", "B. 18,0 gam.", "C. 24,0 gam.", "D. 30,0 gam."], "correctAnswer": "D"},
  {"id": 25, "type": "fill_blank", "content": "Một nhà máy sản xuất thuốc nhuộm sử dụng 5,813 kg aniline để phản ứng với bromine nhằm tạo ra tribromoaniline, một hợp chất quan trọng trong quá trình nhuộm vải. Mỗi kg tribromoaniline thu được có thể bán với giá 3.500.000 VNĐ. Chi phí cho mỗi kg bromine là 250.000 VNĐ và chi phí cho mỗi kg aniline là 480.000 VNĐ. Giả sử hiệu suất phản ứng đạt 60%, hãy tính lợi nhuận (triệu VNĐ) mà nhà máy thu được từ quá trình sản xuất này (bỏ qua hết các chi phí khác).", "options": [], "correctAnswer": "12.8"}
],
"thpt_ly_04": [
  {"id": 1, "type": "multiple_choice", "content": "Để giải thích các hiện tượng nhiệt quan sát được như: sự tồn tại của các thể, sự truyền nhiệt, sự nóng chảy, sự bay hơi,… các nhà khoa học đã đưa ra mô hình lý thuyết khái quát về cấu tạo chất, gọi là", "options": ["A. mô hình động học phân tử.", "B. thuyết động lực học phân tử.", "C. mô hình động lực học phân tử.", "D. thuyết cấu tạo phân tử."], "correctAnswer": "A"},
  {"id": 2, "type": "multiple_choice", "content": "Hình vẽ mô tả chuyển động phân tử ở các thể khác nhau. Hình cầu là phân tử, mũi tên là hướng chuyển động của phân tử. Hình vẽ mô tả chuyển động phân tử tương ứng với thể rắn, thể lỏng và thể khí lần lượt là<br><img src='https://i.postimg.cc/GhdKHJv4/1.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. (1), (2) và (3).", "B. (2), (3) và (1).", "C. (3), (2) và (1).", "D. (2), (1) và (3)."], "correctAnswer": "B"},
  {"id": 3, "type": "multiple_choice", "content": "Vì sao các phân tử chất lỏng linh động hơn các phân tử chất rắn?", "options": ["A. Vì các phân tử dao động xung quanh vị trí cân bằng và các vị trí cân bằng này lại có thể di chuyển được.", "B. Vì các phân tử dao động xung quanh vị trí cân bằng.", "C. Vì các phân tử đứng yên tại các vị trí cân bằng và các vị trí cân bằng này lại có thể di chuyển được.", "D. Vì các phân tử chuyển động hỗn loạn."], "correctAnswer": "A"},
  {"id": 4, "type": "multiple_choice", "content": "Gọi x, y và z lần lượt khoảng cách trung bình giữa các phân tử của một chất (không phải là nước) ở thể rắn, lỏng và khí. Chọn kết luận đúng.", "options": ["A. z < y < x.", "B. x < z < y.", "C. y < x < z.", "D. x < y < z."], "correctAnswer": "D"},
  {"id": 5, "type": "multiple_choice", "content": "Thanh sắt được cấu tạo từ các phân tử chuyển động không ngừng nhưng tại sao lại không bị tan rã thành các hạt riêng biệt? Vì giữa các phân tử", "options": ["A. có lực hút tĩnh điện bền vững.", "B. có một chất kết dính gắn kết các phân tử.", "C. có lực tương tác.", "D. không lực tương tác."], "correctAnswer": "C"},
  {"id": 6, "type": "multiple_choice", "content": "Trong vật lí, chuyển động Brown là đề cập đến chuyển động", "options": ["A. hỗn loạn của các hạt rất nhỏ dưới tác dụng của các phân tử chất lỏng hoặc chất khí.", "B. có hướng của các phân tử dưới tác dụng của điện trường.", "C. thẳng đều của các nút mạng tinh thể.", "D. thẳng đều của các electron dưới tác dụng của các phân tử chất lỏng hoặc chất khí."], "correctAnswer": "A"},
  {"id": 7, "type": "multiple_choice", "content": "Vật ở thể rắn có", "options": ["A. thể tích và hình dạng riêng, rất khó nén.", "B. thể tích và hình dạng riêng, dễ nén.", "C. thể tích riêng nhưng không có hình dạng riêng, rất khó nén.", "D. thể tích riêng nhưng không có hình dạng riêng, dễ nén."], "correctAnswer": "A"},
  {"id": 8, "type": "multiple_choice", "content": "Ở nhiệt độ hàng triệu độ chất tồn tại ở thể", "options": ["A. plasma.", "B. rắn.", "C. lỏng.", "D. khí."], "correctAnswer": "A"},
  {"id": 9, "type": "multiple_choice", "content": "Hình vẽ nào mô tả đúng sơ đồ các hình thức chuyển thể.<br><img src='https://i.postimg.cc/y8ryQMt2/2.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. H1.", "B. H2.", "C. H3.", "D. H4."], "correctAnswer": "B"},
  {"id": 10, "type": "multiple_choice", "content": "Chất rắn kết tinh có cấu trúc tinh thể. Đó là cấu trúc tạo bởi các hạt (phân tử, nguyên tử, ion) liên kết chặt với nhau và sắp xếp", "options": ["A. theo một trật tự hình học tuần hoàn không gian xác định gọi là mạng tinh thể.", "B. theo một trật tự hình học tuần hoàn không gian xác định gọi là mạng kết tinh.", "C. thành các khối cầu đối xứng gọi là mạng tinh thể.", "D. ngẫu nhiên không có trật tự."], "correctAnswer": "A"},
  {"id": 11, "type": "multiple_choice", "content": "Ở điều kiện thường, chất nào sau đây là không phải là chất rắn vô định hình?", "options": ["A. Nhựa đường.", "B. Cao su.", "C. Kẽm.", "D. Thủy tinh."], "correctAnswer": "C"},
  {"id": 12, "type": "multiple_choice", "content": "Muối ăn có cấu trúc tinh thể gồm các …(1)… có vị trí cân bằng trùng với đỉnh của khối …(2). Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) phân tử NaCl; (2) cầu.", "B. (1) ion Na+ và Cl-; (2) cầu.", "C. (1) ion Na+ và Cl-; (2) lập phương.", "D. (1) phân tử NaCl; (2) lập phương."], "correctAnswer": "C"},
  {"id": 13, "type": "multiple_choice", "content": "Cho một ít nước đá có nhiệt độ dưới 0 °C vào trong một bình chứa. Đun nóng bình chứa (ở áp suất tiêu chuẩn) thì nhiệt độ của nước đá tăng dần đến 0 °C. Khi đạt 0 °C nước đá tan dần thành nước trong suốt thời gian nước đá chuyển thành nước nhiệt độ của hệ (nước đá và nước)", "options": ["A. không đổi luôn ở nhiệt độ điểm ba của nước.", "B. luôn tăng lên.", "C. không đổi luôn ở 4 °C.", "D. không đổi luôn ở 0 °C."], "correctAnswer": "D"},
  {"id": 14, "type": "multiple_choice", "content": "Hình vẽ bên là đồ thị sự thay đổi nhiệt độ của chất rắn kết tinh khi được làm nóng chảy. Trong khoảng thời gian từ ta đến tb thì<br><img src='https://i.postimg.cc/x8RKKhLk/3.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. chất rắn không nhận năng lượng từ nguồn nhiệt.", "B. nhiệt độ chất rắn tăng.", "C. nhiệt độ chất rắn giảm.", "D. chất rắn đang nóng chảy."], "correctAnswer": "D"},
  {"id": 15, "type": "multiple_choice", "content": "Mỗi chất rắn kết tinh", "options": ["A. có nhiệt độ nóng chảy riêng ở một áp suất xác định.", "B. không có nhiệt độ đông đặc riêng.", "C. có nhiệt độ nóng chảy riêng và không phụ thuộc vào áp suất.", "D. đều thăng hoa."], "correctAnswer": "A"},
  {"id": 16, "type": "multiple_choice", "content": "Chọn câu sai. Chất rắn vô định hình", "options": ["A. không có nhiệt độ nóng chảy xác định.", "B. khi bị nung nóng thì mềm dần cho đến khi trở thành lỏng.", "C. trong quá trình hóa lỏng nhiệt độ của nó tăng liên tục.", "D. có cấu trúc tinh thể."], "correctAnswer": "D"},
  {"id": 17, "type": "multiple_choice", "content": "Hiện tượng nóng chảy không được ứng dụng trong lĩnh vực (công cụ) nào sau đây?", "options": ["A. công nghiệp luyện kim.", "B. hàn điện.", "C. thực phẩm.", "D. kích thủy lực."], "correctAnswer": "D"},
  {"id": 18, "type": "multiple_choice", "content": "Ở áp suất tiêu chuẩn, chất X có nhiệt độ nóng chảy riêng xác định. Chất X không thể là", "options": ["A. chất rắn kết tinh.", "B. chất rắn vô định hình.", "C. kim loại nhẹ.", "D. kim loại nặng."], "correctAnswer": "B"},
  {"id": 19, "type": "multiple_choice", "content": "Vòng tuần hoàn nước là sự tồn tại và vận động của nước trên mặt đất, trong lòng đất và trong bầu khí quyển của Trái Đất. Vòng tuần hoàn nước liên quan đến", "options": ["A. sự chuyển thể.", "B. chuyển động tự quay của Trái Đất.", "C. chuyển động Trái Đất quanh Mặt Trời.", "D. dòng chảy của nước."], "correctAnswer": "A"},
  {"id": 20, "type": "multiple_choice", "content": "Một số chất rắn như iodine (i-ốt), băng phiến, đá khô (CO2 ở thể rắn),… có khả năng chuyển trực tiếp sang …(1)…khi nó …(2). Hiện tượng trên gọi là sự thăng hoa. Ngược lại, với sự thăng hoa là sự ngưng kết. Điền cụm từ thích hợp vào chỗ trống.", "options": ["A. (1) thể lỏng; (2) tỏa nhiệt.", "B. (1) thể hơi; (2) tỏa nhiệt.", "C. (1) thể lỏng; (2) nhận nhiệt.", "D. (1) thể hơi; (2) nhận nhiệt."], "correctAnswer": "D"},
  {"id": 21, "type": "multiple_choice", "content": "Đồ thị minh họa sự thay đổi nhiệt độ của chất X theo thời gian khi nhận nhiệt và chuyển các thể. Chất X có thể là<br><img src='https://i.postimg.cc/P5c1zm8T/4.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. cồn.", "B. nước.", "C. kim loại.", "D. băng phiến."], "correctAnswer": "B"},
  {"id": 22, "type": "multiple_choice", "content": "Cồn y tế chuyển từ thể lỏng sang thể khí rất nhanh ở điều kiện thông thường. Hãy giải thích tại sao khi xoa cồn vào da ta cảm thấy lạnh ở vùng da đó? Vì cồn", "options": ["A. thu nhiệt lượng từ cơ thể qua chỗ da đó để bay hơi.", "B. khi bay hơi tỏa nhiệt lượng vào chỗ da đó.", "C. khi bay hơi kéo theo lượng nước chỗ da đó ra khỏi cơ thể.", "D. khi bay hơi tạo ra dòng nước mát tại chỗ da đó."], "correctAnswer": "A"},
  {"id": 23, "type": "multiple_choice", "content": "Các phân tử ở bề mặt chất lỏng tham gia chuyển động nhiệt, trong đó có những phân tử chuyển động …(1). Một số phân tử chất lỏng này có …(2)… thắng lực liên kết giữa các phân tử chất lỏng với nhau thì chúng có thể thoát ra khỏi mặt thoáng trở thành các phân tử hơi. Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) hướng ra ngoài chất lỏng; (2) thế năng đủ lớn.", "B. (1) hướng ra ngoài chất lỏng; (2) động năng đủ lớn.", "C. (1) hướng vào trong chất lỏng; (2) động năng đủ lớn.", "D. (1) hướng vào trong chất lỏng; (2) thế năng đủ lớn."], "correctAnswer": "B"},
  {"id": 24, "type": "multiple_choice", "content": "Dựa vào mô hình động học phân tử ta giải thích sự sôi như sau: Khi nhiệt độ của nước tăng tới khoảng 100 °C dưới áp suất tiêu chuẩn thì nước bắt đầu sôi. Khi đó các bọt chứa không khí và hơi nước nổi lên trong lòng nước càng ngày càng nhiều, càng nổi lên trên thể tích các bọt khí càng tăng, tới mặt thoáng thì vỡ, không khí và hơi nước thoát ra ngoài khí quyển. Do đó sự sôi là sự hóa hơi", "options": ["A. chỉ ở trong lòng chất lỏng.", "B. chỉ ở trên mặt thoáng của chất lỏng.", "C. ở nhiệt độ tiêu chuẩn.", "D. đồng thời ở trong lòng và trên mặt thoáng của chất lỏng."], "correctAnswer": "D"},
  {"id": 25, "type": "multiple_choice", "content": "Trong quá trình sôi của chất lỏng, nhiệt độ không tăng mặc dù các phân tử luôn nhận năng lượng từ bên ngoài. Các phân tử nhận thêm năng lượng dùng để …(1)…với các phân tử xung quanh, khiến phân tử …(2). Chất lỏng chuyển thành chất khí. Điền vào chỗ trống cụm từ thích hợp.", "options": ["A. (1) va chạm; (2) chuyển động tự do.", "B. (1) phá vỡ liên kết; (2) chuyển động tự do.", "C. (1) phá vỡ liên kết; (2) chuyển thành các ion.", "D. (1) va chạm; (2) chuyển thành các ion."], "correctAnswer": "B"},
  {"id": 26, "type": "multiple_choice", "content": "Đun nóng bình chứa nước thì nhiệt độ của nước tăng dần đến 100 °C. Khi đạt 100 °C, nước sôi và chuyển dần thành hơi nước. Trong suốt thời gian chuyển thành hơi nước, nhiệt độ của nước", "options": ["A. giảm xuống dưới 100 °C.", "B. tăng lên cao hơn 100 °C.", "C. không đổi luôn ở trên 100 °C.", "D. không đổi luôn ở 100 °C."], "correctAnswer": "D"},
  {"id": 27, "type": "multiple_choice", "content": "Khi đun chất lỏng đến nhiệt độ sôi, do tiếp tục được cung cấp nhiệt năng nên các phân tử chất lỏng chuyển động nhiệt mạnh hơn, làm phá vỡ …(1)… giữa các phân tử chất lỏng với nhau, phân tử chất lỏng chuyển sang phân tử hơi. Hiện tượng này diễn ra ở …(2). Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) sự liên kết; (2) bề mặt và cả trong lòng khối chất lỏng.", "B. (1) sự liên kết; (2) chỉ bề mặt.", "C. (1) cấu trúc phân tử; (2) chỉ trong lòng khối chất lỏng.", "D. (1) cấu trúc phân tử; (2) chỉ trong lòng khối chất lỏng."], "correctAnswer": "A"},
  {"id": 28, "type": "true_false", "content": "Nội dung sau đây đề cập đến mô hình động học phân tử.", "options": [], "propositions": ["a) Vật chất được cấu tạo bởi một số rất lớn những hạt có kích thước rất nhỏ gọi là phân tử.", "b) Các phân tử chuyển động không ngừng theo mọi hướng gọi là chuyển động nhiệt.", "c) Các phân tử chuyển động nhiệt càng nhanh thì nhiệt độ của vật càng cao.", "d) Giữa các phân tử có các lực tương tác (hút và đẩy). Khi các phân tử gần nhau thì lực hút chiếm ưu thế và khi xa nhau thì lực đẩy chiếm ưu thế."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 29, "type": "true_false", "content": "Nội dung sau đây đề cập đến chất ở thể khí.", "options": [], "propositions": ["a) Các phân tử ở xa nhau hơn so với các phân tử trong chất lỏng.", "b) Khoảng cách giữa các phân tử rất lớn so với kích thước của chúng nên lực tương tác giữa các phân tử hầu như không đáng kể ngay cả khi va chạm nhau.", "c) Các phân tử khí chuyển động hỗn loạn về mọi phía chiếm toàn bộ không gian của bình chứa.", "d) Một lượng khí nhất định không có thể tích và hình dạng riêng mà có thể tích và hình dạng của bình chứa."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 30, "type": "true_false", "content": "Nội dung sau đây đề cập đến chất ở thể lỏng.", "options": [], "propositions": ["a) Khoảng cách trung bình giữa các phân tử, trong chất lỏng lớn hơn trong chất rắn và nhỏ hơn trong chất khí.", "b) Lực liên kết giữa các phân tử, ở thể lỏng lớn hơn ở thể khí và nhỏ hơn ở thể rắn.", "c) Lực liên kết phân tử giữ được các phân tử không bị phân tán xa nhau do đó chất lỏng có thể tích riêng xác định.", "d) Các phân tử ở thể lỏng, dao động xung quanh vị trí cân bằng di chuyển được nên khối chất lỏng rất khó bị nén và có hình dạng xác định."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 31, "type": "true_false", "content": "Các nội dung sau nói về chuyển thể.", "options": [], "propositions": ["a) Khi thay đổi nhiệt độ các chất có thể chuyển từ thể này sang thể khác.", "b) Đa số các chất ở thể rắn khi nóng lên có thể chuyển sang thể lỏng, rồi từ thể lỏng sang thể khí.", "c) Một số ít chất khí khi lạnh đi có thể chuyển sang thể lỏng, rồi từ thể lỏng sang thể rắn.", "d) Đa số các chất có thể chuyển trực tiếp từ thể rắn sang thể khí và ngược lại."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 32, "type": "true_false", "content": "Nội dung sau đây đề cập đến chất rắn kết tinh và chất rắn vô định hình.", "options": [], "propositions": ["a) Chất rắn vô định hình là chất mà các hạt cấu tạo nên nó ở thể rắn liên kết với nhau một cách chặt chẽ sắp xếp theo một trật tự hình học xác định tạo thành các mạng tinh thể.", "b) Chất rắn kết tinh là chất ở thể rắn mà các hạt tạo nên nó không tạo thành mạng tinh thể.", "c) Ở điều kiện thường, đa số các kim loại là các chất kết tinh.", "d) Thủy tinh, nhựa đường, các chất dẻo … là các chất vô định hình."], "correctAnswer": {"0": "false", "1": "false", "2": "true", "3": "true"}},
  {"id": 33, "type": "true_false", "content": "Các nội dung sau đây đề cập đến sự bay hơi và sự sôi của chất lỏng.", "options": [], "propositions": ["a) Sự bay hơi là sự hóa hơi xảy ra ở mặt thoáng của khối chất lỏng.", "b) Sự sôi là sự hóa hơi xảy ra ở cả mặt thoáng và trong lòng chất của khối chất lỏng.", "c) Sự bay hơi diễn ra chỉ ở một số nhiệt độ nhất định.", "d) Sự sôi diễn ra ở nhiệt độ sôi."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "true"}},
  {"id": 34, "type": "true_false", "content": "Khi nước trong bình đang sôi thì năng lượng mà nước nhận được từ nguồn nhiệt", "options": [], "propositions": ["a) được chuyển hóa hoàn toàn thành động năng của các phân tử hơi nước.", "b) không làm tăng nhiệt độ.", "c) làm tăng động năng chuyển động trung bình của phân tử nước trong bình và cả các phân tử hơi nước.", "d) dùng để chuyển thể lỏng sang thể hơi."], "correctAnswer": {"0": "false", "1": "true", "2": "false", "3": "true"}},
  {"id": 35, "type": "true_false", "content": "Các nội dung sau đề cập đến vai trò của sự bay hơi.", "options": [], "propositions": ["a) Nước từ sông, hồ, biển, … liên tục bay hơi tạo thành mây, sương mù, mưa, làm cho khí hậu điều hòa.", "b) Sự bay hơi của nước biển được ứng dụng trong ngành sản xuất muối.", "c) Sự bay hơi của các khí ammonia (NH3), difluoromethane (CH2F2) được ứng dụng trong các thiết bị làm lạnh như: tủ lạnh, máy điều hòa.", "d) Sự bay hơi của kim loại được ứng dụng trong hàn điện."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 36, "type": "fill_blank", "content": "Ở nhiệt độ 27,0 °C, các phân tử hydrogen chuyển động với tốc độ trung bình khoảng 1900 m/s. Khối lượng của phân tử hydrogen 33,6.10^-28 kg. Động năng trung bình của 10^21 phân tử hydrogen bằng bao nhiêu J (viết đáp số 3 con số)?", "options": [], "correctAnswer": "6.06"}
],
"thpt_ly_05": [
  {"id": 1, "type": "multiple_choice", "content": "Nhiệt động lực học là lĩnh vực vật lý nghiên cứu về năng lượng nhiệt và sự truyền nhiệt. Nhiệt động lực học ra đời vào giữa thế kỷ XIX trong quá trình con người tìm hiểu về sự chuyển hóa năng lượng dự trữ trong các nhiên liệu thành", "options": ["A. điện năng để chế tạo các động cơ nhiệt.", "B. cơ năng để chế tạo các máy lạnh.", "C. cơ năng để chế tạo các động cơ nhiệt.", "D. quang năng để chế tạo các động cơ nhiệt."], "correctAnswer": "C"},
  {"id": 2, "type": "multiple_choice", "content": "Câu nào sau đây là đúng?", "options": ["A. Nội năng của một hệ nhất định phải có thế năng tương tác giữa các hạt cấu tạo nên hệ.", "B. Nhiệt lượng truyền cho hệ chỉ làm tăng tổng động năng của chuyển động nhiệt của các hạt cấu tạo nên hệ.", "C. Công tác động lên hệ có thể làm thay đổi cả tổng động năng chuyển động nhiệt của các hạt cấu tạo nên hệ và thế năng tương tác giữa chúng.", "D. Nói chung, nội năng là hàm của nhiệt độ và thể tích, nên nếu thể tích của hệ đã thay đổi thì nội năng của hệ phải thay đổi."], "correctAnswer": "C"},
  {"id": 3, "type": "multiple_choice", "content": "Nhiệt động lực học là một lĩnh vực vật lý nghiên cứu các hiện tượng về nhiệt, quá trình về nhiệt của thế giới tự nhiên về mặt …(1)… và biến đổi …(2). Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) năng lượng; (2) năng lượng.", "B. (1) nhiệt động; (2) nhiệt động.", "C. (1) năng lượng; (2) nhiệt động.", "D. (1) nhiệt động; (2) năng lượng."], "correctAnswer": "A"},
  {"id": 4, "type": "multiple_choice", "content": "Trong quá trình thực hiện công, …(1)… từ dạng năng lượng khác (ví dụ cơ năng chẳng hạn) sang …(2). Điền vào chỗ trống cụm từ thích hợp.", "options": ["A. (1) không có sự chuyển hóa; (2) nội năng.", "B. (1) có sự chuyển hóa; (2) hóa năng.", "C. (1) không có sự chuyển hóa; (2) hóa năng.", "D. (1) có sự chuyển hóa; (2) nội năng."], "correctAnswer": "D"},
  {"id": 5, "type": "multiple_choice", "content": "Khi nhiệt độ của hệ thay đổi thì động năng của các phân tử cấu tạo nên hệ thay đổi. Do đó, nội năng phụ thuộc vào …(1)… của hệ. Mặt khác, khi thể tích hệ thay đổi thì khoảng cách giữa các phân tử cấu tạo nên hệ thay đổi, làm cho thế năng tương tác giữa chúng thay đổi. Vì thế, nội năng cũng phụ thuộc vào …(2)… của hệ. Điền cụm từ thích hợp vào chỗ trống.", "options": ["A. (1) khối lượng; (2) thể tích.", "B. (1) nhiệt độ; (2) thể tích.", "C. (1) nhiệt độ; (2) khối lượng riêng.", "D. (1) khối lượng; (2) khối lượng riêng."], "correctAnswer": "B"},
  {"id": 6, "type": "multiple_choice", "content": "Làm thế nào để thay đổi nội năng của một vật?", "options": ["A. Chỉ cách duy nhất là thực hiện công.", "B. Chỉ cách duy nhất là truyền nhiệt.", "C. Có hai cách: thực hiện công và truyền nhiệt.", "D. Nội năng là đại lượng bất biến không thay đổi được."], "correctAnswer": "C"},
  {"id": 7, "type": "multiple_choice", "content": "Câu nào sau đây nói về nội năng không đúng?", "options": ["A. Nội năng là một dạng năng lượng.", "B. Nội năng là nhiệt lượng.", "C. Nội năng có thể chuyển hóa thành các dạng năng lượng khác.", "D. Nội năng của một vật có thể tăng lên hoặc giảm đi."], "correctAnswer": "B"},
  {"id": 8, "type": "multiple_choice", "content": "Trong hệ thức biểu diễn định luật I nhiệt động lực học: ΔU = A + Q. Quy ước về dấu của Q và A được diễn tả trên hình vẽ chưa đúng. Hãy sửa lại cho đúng.<br><img src='https://i.postimg.cc/1zQ3Qtk6/1.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Đổi chỗ (1) và (2) cho nhau.", "B. Đổi chỗ (2) và (3) cho nhau.", "C. Đổi chỗ (3) và (4) cho nhau.", "D. Đổi chỗ (4) và (1) cho nhau."], "correctAnswer": "C"},
  {"id": 9, "type": "multiple_choice", "content": "Nhiệt được truyền vào hỗn hợp nước đá để làm tan chảy một phần băng. Trong quá trình này, hỗn hợp nước đá:", "options": ["A. thực hiện công.", "B. có nhiệt độ tăng lên.", "C. có nội năng tăng lên.", "D. hiện công, có nhiệt độ tăng và nội năng cũng tăng."], "correctAnswer": "C"},
  {"id": 10, "type": "multiple_choice", "content": "Một quả bóng khối lượng 100 g rơi từ độ cao 10 m xuống sân và nảy lên được 7 m. Sở dĩ bóng không nảy lên được tới độ cao ban đầu là vì một phần cơ năng của quả bóng đã chuyển hóa thành nội năng của", "options": ["A. chỉ quả bóng và của sân.", "B. chỉ quả bóng và không khí.", "C. chỉ mỗi sân và không khí.", "D. quả bóng, mặt sân và không khí."], "correctAnswer": "D"},
  {"id": 11, "type": "multiple_choice", "content": "Mỗi động cơ nhiệt đều có ba bộ phận chính: (1) Nguồn nóng có nhiệt độ T1 cung cấp nhiệt cho động cơ; (2) bộ phận phát động trong đó tác nhân nhận nhiệt từ nguồn nóng, giãn nở sinh công; (3) Nguồn lạnh có nhiệt độ T2 < T1 nhận nhiệt lượng do động cơ tỏa ra. Tác nhân nhận từ nguồn nóng nhiệt lượng Q1 và truyền cho nguồn lạnh nhiệt lượng Q2 thì phần nhiệt lượng chuyển thành công cơ học bằng", "options": ["A. Q1 – 0,5Q2.", "B. Q1 – Q2.", "C. Q2 – 0,5Q1.", "D. Q2 – Q1."], "correctAnswer": "B"},
  {"id": 12, "type": "multiple_choice", "content": "Giả sử cung cấp cho hệ nhiệt động một công là 200 J nhưng nhiệt lượng bị thất thoát ra môi trường bên ngoài là 120 J. Hỏi nội năng biến thiên bao nhiêu J?", "options": ["A. Giảm 320 J.", "B. Tăng 80 J.", "C. Giảm 80 J.", "D. Tăng 320 J."], "correctAnswer": "B"},
  {"id": 13, "type": "true_false", "content": "Các phân tử chuyển động hỗn loạn không ngừng nên chúng có động năng. Các phân tử tương tác với nhau nên chúng có thế năng.", "options": [], "propositions": ["a) Động năng phân tử phụ thuộc vào tốc độ chuyển động của phân tử.", "b) Thế năng phân tử phụ thuộc vào khoảng cách giữa các phân tử.", "c) Nội năng của vật là tổng động năng và thế năng của các phân tử cấu tạo nên vật.", "d) Nội năng của một vật phụ thuộc vào nhiệt độ và thể tích của vật."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "true"}},
  {"id": 14, "type": "true_false", "content": "Vì số phân tử trong một vật vô cùng lớn và các phân tử chuyển động hỗn loạn nên", "options": [], "propositions": ["a) không thể xác định được chính xác độ lớn nội năng của một vật.", "b) trong vật lý người ta chủ yếu quan tâm đến độ biến thiên nội năng của vật.", "c) nội năng của vật không phụ thuộc vào nhiệt độ của vật.", "d) nội năng của vật chỉ phụ thuộc vào thể tích của vật."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 15, "type": "true_false", "content": "Một khối khí đựng trong xi lanh. Ta dùng tay ấn pít tông xuống dưới.<br><img src='https://i.postimg.cc/ry3cTsWd/2.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "propositions": ["a) Nhiệt độ khối khí không thay đổi.", "b) Nội năng của khối khí không đổi.", "c) Thể tích khối khí giảm.", "d) Áp suất khối khí không đổi."], "correctAnswer": {"0": "false", "1": "false", "2": "true", "3": "false"}},
  {"id": 16, "type": "true_false", "content": "Một khối khí đựng trong xi lanh. Ta dùng ngọn lửa đốt nóng xi lanh trong thời gian đủ dài (pít tông không dịch chuyển).<br><img src='https://i.postimg.cc/ry3cTsWd/2.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "propositions": ["a) Nhiệt độ khối khí tăng lên.", "b) Nội năng của khối khí giảm.", "c) Động năng trung bình của phân tử khí tăng.", "d) Áp suất khối khí không đổi."], "correctAnswer": {"0": "true", "1": "false", "2": "true", "3": "false"}},
  {"id": 17, "type": "true_false", "content": "Dùng đèn cồn đun nóng bình đựng nước. Đặt ống nghiệm đựng bột băng phiến vào bình nước. Trong thời gian bột băng phiến đang nóng chảy thì", "options": [], "propositions": ["a) nhiệt độ của băng phiến tăng.", "b) năng lượng nhận từ nguồn nhiệt dùng để phá vỡ liên kết.", "c) thế năng của các phân tử băng phiến thay đổi.", "d) nội năng của bột băng phiến tăng."], "correctAnswer": {"0": "false", "1": "true", "2": "true", "3": "true"}},
  {"id": 18, "type": "true_false", "content": "Nội dung sau đề cập đến nhiệt lượng và nội năng.", "options": [], "propositions": ["a) Nhiệt lượng là số đo nhiệt năng được truyền từ vật này sang vật khác trong quá trình truyền nhiệt.", "b) Khi không có quá trình truyền nhiệt thì không có công.", "c) Nội năng là một dạng năng lượng.", "d) Mọi vật luôn có nội năng."], "correctAnswer": {"0": "true", "1": "false", "2": "true", "3": "true"}},
  {"id": 19, "type": "true_false", "content": "Một học sinh thực hiện thí nghiệm, dùng lực để nén khối khí có thể tích V trong một xi lanh để thể tích khí giảm một lượng ΔV thì nhiệt độ khối khí tăng 0,6 °C.<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "propositions": ["a) Nhiệt độ khối khí tăng phần lớn là do công của lực pít tông thực hiện lên khối khí.", "b) Phần nhiệt tạo ra do ma sát giữa pít tông và xi lanh có nhưng không đáng kể.", "c) Trong thí nghiệm trên, độ tăng nhiệt độ không phụ thuộc ΔV.", "d) Trong thí nghiệm trên, độ tăng nhiệt độ không phụ thuộc V."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 20, "type": "true_false", "content": "Khi bay hơi, các phân tử chất lỏng thoát ra ngoài làm mất đi năng lượng dưới dạng động năng dẫn đến", "options": [], "propositions": ["a) nội năng của khối chất lỏng giảm.", "b) nhiệt độ của khối chất lỏng giảm.", "c) quá trình đông đặc chuyển sang trạng thái rắn.", "d) thể tích khối chất lỏng tăng lên."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 21, "type": "true_false", "content": "Cung cấp nhiệt lượng 1,5 J cho một khối khí trong một xilanh đặt nằm ngang. Chất khí nở ra đẩy pít tông đi một đoạn 6,0 cm. Biết lực ma sát giữa pít tông và xi lanh có độ lớn là 20,0 N, diện tích tiết diện pít tông là 1,0 cm2.", "options": [], "propositions": ["a) Công của khối khí thực hiện là 1,2 J.", "b) Độ biến thiên nội năng của khối khí là 0,50 J.", "c) Trong quá trình dãn nở, áp suất của chất khí là 2,0.10^5 Pa.", "d) Thể tích khí trong xilanh tăng 6,0 lít."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 22, "type": "fill_blank", "content": "Một quả bóng khối lượng 0,100 kg rơi từ độ cao 10,00 m xuống sân và nảy lên được 7,00 m. Lấy g = 9,81 m/s2. Độ biến thiên nội năng của hệ gồm quả bóng, mặt sân và không khí bằng bao nhiêu J (lấy 2 chữ số phần thập phân)?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "2.94"},
  {"id": 23, "type": "fill_blank", "content": "Một vật khối lượng 1,0 kg trượt không vận tốc ban đầu từ đỉnh xuống chân một mặt phẳng dài 21,0 m nghiêng 25° so với mặt ngang. Tốc độ ở chân mặt phẳng là 4,1 m/s. Lấy g = 9,8 m/s2. Tính độ biến thiên nội năng của vật (theo J, lấy 1 chữ số thập phân)?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "78.6"},
  {"id": 24, "type": "fill_blank", "content": "Một viên đạn bằng chì có khối lượng 3,00 g đang bay với tốc độ 240 m/s thì cắm ngập vào một tấm gỗ dày. Nếu có 50% cơ năng viên đạn chuyển thành nội năng của nó thì nội năng viên đạn tăng bao nhiêu J (lấy 1 chữ số thập phân)?", "options": [], "correctAnswer": "43.2"},
  {"id": 25, "type": "fill_blank", "content": "Một tấm nhôm nặng 0,20 kg, trượt xuống mặt phẳng dài 15 m nghiêng 30°. Lấy g = 9,81 m/s2. Biết 90% cơ năng bị tiêu hao chuyển thành nội năng của tấm nhôm. Khi trượt đến chân mặt phẳng nghiêng độ tăng nội năng là 10 J thì phần nhiệt năng tấm nhôm tỏa ra môi trường là bao nhiêu J (lấy 2 chữ số thập phân)?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "3.24"},
  {"id": 26, "type": "fill_blank", "content": "Có hai quả cầu kim loại cùng kích thước, có động năng lần lượt là 100 J và 128 J, chuyển động ngược chiều đến va chạm mềm trực diện. Quả cầu có động năng bé hơn có khối lượng gấp đôi quả cầu còn lại. Độ tăng nội năng của hệ hai quả cầu là bao nhiêu J (chỉ lấy phần nguyên)?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "225"}
],
"thpt_ly_06": [
  {"id": 1, "type": "multiple_choice", "content": "Đại lượng vật lý nào cho biết xu hướng truyền năng lượng nhiệt giữa các vật?", "options": ["A. nhiệt độ.", "B. nhiệt năng.", "C. nhiệt giai.", "D. nhiệt dung."], "correctAnswer": "A"},
  {"id": 2, "type": "multiple_choice", "content": "Nếu nhiệt truyền từ một cái bàn sang một khối băng chuyển động ngang trượt trên mặt bàn thì điều nào sau đây phải đúng?", "options": ["A. Mặt bàn gồ ghề và có ma sát giữa mặt bàn và mặt băng.", "B. Khối băng lạnh hơn cái bàn.", "C. Khối băng đang chuyển pha.", "D. Khối băng đang ở nhiệt độ điểm ba."], "correctAnswer": "B"},
  {"id": 3, "type": "multiple_choice", "content": "Khi hai vật đặt tiếp xúc nhau mà ở trạng thái cân bằng nhiệt thì", "options": ["A. không có năng lượng nhiệt trao đổi giữa hai vật.", "B. khối lượng hai vật bằng nhau.", "C. số phân tử trong hai vật bằng nhau.", "D. vận tốc của hệ hai vật bằng không."], "correctAnswer": "A"},
  {"id": 4, "type": "multiple_choice", "content": "Người ta …(1)… cảm giác nóng lạnh để đo nhiệt độ vì cảm giác này phụ thuộc vào chủ quan của con người và …(2)… được một cách chính xác. Cụm từ còn thiếu (1) và (2) lần lượt là", "options": ["A. “có thể dùng”; “có thể đo”.", "B. “có thể đo”; “có thể dùng”.", "C. “không thể đo”; “không thể dùng”.", "D. “không thể dùng”; “không thể đo”."], "correctAnswer": "D"},
  {"id": 5, "type": "multiple_choice", "content": "Mỗi độ chia (1 °C) trong thang Celsius bằng … của khoảng cách giữa nhiệt độ tan chảy của nước tinh khiết đóng băng và nhiệt độ sôi của nước tinh khiết (ở áp suất tiêu chuẩn). Dấu ba chấm còn thiếu là", "options": ["A. 1/273,16.", "B. 1/100.", "C. 1/10.", "D. 1/273,15."], "correctAnswer": "B"},
  {"id": 6, "type": "multiple_choice", "content": "Giá trị của độ không tuyệt đối trong thang Celsius là", "options": ["A. +273,16 °C.", "B. +273,15 °C.", "C. -273,15 °C.", "D. -273,16 °C."], "correctAnswer": "C"},
  {"id": 7, "type": "multiple_choice", "content": "Nhiệt độ mà nước tinh khiết có thể tồn tại đồng thời ở cả ba thể rắn lỏng và hơi trong trạng thái cân bằng nhiệt ở áp suất 0,006 atm được gọi là", "options": ["A. nhiệt độ sôi của nước.", "B. nhiệt độ điểm hai của nước.", "C. nhiệt độ đóng băng của nước.", "D. nhiệt độ điểm ba của nước."], "correctAnswer": "D"},
  {"id": 8, "type": "multiple_choice", "content": "Công thức chuyển nhiệt độ từ thang Celsius sang thang Kelvin là", "options": ["A. T(K) = t(°C) - 273,16.", "B. T(K) = t(°C) - 273,15.", "C. T(K) = t(°C) + 273,16.", "D. T(K) = t(°C) + 273,15."], "correctAnswer": "D"},
  {"id": 9, "type": "multiple_choice", "content": "Một vật được làm lạnh từ 25 °C xuống 5 °C. Hỏi nhiệt độ của vật theo thang Kelvin giảm đi bao nhiêu độ?", "options": ["A. 20 K.", "B. 15 K.", "C. 253 K.", "D. 293 K."], "correctAnswer": "A"},
  {"id": 10, "type": "multiple_choice", "content": "Nhiệt độ của một vật là đại lượng vật lý đặc trưng cho mức độ …(1)… cấu tạo nên vật. Khi các phân tử chuyển động nhiệt …(2)… thì nhiệt độ của vật càng cao và ngược lại. Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) chuyển động nhiệt của các phân tử; (2) càng nhanh.", "B. (1) chuyển động có hướng của các phân tử; (2) càng nhanh.", "C. (1) chuyển động nhiệt của các phân tử; (2) càng chậm.", "D. (1) chuyển động có hướng của các phân tử; (2) càng chậm."], "correctAnswer": "A"},
  {"id": 11, "type": "multiple_choice", "content": "Thang nhiệt độ Kelvin có nhiệt độ dùng làm mốc là", "options": ["A. nhiệt độ tan chảy của nước tinh khiết đóng băng và nhiệt độ sôi của nước tinh khiết ở áp suất tiêu chuẩn.", "B. nhiệt độ thấp nhất mà các vật có thể đạt được và nhiệt độ mà nước tinh khiết có thể tồn tại đồng thời cả ba thể rắn, lỏng và hơi.", "C. nhiệt độ tan chảy của nước tinh khiết đóng băng và nhiệt độ mà nước tinh khiết có thể tồn tại đồng thời cả ba thể rắn, lỏng và hơi.", "D. nhiệt độ thấp nhất mà các vật có thể đạt được và nhiệt độ sôi của nước tinh khiết ở áp suất tiêu chuẩn."], "correctAnswer": "B"},
  {"id": 12, "type": "multiple_choice", "content": "Với nhiệt kế thủy ngân, nhiệt độ được xác định dựa trên hiện tượng …(1)… của thủy ngân. Thông qua việc xác định …(2)… của cột thủy ngân ở các nhiệt độ khác nhau ta xác định được nhiệt độ cần đo. Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) dãn nở vì nhiệt; (2) khối lượng.", "B. (1) phát sáng vì nhiệt; (2) khối lượng.", "C. (1) phát sáng vì nhiệt; (2) độ cao.", "D. (1) dãn nở vì nhiệt; (2) độ cao."], "correctAnswer": "D"},
  {"id": 13, "type": "multiple_choice", "content": "Thang nhiệt độ (còn gọi là nhiệt giai) không thông dụng là", "options": ["A. thang nhiệt độ Celsius.", "B. thang nhiệt độ Kelvin.", "C. thang nhiệt độ Fahrenheit.", "D. thang nhiệt độ Newton."], "correctAnswer": "D"},
  {"id": 14, "type": "multiple_choice", "content": "Khi hai vật có nhiệt độ chênh lệch tiếp xúc nhau thì", "options": ["A. nhiệt năng truyền từ vật có nhiệt độ thấp hơn sang vật có nhiệt độ cao hơn.", "B. nhiệt năng truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.", "C. công truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.", "D. công truyền từ vật có nhiệt độ thấp hơn sang vật có nhiệt độ cao hơn."], "correctAnswer": "B"},
  {"id": 15, "type": "multiple_choice", "content": "Đặt cốc nhôm đựng 0,2 lít nước ở nhiệt độ 30 °C (NK1) vào trong bình cách nhiệt đựng 0,5 lít nước ở nhiệt độ 60 °C (NK2). Quan sát sự thay đổi nhiệt độ cho tới khi cân bằng nhiệt. Tại sao có thể biết nước trong bình truyền nhiệt năng cho nước trong cốc? Vì thấy số chỉ", "options": ["A. NK1 và số chỉ NK2 đều giảm.", "B. NK1 và số chỉ NK2 đều tăng.", "C. NK1 giảm còn số chỉ NK2 tăng.", "D. NK1 tăng còn số chỉ NK2 giảm."], "correctAnswer": "D"},
  {"id": 16, "type": "multiple_choice", "content": "Trong nhiệt động lực học người ta coi nhiệt độ là đại lượng đặc trưng cho động năng trung bình của chuyển động nhiệt của phân tử. Động năng trung bình của các phân tử cấu tạo nên vật càng lớn thì", "options": ["A. thể tích của vật càng bé.", "B. thể tích của vật càng lớn.", "C. nhiệt độ của vật càng thấp.", "D. nhiệt độ của vật càng cao."], "correctAnswer": "D"},
  {"id": 17, "type": "multiple_choice", "content": "Xét hai nhận định sau: (1) Nhiệt độ của vật liên quan đến vận tốc chuyển động phân tử (động năng phân tử). (2) Thể tích của vật liên quan đến khoảng cách phân tử (lực tương tác và thế năng phân tử). Nhận định nào đúng?", "options": ["A. chỉ (1).", "B. chỉ (2).", "C. cả hai đều đúng.", "D. cả hai đều sai."], "correctAnswer": "C"},
  {"id": 18, "type": "true_false", "content": "Khi hai vật tiếp xúc với nhau", "options": [], "propositions": ["a) Nhiệt năng luôn tự truyền từ vật có nội năng lớn hơn sang vật có nội năng nhỏ hơn.", "b) Nhiệt năng luôn tự truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ nhỏ hơn.", "c) Hai vật không trao đổi nhiệt với nhau nếu nhiệt độ chúng bằng nhau.", "d) Hai vật không trao đổi nhiệt với nhau nếu khối lượng chúng bằng nhau."], "correctAnswer": {"0": "false", "1": "true", "2": "true", "3": "false"}},
  {"id": 19, "type": "true_false", "content": "Điền vào biểu đồ chuyển đổi giữa hai thang nhiệt độ (Celsius và Kelvin).<br><img src='https://i.postimg.cc/sgcg3ys6/77.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "propositions": ["a) (1) 6273.", "b) (2) 4573.", "c) (3) 1811.", "d) (4) -183."], "correctAnswer": {"0": "false", "1": "false", "2": "true", "3": "true"}},
  {"id": 20, "type": "true_false", "content": "Ở nhiệt độ không tuyệt đối các phân tử của tất cả các chất có", "options": [], "propositions": ["a) động năng chuyển động nhiệt cực đại.", "b) thế năng phân tử bằng không.", "c) thế năng phân tử là tối thiểu.", "d) động năng chuyển động nhiệt bằng không."], "correctAnswer": {"0": "false", "1": "false", "2": "true", "3": "true"}},
  {"id": 21, "type": "true_false", "content": "Các nội dung sau đây đề cập đến các thang nhiệt độ.", "options": [], "propositions": ["a) Thang nhiệt độ Celsius có mốc là nhiệt độ nước đá đang tan (0 °C) và nước sôi ở 1 atm (100 °C).", "b) Thang nhiệt độ Kelvin có mốc là 0 K và nhiệt độ điểm ba của nước (273,16 K).", "c) Khi nói 'nhiệt độ nhiệt động lực học' là đề cập đến nhiệt độ trong thang Celsius.", "d) Số chỉ nhiệt độ của vật theo thang Celsius và Kelvin luôn khác nhau."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "true"}},
  {"id": 22, "type": "true_false", "content": "Các nội dung sau đây đề cập đến nhiệt kế thủy ngân.", "options": [], "propositions": ["a) Nhiệt độ được xác định dựa trên hiện tượng dãn nở vì nhiệt của thủy ngân.", "b) Thông qua việc xác định độ cao cột thủy ngân ở các nhiệt độ khác nhau, ta xác định được nhiệt độ cần đo.", "c) Nhiệt độ được xác định dựa trên hiện tượng tăng điện trở vì nhiệt của thủy ngân.", "d) Thông qua việc xác định điện trở của cột thủy ngân ở các nhiệt độ khác nhau, ta xác định được nhiệt độ cần đo."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 23, "type": "fill_blank", "content": "Một học sinh tạo ra thang nhiệt độ Z (°Z) với nước đá tan là -5 °Z và nước sôi là 105 °Z. Nếu dùng nhiệt kế này đo nhiệt độ một vật thấy 61 °Z thì nhiệt độ của vật trong thang Celsius là bao nhiêu °C?", "options": [], "correctAnswer": "60"},
  {"id": 24, "type": "fill_blank", "content": "Lúc 7h30 sáng nhiệt độ là -20 °C, 2 phút sau nhiệt độ tăng lên 7,2 °C. Độ tăng nhiệt độ trung bình trong 2 phút đó theo đơn vị Kelvin/giây là bao nhiêu (lấy 2 chữ số thập phân)?", "options": [], "correctAnswer": "0.23"},
  {"id": 25, "type": "fill_blank", "content": "Nhiệt độ của khối khí trong phòng là 27 °C. Xác định nhiệt độ của khối khí trong thang Fahrenheit (°F, lấy chính xác đến phần nguyên)?", "options": [], "correctAnswer": "81"},
  {"id": 26, "type": "fill_blank", "content": "Mùa nóng, ta thường cho nước đá vào đồ uống để làm mát nó. Hãy cho biết chiều truyền năng lượng nhiệt trong trường hợp này?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "Từ đồ uống sang nước đá"}
],
    "thpt_01": [
  {
    "id": 1,
    "type": "multiple_choice",
    "content": "Đường cong trong hình bên dưới là đồ thị của hàm số nào?<br><img src='https://i.postimg.cc/Qt1Crrny/c1.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. $y = \\frac{x^2 - 3x + 4}{x + 1}$",
      "B. $y = \\frac{x - 1}{x - 2}$",
      "C. $y = \\frac{2x + 1}{x - 1}$",
      "D. $y = \\frac{x^2 - 3x + 1}{x - 2}$"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 2,
    "type": "multiple_choice",
    "content": "Phương trình đường thẳng đi qua hai điểm cực trị của đồ thị hàm số $y = x^3 - 3x^2 + 1$ là",
    "options": [
      "A. $y = -2x + 1$",
      "B. $y = 2x + 1$",
      "C. $y = -2x - 1$",
      "D. $y = 2x - 1$"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 3,
    "type": "multiple_choice",
    "content": "Cho hàm số $y = f(x)$ có bảng biến thiên trên nửa khoảng $[-1; +\\infty)$ như sau: $f'(x) < 0$ trên $(-1; 0)$, $f'(0) = 0$, $f'(x) > 0$ trên $(0; +\\infty)$, $f(0) = -3$. Mệnh đề nào dưới đây đúng?<br><img src='https://i.postimg.cc/x1Z1JCrC/c3.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. $\\min_{[-1; +\\infty)} f(x) = f(-1)$",
      "B. $\\max_{[-1; +\\infty)} f(x) = f(0)$",
      "C. $\\min_{[-1; +\\infty)} f(x) = -3$",
      "D. $\\max_{[-1; +\\infty)} f(x) = -3$"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 4,
    "type": "multiple_choice",
    "content": "Cho hàm số bậc bốn $y = f(x)$ có đồ thị là đường cong trong hình bên. Số nghiệm của phương trình $f(x) = 1$ là<br><img src='https://i.postimg.cc/nrVJwb8g/c4.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 5,
    "type": "multiple_choice",
    "content": "Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x + 2$ trên đoạn $[-2; 0]$ bằng",
    "options": [
      "A. -2",
      "B. 0",
      "C. 2",
      "D. 4"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 6,
    "type": "multiple_choice",
    "content": "Cho hàm số $f(x)$ có bảng biến thiên như sau: $x$ từ $-\\infty$ đến $-1, 0, 1, +\\infty$; $f'(x) > 0$ trên $(-\\infty; -1)$, $f'(x) < 0$ trên $(-1; 0)$, $f'(x) < 0$ trên $(0; 1)$, $f'(x) > 0$ trên $(1; +\\infty)$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?<br><img src='https://i.postimg.cc/MKTw7Sm8/c6.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. $(-\\infty; -1)$",
      "B. $(-1; 0)$",
      "C. $(1; +\\infty)$",
      "D. $(-1; 1)$"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 7,
    "type": "multiple_choice",
    "content": "Số đường tiệm cận của đồ thị hàm số $y = \\frac{x + 1}{x - 2}$ là",
    "options": [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 8,
    "type": "multiple_choice",
    "content": "Tọa độ tâm đối xứng $I$ của đồ thị hàm số $y = \\frac{2x + 1}{x - 1}$ là",
    "options": [
      "A. $I(1; 2)$",
      "B. $I(2; 1)$",
      "C. $I(-1; 2)$",
      "D. $I(1; -1)$"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 9,
    "type": "multiple_choice",
    "content": "Hàm số $y = -x^3 + 3x^2 - 1$ nghịch biến trên khoảng nào?",
    "options": [
      "A. $(0; 2)$",
      "B. $(-\\infty; 0)$ và $(2; +\\infty)$",
      "C. $(2; +\\infty)$",
      "D. $(-\\infty; 2)$"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 10,
    "type": "multiple_choice",
    "content": "Cho hàm số $f(x)$ có bảng biến thiên với $x$ từ $-\\infty$ đến $-2, 0, +\\infty$; $y' > 0$ trên $(-\\infty; -2)$, $y' < 0$ trên $(-2; 0)$, $y' > 0$ trên $(0; +\\infty)$; $y_{CĐ} = 0$ tại $x = -2$, $y_{CT} = -4$ tại $x = 0$. Giá trị cực tiểu của hàm số đã cho bằng",
    "options": [
      "A. -4",
      "B. 0",
      "C. -2",
      "D. 2"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 11,
    "type": "multiple_choice",
    "content": "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị như hình vẽ bên. Mệnh đề nào sau đây đúng?<br><img src='https://i.postimg.cc/hvvYdSRR/c11.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. $a > 0, b > 0, c > 0, d < 0$",
      "B. $a < 0, b < 0, c > 0, d < 0$",
      "C. $a > 0, b < 0, c < 0, d < 0$",
      "D. $a < 0, b > 0, c > 0, d < 0$"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 12,
    "type": "multiple_choice",
    "content": "Hàm số $y = \\frac{x - 1}{x - 2}$ có đồ thị là hình vẽ nào sau đây? Hãy chọn câu trả lời đúng.<br><img src='https://i.postimg.cc/yYwGD4fw/c12.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. Hình A",
      "B. Hình B",
      "C. Hình C",
      "D. Hình D"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 13,
    "type": "true_false",
    "content": "Một công ty sản xuất một loại sản phẩm với chi phí để sản xuất một loại sản phẩm là 600 nghìn đồng và bán ra mỗi sản phẩm là 900 nghìn đồng. Biết rằng số lượng sản phẩm bán ra tăng theo số tiền chi cho quảng cáo là $f(x) = 400 + \\frac{350x}{x + 1}$ (sản phẩm), trong đó $x$ là số tiền chi cho quảng cáo tính theo đơn vị triệu đồng. Khi không chi cho quảng cáo thì sẽ bán được 400 sản phẩm, khi chi cho quảng cáo $x$ triệu đồng thì bán được 750 sản phẩm. Số tiền quảng cáo luôn đảm bảo số lượng sản phẩm bán được là một số nguyên. Cho các phát biểu sau:",
    "options": [],
    "propositions": [
      "a) Lợi nhuận lớn nhất là 210 triệu đồng (kết quả làm tròn đến hàng đơn vị).",
      "b) Lợi nhuận thu được là $L(x) = 120 + \\frac{105x}{x + 1} - x$ (triệu đồng).",
      "c) $L'(x) = \\frac{105}{(x + 1)^2} - 1$.",
      "d) Lợi nhuận thu được lớn nhất khi ta sử dụng số tiền cho quảng cáo là 34 triệu đồng."
    ],
    "correctAnswer": {
      "0": "false",
      "1": "true",
      "2": "true",
      "3": "false"
    }
  },
  {
    "id": 14,
    "type": "true_false",
    "content": "Để làm một cửa sổ dạng một hình bán nguyệt và một hình chữ nhật ghép lại như hình vẽ bên dưới, người ta dùng 8 m dây thép để làm các đường viền. Gọi $x$ là độ dài cạnh của khung hình chữ nhật.<br><img src='https://i.postimg.cc/nLxw1Kfd/2-ds.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "propositions": [
      "a) Giá trị của $h$ (chiều cao hình chữ nhật) tính theo $x$ là $h = \\frac{8 - x - \\frac{\\pi x}{2}}{2}$.",
      "b) Khi diện tích của cửa sổ lớn nhất thì $x = \\frac{16}{4 + \\pi}$.",
      "c) Diện tích của cửa sổ là $S(x) = 4x - \\left(\\frac{1}{2} + \\frac{\\pi}{8}\\right)x^2$.",
      "d) Chiều dài dây để uốn ra hình bán nguyệt là $L = \\frac{\\pi x}{2}$."
    ],
    "correctAnswer": {
      "0": "true",
      "1": "true",
      "2": "true",
      "3": "true"
    }
  },
  {
    "id": 15,
    "type": "true_false",
    "content": "Một cái bình có dạng hình hộp chữ nhật với đáy là hình vuông cạnh 50 cm, chiều cao 80 cm và bên trong đặt một quả cầu sắt bán kính 20 cm. Ban đầu bình không chứa nước. Ta tiến hành dùng một vòi nước cho chảy vào bình với lưu lượng không đổi bằng $V_0$ (cm³/phút). Biết rằng sau khoảng thời gian 120 phút thì nước trong bình đầy. Cho các phát biểu sau:<br><img src='https://i.postimg.cc/DZyj92Z6/3-ds.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "propositions": [
      "a) Thời gian để nước chảy vào bình đủ để ngập hết quả cầu là 48 phút.",
      "b) Sau 24 phút đầu tiên thì mực nước trong bình có chiều cao là 20 cm (kết quả làm tròn đến hàng đơn vị).",
      "c) Lưu lượng nước chảy vào bình $V_0 = 1388$ cm³/phút (kết quả làm tròn đến hàng đơn vị).",
      "d) Thể tích quả cầu sắt là 33150 cm³ (kết quả làm tròn đến hàng đơn vị)."
    ],
    "correctAnswer": {
      "0": "true",
      "1": "true",
      "2": "true",
      "3": "false"
    }
  },
  {
    "id": 16,
    "type": "true_false",
    "content": "Cho hàm số $y = \\frac{x^2 - 3x + 4}{x + 1}$. Cho các phát biểu sau:",
    "options": [],
    "propositions": [
      "a) Tâm đối xứng của đồ thị hàm số là $I(-1; -5)$.",
      "b) Hàm số đồng biến trên khoảng $(-\\infty; +\\infty)$.",
      "c) Đồ thị hàm số có điểm cực tiểu là $(1; 1)$.",
      "d) Giá trị lớn nhất của hàm số trên khoảng $(-1; +\\infty)$ bằng 1."
    ],
    "correctAnswer": {
      "0": "true",
      "1": "false",
      "2": "true",
      "3": "false"
    }
  },
  {
    "id": 17,
    "type": "fill_blank",
    "content": "Cho hàm số $y = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) có đồ thị như hình vẽ bên. Tìm giá trị lớn nhất của hàm số trên đoạn $[-1; 5]$.<br><img src='https://i.postimg.cc/Qd3R6ZpT/1-tln.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "correctAnswer": "201"
  },
  {
    "id": 18,
    "type": "fill_blank",
    "content": "Cho hàm số $y = \\frac{ax - b}{cx + 1}$ có đồ thị như hình vẽ bên (với $a, b, c$ là các số nguyên). Tính giá trị của biểu thức $T = 2a - b + c$.<br><img src='https://i.postimg.cc/B6kzHrSn/2-tln.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "correctAnswer": "3"
  },
  {
    "id": 19,
    "type": "fill_blank",
    "content": "Cho hàm số $y = \\frac{ax^2 + bx + c}{x + d}$ có đồ thị như hình vẽ bên (với $a, b, c, d$ là các số nguyên). Tính $y(-2)$ (làm tròn kết quả đến hàng phần chục).<br><img src='https://i.postimg.cc/Y0Fs3djH/3-TLN.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "correctAnswer": "-1.5"
  },
  {
    "id": 20,
    "type": "fill_blank",
    "content": "Giả sử doanh số (tính bằng số sản phẩm) của một sản phẩm mới tuân theo quy luật logistic được mô hình hóa bằng hàm số $f(t) = \\frac{5000}{1 + 5e^{-t}}$, $t \\ge 0$ (thời gian $t$ tính bằng năm). Đạo hàm $f'(t)$ biểu thị tốc độ bán hàng. Hỏi sau khi phát hành thì tốc độ bán hàng đạt lớn nhất bằng bao nhiêu?",
    "options": [],
    "correctAnswer": "1250"
  },
  {
    "id": 21,
    "type": "fill_blank",
    "content": "Một doanh nghiệp sản xuất một sản phẩm làm đẹp, trung bình mỗi ngày bán được 150 sản phẩm với giá 650 nghìn đồng/sản phẩm. Nếu giảm giá bán 7 nghìn đồng/sản phẩm thì bán được thêm 1 sản phẩm mỗi ngày. Chi phí trung bình $\\bar{C}(x) = 0,004x^2 - 1,6x + 468 + \\frac{16000}{x}$ (nghìn đồng/sản phẩm), $x$ là số sản phẩm bán ra, thuế mỗi sản phẩm là 32 nghìn đồng. Tìm doanh thu biên (đơn vị: nghìn đồng) ứng với số sản phẩm bán ra để đạt lợi nhuận tối đa.",
    "options": [],
    "correctAnswer": "229"
  },
  {
    "id": 22,
    "type": "fill_blank",
    "content": "Trong một công viên có một hồ nước và một đường đi lát gạch. Trên hệ trục $Oxy$, bờ hồ coi như một nhánh đồ thị $y = \\frac{2x + 1}{x - 1}$ và đường đi ứng với $d: y = -x + 4$. Đặt 2 cột đèn trên bờ hồ và 2 cột đèn trên đường đi tạo thành một hình vuông. Tính khoảng cách giữa hai cột đèn trên bờ hồ (làm tròn đến hàng phần trăm).<br><img src='https://i.postimg.cc/jSckZwxB/6-TLN.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "correctAnswer": "1.89"
  }
],
  "thpt_lytutrong_01": [
    // --- PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (12 CÂU) ---[cite: 39, 40, 41, 49]
    { id: 1, type: "multiple_choice", content: "Cho hàm số $y = f(x)$ có bảng biến thiên như sau:<br><img src='https://i.postimg.cc/xjthwfy6/c1.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Giá trị cực đại của hàm số $y = f(x)$ bằng", options: ["A. 1.", "B. 5.", "C. 0.", "D. -3."], correctAnswer: "C" }, //[cite: 39, 49]
    { id: 2, type: "multiple_choice", content: "Cho hàm số $y = f(x)$ liên tục và có bảng biến thiên trên đoạn $[-1; 3]$ như hình vẽ bên dưới. Giá trị lớn nhất của hàm số trên đoạn $[-1; 3]$ bằng<br><img src='https://i.postimg.cc/Cxf2njyZ/c2.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'>", options: ["A. 4.", "B. 5.", "C. 1.", "D. 0."], correctAnswer: "B" }, //[cite: 39, 49]
    { id: 3, type: "multiple_choice", content: "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R}$ và có bảng biến thiên như sau:<br><img src='https://i.postimg.cc/FzRWrSgW/c3.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Hàm số $y = f(x)$ nghịch biến trên khoảng nào dưới đây?", options: ["A. $(-\\infty; 0)$.", "B. $(-1; 0)$.", "C. $(-1; 1)$.", "D. $(0; 1)$."], correctAnswer: "B" }, //[cite: 39, 49]
    { id: 4, type: "multiple_choice", content: "Cho hàm số $y = f(x)$ có đồ thị như hình vẽ sau:<br><img src='https://i.postimg.cc/wTnfz7tR/c4.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Điểm cực đại của đồ thị hàm số đã cho là:", options: ["A. $(-2; -1)$.", "B. $(1; 2)$.", "C. $(-1; -2)$.", "D. $(2; 1)$."], correctAnswer: "C" }, //[cite: 39, 40, 49]
    { id: 5, type: "multiple_choice", content: "Cho hàm số $f(x)$ liên tục trên $[-1; 5]$ và có đồ thị trên đoạn $[-1; 5]$ như hình vẽ bên dưới. Giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[-1; 5]$ bằng<br><img src='https://i.postimg.cc/d06jh10H/c5.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'>", options: ["A. 2.", "B. -2.", "C. 1.", "D. 3."], correctAnswer: "B" }, //[cite: 40, 49]
    { id: 6, type: "multiple_choice", content: "Đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{2x - 5}{4 - x}$ có phương trình là", options: ["A. $x = 4; y = -2$.", "B. $x = 4; y = \\frac{1}{2}$.", "C. $x = 4; y = 5$.", "D. $x = -4; y = -2$."], correctAnswer: "A" }, //[cite: 40, 49]
    { id: 7, type: "multiple_choice", content: "Cho hàm số $y = f(x)$ liên tục và có đồ thị như hình vẽ.<br><img src='https://i.postimg.cc/4y762QQq/c7.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Đường tiệm cận ngang của đồ thị có phương trình nào sau đây?", options: ["A. $x = 1$.", "B. $x = -1$.", "C. $y = 1$.", "D. $y = -1$."], correctAnswer: "C" }, //[cite: 40, 49]
    { id: 8, type: "multiple_choice", content: "Hàm số nào dưới đây có đồ thị như hình vẽ sau?<br><img src='https://i.postimg.cc/mZJNzKTJ/c8.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'>", options: ["A. $y = x^3 - 3x + 2$.", "B. $y = \\frac{x^2 - 4x + 5}{x - 2}$.", "C. $y = \\frac{x}{x - 1}$.", "D. $y = -x^3 + 3x^2 - 1$."], correctAnswer: "C" }, //[cite: 40, 41, 49]
    { id: 9, type: "multiple_choice", content: "Đường cong như hình vẽ dưới đây là đồ thị của hàm số nào?<br><img src='https://i.postimg.cc/RhHtLVMV/C9.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'>", options: ["A. $y = \\frac{1}{3}x^3 - x^2 - 4$.", "B. $y = -\\frac{1}{3}x^3 + 3x^2 - 1$.", "C. $y = \\frac{2x - 2}{3x - 1}$.", "D. $y = \\frac{-x^2 + 2x - 2}{x - 1}$."], correctAnswer: "D" }, //[cite: 41, 49]
    { id: 10, type: "multiple_choice", content: "Cho hàm số $y = f(x) = ax^3 + bx^2 + cx + d$ $(a \\neq 0)$ có đồ thị như hình vẽ dưới đây.<br><img src='https://i.postimg.cc/1zvpCWbV/C10.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Hàm số $y = f(x)$ đồng biến trên khoảng nào dưới đây?", options: ["A. $(-\\infty; 0)$.", "B. $(-1; 2)$.", "C. $(2; +\\infty)$.", "D. $(0; 2)$."], correctAnswer: "D" }, //[cite: 41, 49]
    { id: 11, type: "multiple_choice", content: "Cho hàm số $y = \\frac{2x^2 - 3x - 1}{x - 2}$. Tiệm cận xiên của đồ thị hàm số là đường thẳng:", options: ["A. $y = 2x + 3$.", "B. $y = 2x - 1$.", "C. $y = 2x - 3$.", "D. $y = 2x + 1$."], correctAnswer: "D" }, //[cite: 41, 49]
    { id: 12, type: "multiple_choice", content: "Cho hàm số $y = f(x)$ liên tục và có bảng biến thiên như hình vẽ.<br><img src='https://i.postimg.cc/Y0WYSt0G/C12.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Đường tiệm cận đứng của đồ thị có phương trình nào sau đây?", options: ["A. $x = 1$.", "B. $x = 2$.", "C. $y = 2$.", "D. $y = 1$."], correctAnswer: "B" }, //[cite: 41, 49]

    // --- PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG/SAI (2 CÂU) ---[cite: 41, 42, 49]
    { id: 13, type: "true_false", content: "Cho hàm số $y = \\frac{ax + b}{cx - 1}$ có đồ thị như hình vẽ sau:<br><img src='https://i.postimg.cc/Pq5DwWJ4/1-DS.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'>", propositions: ["a) Hàm số đã cho đồng biến trên các khoảng $(-\\infty; 1)$ và $(1; +\\infty)$.", "b) Hàm số $y = f(x) = \\frac{2x + 1}{x - 1}$.", "c) $c = -1$.", "d) Hàm số $y = f(x)$ không có cực trị."], correctAnswer: {0: "false", 1: "true", 2: "false", 3: "true"} }, //[cite: 41, 42, 49]
    { id: 14, type: "true_false", content: "Cho hàm số $(C): y = f(x) = \\frac{2x^2 + 3x - 5}{x + 3}$.", propositions: ["a) Đồ thị $(C)$ của hàm số không có đường tiệm cận ngang.", "b) Giao của 2 đường tiệm cận là $I(3; 3)$.", "c) Phương trình đường tiệm cận xiên của $(C)$ có phương trình $y = 2x - 3$.", "d) Đường tiệm cận đứng của $(C)$ có phương trình $x = 3$."], correctAnswer: {0: "true", 1: "false", 2: "true", 3: "false"} }, //[cite: 42, 49]

    // --- PHẦN III: CÂU TRẢ LỜI NGẮN (4 CÂU ĐỀ LÝ TỰ TRỌNG + 2 CÂU CHUYÊN ĐỀ) ---[cite: 31, 32, 42, 43, 49]
    { id: 15, type: "fill_blank", content: "Hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ có giá trị cực đại và giá trị cực tiểu lần lượt là $a$ và $b$. Tính $a + 5b$.", correctAnswer: "14" }, //[cite: 42, 49]
    { id: 16, type: "fill_blank", content: "Một hình chóp cụt lục giác đều có thể tích là $\\frac{7\\sqrt{6}}{2}$, cạnh đáy lớn có độ dài gấp hai lần cạnh đáy nhỏ. Khi trải phẳng hình chóp cụt lục giác đều trên một mặt phẳng thì đáy lớn nội tiếp trên 1 đường tròn (như hình vẽ). Tính độ dài cạnh đáy nhỏ của hình chóp cụt lục giác đều biết đường tròn ngoại tiếp đáy lớn có bán kính đạt giá trị nhỏ nhất (kết quả làm tròn đến hàng phần trăm).<br><img src='https://i.postimg.cc/tTLnw8k4/C2-TLN.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'>", correctAnswer: "1.07" }, //[cite: 42, 49]
    { id: 17, type: "fill_blank", content: "Nhà ông An ở gần bờ kênh, ông dự định thiết kế một ao nuôi vịt như sau: ông bắc một chiếc cầu thứ nhất từ nhà tại điểm $A$ đến điểm $M$ trên bờ kênh. Tại điểm $M$ ông rào một ao hình tròn có đường kính bằng $MC$ và bắc thêm một cây cầu thứ hai từ $M$ đến một điểm $D$ trên bờ ao. Hằng ngày ông đi từ nhà ra kênh trên cái cầu thứ nhất rồi từ đó đi qua cái cầu thứ 2 rồi đi theo cung tròn của cái ao đến chuồng vịt tại $C$ để cho vịt ăn. Hỏi độ dài của cây cầu thứ nhất là bao nhiêu km biết ông đi quãng đường dài nhất với góc $\\widehat{AMD} = 120^\\circ$ và nhà ông cách bờ kênh $200\\text{ m}$, $HC = 1\\text{ km}$ (kết quả làm tròn đến hàng phần trăm)?<br><img src='https://i.postimg.cc/Qd09hFmS/C3-TL.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'>", correctAnswer: "0.37" }, //[cite: 42, 43, 49]
    { id: 18, type: "fill_blank", content: "Một nhà máy A chuyên sản xuất một loại sản phẩm cho nhà máy B, nhà máy A chỉ bán sản phẩm cho nhà máy B và nhà máy B cam kết thu mua hết số sản phẩm mà nhà máy A sản xuất được. Nhà máy A có khả năng sản xuất được tối đa là 200 tấn sản phẩm trong 1 tháng. Nếu bán ra $x$ tấn sản phẩm cho nhà máy B thì giá bán mỗi tấn sản phẩm là $45 - 0,0002x^2$ triệu đồng. Trong một tháng nhà máy A phải chi phí cho nhân công và chi cho khấu hao máy móc một lượng cố định là 150 triệu đồng, ngoài ra khi sản xuất mỗi tấn sản phẩm thì nhà máy phải chi phí thêm cho mua nguyên liệu là 34 triệu đồng. Biết rằng nhà máy A phải nộp 6% doanh thu cho cơ quan thuế. Tính lợi nhuận sau thuế (lợi nhuận sau khi đã trừ tiền thuế) lớn nhất thu được trong 1 tháng của nhà máy A (đơn vị tính là triệu đồng và kết quả làm tròn đến hàng đơn vị).", correctAnswer: "521" }, //[cite: 43, 49]
    { id: 19, type: "fill_blank", content: "Độ giảm huyết áp của một bệnh nhân được cho bởi công thức $G(x) = 0,035x^2(15 - x)$, trong đó $x$ là liều lượng thuốc được tiêm cho bệnh nhân ($x$ được tính bằng miligam). Tính liều lượng thuốc cần tiêm cho bệnh nhân để huyết áp giảm nhiều nhất.", correctAnswer: "10" }, //[cite: 31]
    { id: 20, type: "fill_blank", content: "Một ông nông dân có $240\\text{ m}$ hàng rào và muốn rào lại cánh đồng hình chữ nhật tiếp giáp với một con sông. Ông không cần rào cho phía giáp bờ sông. Hỏi ông có thể rào được cánh đồng với diện tích lớn nhất là bao nhiêu $\\text{m}^2$?", correctAnswer: "7200" } //[cite: 32]
],  
    "tsa_toan_01": [
  {"id": 1, "type": "multiple_choice", "content": "Phương trình lượng giác $2\\sin x=1$ có tập nghiệm là", "options": ["A. $\\left\\{\\frac{\\pi}{6}+k2\\pi\\mid k\\in\\mathbb{Z}\\right\\}$.", "B. $\\left\\{\\frac{\\pi}{6}+k2\\pi\\mid k\\in\\mathbb{Z}\\right\\}\\cup\\left\\{\\frac{5\\pi}{6}+k2\\pi\\mid k\\in\\mathbb{Z}\\right\\}$.", "C. $\\left\\{\\frac{\\pi}{6}+k\\pi\\mid k\\in\\mathbb{Z}\\right\\}$.", "D. $\\left\\{\\frac{\\pi}{6}+k\\pi\\mid k\\in\\mathbb{Z}\\right\\}\\cup\\left\\{\\frac{5\\pi}{6}+k\\pi\\mid k\\in\\mathbb{Z}\\right\\}$."], "correctAnswer": "B", "explanation": ""},
  {"id": 2, "type": "drag_drop", "content": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:<br><img src='https://i.postimg.cc/BvhyP9Zw/2.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><br>1) Hàm số đã cho đồng biến trên khoảng [1].<br>2) Hàm số đã cho nghịch biến trên khoảng [2].", "choices": ["$(-\\infty;-1)$", "$(1;+\\infty)$", "$(-3;1)$", "$(0;1)$"], "correctAnswer": ["$(1;+\\infty)$", "$(0;1)$"], "explanation": ""},
  {"id": 3, "type": "true_false", "content": "Cho hình chóp $S.ABCD$ có đáy là hình vuông $ABCD$, cạnh bên $SA$ vuông góc với mặt phẳng đáy.<br><img src='https://i.postimg.cc/KjTsW1PT/3.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Xét tính đúng sai của các khẳng định sau:", "options": [], "propositions": ["a) $BC\\perp SA$.", "b) $SC\\perp SA$.", "c) $SC\\perp SB$.", "d) $BC\\perp SB$."], "correctAnswer": {"0": "true", "1": "false", "2": "false", "3": "true"}, "explanation": ""},
  {"id": 4, "type": "true_false", "content": "Cho $a, b$ là hai số dương khác $1$. Xét tính đúng sai của các khẳng định sau:", "options": [], "propositions": ["a) $a^{\\log_a b}=ab$.", "b) $\\log_a b=\\frac{1}{\\log_b a}$."], "correctAnswer": {"0": "false", "1": "true"}, "explanation": ""},
  {"id": 5, "type": "true_false", "content": "Từ xa xưa, các nhà triết học cho rằng vật chất được tạo thành từ 5 nguyên tố cơ bản tương ứng với 5 khối đa diện lồi đều của Plato:<br><img src='https://i.postimg.cc/hPFYd0ns/5.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Xét tính đúng sai của các khẳng định sau:", "options": [], "propositions": ["a) Khối bát diện đều có số đỉnh là $8$.", "b) Khối lập phương có số mặt là $6$.", "c) Khối hai mươi mặt đều có số cạnh là $20$."], "correctAnswer": {"0": "false", "1": "true", "2": "false"}, "explanation": ""},
  {"id": 6, "type": "multiple_choice", "content": "Tập xác định của hàm số $y=\\sqrt{-x^2+2x+15}+\\sqrt{-16+x^2}$ là", "options": ["A. $D=[4;5]$.", "B. $D=[-3;4]$.", "C. $D=(-\\infty;-4]\\cup[-3;+\\infty)$.", "D. $D=[-4;5]$."], "correctAnswer": "A", "explanation": ""},
  {"id": 7, "type": "multiple_choice", "content": "Minh có $5$ vé đi xem bóng đá và muốn mời thêm các bạn đi xem cùng. Tuy nhiên, Minh có tới $10$ người bạn cũng thích xem bóng đá. Minh có bao nhiêu cách mời $4$ bạn đi xem cùng mình?", "options": ["A. $C_{10}^4$.", "B. $A_{10}^4$.", "C. $C_{10}^5$.", "D. $A_{10}^5$."], "correctAnswer": "A", "explanation": ""},
  {"id": 8, "type": "fill_blank", "content": "Đạo hàm của hàm số $f(x)=\\log_5(2x+1)^3$ tại $x=1$ bằng $\\frac{a}{\\ln b}$ với $a, b$ là các số nguyên dương. Giá trị của $a+b$ bằng ________.", "options": [], "correctAnswer": "7", "explanation": ""},
  {"id": 9, "type": "true_false", "content": "Cho $\\lim u_n=-\\infty$ và $\\lim v_n=L$ với $L>0$. Xét tính đúng sai của các khẳng định sau:", "options": [], "propositions": ["a) $\\lim(u_n v_n)=-\\infty$.", "b) $\\lim\\frac{v_n}{u_n}=0$.", "c) $\\lim\\frac{u_n}{v_n}=+\\infty$."], "correctAnswer": {"0": "true", "1": "true", "2": "false"}, "explanation": ""},
  {"id": 10, "type": "multiple_choice", "content": "Cho hàm số $y=f(x)$ liên tục trên $[a;b]$ và $f(x)\\le 0, \\forall x\\in[a;b]$. Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục $Ox$ và hai đường thẳng $x=a, x=b$ ($a<b$) được tính bằng công thức nào sau đây?", "options": ["A. $S=\\int_a^b f(x)\\,dx$.", "B. $S=-\\int_a^b f(x)\\,dx$.", "C. $S=\\pi\\int_a^b f(x)\\,dx$.", "D. $S=\\pi\\int_a^b [f(x)]^2\\,dx$."], "correctAnswer": "B", "explanation": ""},
  {"id": 11, "type": "multiple_choice", "content": "Giáo viên chủ nhiệm lớp 12A khảo sát thời gian sử dụng điện thoại một ngày của học sinh trong lớp:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Thời gian (phút)</th><td class='border border-gray-300 p-2'>[30;60)</td><td class='border border-gray-300 p-2'>[60;90)</td><td class='border border-gray-300 p-2'>[90;120)</td><td class='border border-gray-300 p-2'>[120;150)</td></tr><tr><th class='border border-gray-300 p-2'>Số học sinh</th><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>10</td><td class='border border-gray-300 p-2'>15</td></tr></table><br>Làm tròn kết quả đến hàng phần trăm, độ lệch chuẩn của mẫu số liệu ghép nhóm trên là", "options": ["A. $100,32$.", "B. $10,06$.", "C. $1291,56$.", "D. $35,94$."], "correctAnswer": "D", "explanation": ""},
  {"id": 12, "type": "multiple_choice", "content": "Họ tất cả các nguyên hàm của hàm số $f(x)=\\frac{1}{x+2}$ là", "options": ["A. $F(x)=\\frac{1}{2}\\ln(x+2)+C$.", "B. $F(x)=\\frac{1}{(x+2)^2}+C$.", "C. $F(x)=\\ln|x+2|+C$.", "D. $F(x)=-\\frac{1}{(x+2)^2}+C$."], "correctAnswer": "C", "explanation": ""},
  {"id": 13, "type": "drag_drop", "content": "Trong không gian $Oxyz$, cho hai điểm $A(1;2;-4)$, $B(3;0;0)$.<br>1) Toạ độ của điểm $M$ thoả mãn điều kiện $\\overrightarrow{AM}=\\frac{1}{2}\\overrightarrow{AB}$ là [1].<br>2) Toạ độ của điểm $N$ thoả mãn điều kiện $\\overrightarrow{NA}=2\\overrightarrow{AB}$ là [2].", "choices": ["$(2;1;-2)$", "$(4;2;-4)$", "$(-1;4;8)$", "$(-3;6;-12)$"], "correctAnswer": ["$(2;1;-2)$", "$(-3;6;-12)$"], "explanation": ""},
  {"id": 14, "type": "multiple_choice", "content": "Cho mặt cầu $(S)$ có tâm $I$ và bán kính $R=7$. Đường thẳng $d$ cắt mặt cầu tại hai điểm $A, B$ thỏa mãn $AB=6$. Khoảng cách từ tâm $I$ đến đường thẳng $d$ bằng", "options": ["A. $\\sqrt{31}$.", "B. $2\\sqrt{10}$.", "C. $\\sqrt{13}$.", "D. $\\sqrt{58}$."], "correctAnswer": "B", "explanation": ""},
  {"id": 15, "type": "drag_drop", "content": "Trong một câu lạc bộ thiếu nhi có $40$ thành viên: có $14$ thành viên thích đá bóng, $13$ thành viên thích bơi lội, và $5$ thành viên vừa thích đá bóng vừa thích bơi lội. Chọn ngẫu nhiên một thành viên từ câu lạc bộ.<br>1) Xác suất thành viên đó thích đá bóng là [1].<br>2) Xác suất thành viên đó thích đá bóng hoặc thích bơi lội là [2].", "choices": ["$\\frac{11}{20}$", "$\\frac{7}{20}$", "$\\frac{27}{40}$", "$\\frac{19}{40}$"], "correctAnswer": ["$\\frac{7}{20}$", "$\\frac{11}{20}$"], "explanation": ""},
  {"id": 16, "type": "multiple_choice", "content": "Biết bán kính bánh xe BMW 520i là $23\\text{ cm}$. Giữa bánh xe có logo của hãng. Giả sử tại vị trí $A$ logo bánh xe đang như hình vẽ:<br><img src='https://i.postimg.cc/rwMYhFKP/16a.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Bánh xe lăn đến vị trí $B$ cách $A$ một khoảng $80,57\\text{ m}$ thì tại $B$ logo bánh xe ở vị trí nào trong các hình ảnh dưới đây?<br><img src='https://i.postimg.cc/ydgfJDrG/16b.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Hình A.", "B. Hình B.", "C. Hình C.", "D. Hình D."], "correctAnswer": "D", "explanation": ""},
  {"id": 17, "type": "fill_blank", "content": "Giới hạn $L=\\lim\\frac{1+3+5+\\dots+(2n-1)}{n^2+1}$ bằng ________.", "options": [], "correctAnswer": "1", "explanation": ""},
  {"id": 18, "type": "multiple_choice", "content": "Trong không gian $Oxyz$, cho điểm $M(2;3;-4)$. Phương trình của mặt phẳng $(P)$ chứa trục $Oz$ và đi qua điểm $M$ là", "options": ["A. $3x-2y=0$.", "B. $4y+3z=0$.", "C. $3x+2y+3z=0$.", "D. $4x-3y+1=0$."], "correctAnswer": "A", "explanation": ""},
  {"id": 19, "type": "true_false", "content": "Vận tốc (đơn vị: km/h) của $20$ ô tô khi đi qua một trạm kiểm tra tốc độ được thống kê theo thứ tự không giảm:<br>$42; 43; 43; 46; 46; 47; 48; 50; 50; 52; 54; 54; 55; 55; 56; 57; 58; 60; 62; 62$.<br>Xét tính đúng sai của các khẳng định sau:", "options": [], "propositions": ["a) Khoảng biến thiên của mẫu số liệu là $20$.", "b) Khoảng tứ phân vị của mẫu số liệu là $53$.", "c) Độ lệch chuẩn của mẫu số liệu (làm tròn đến hàng phần trăm) là $6,12$."], "correctAnswer": {"0": "true", "1": "false", "2": "true"}, "explanation": ""},
  {"id": 20, "type": "fill_blank", "content": "Bác An gửi tiết kiệm ngân hàng theo hình thức góp hàng quý, với lãi suất $0,55\\%$/quý. Lần đầu tiên bác An gửi $2$ triệu đồng; cứ sau mỗi quý bác An gửi nhiều hơn số tiền đã gửi quý trước là $200$ nghìn đồng. Giả sử lãi suất không đổi trong suốt thời gian gửi. Sau $1$ năm bác An nhận được tổng số tiền là ________ đồng (làm tròn đến hàng đơn vị).", "options": [], "correctAnswer": "9321637", "explanation": ""},
  {"id": 21, "type": "fill_blank", "content": "Cho tập hợp $A=\\{1;2;3;\\dots;42\\}$. Số cách chọn ra hai phần tử của $A$ sao cho tích của chúng chia hết cho $4$ bằng ________.", "options": [], "correctAnswer": "420", "explanation": ""},
  {"id": 22, "type": "multiple_choice", "content": "Gọi $S$ là tập hợp tất cả các giá trị nguyên của $m$ thuộc đoạn $[-2025;2025]$ để hàm số $y=\\ln(x^2-2x-m+1)$ có tập xác định là $\\mathbb{R}$. Số phần tử của tập hợp $S$ là", "options": ["A. $2026$.", "B. $2025$.", "C. $2024$.", "D. $2023$."], "correctAnswer": "B", "explanation": ""},
  {"id": 23, "type": "true_false", "content": "Cho phương trình $25^x-m\\cdot 5^{x+1}+7m^2-7=0$. Đặt $5^x=t$ ($t>0$). Gọi $S$ là tập hợp tất cả các giá trị nguyên của tham số $m$ để phương trình đã cho có hai nghiệm phân biệt. Xét tính đúng sai của các khẳng định sau:", "options": [], "propositions": ["a) Phương trình đã cho tương đương $t^2-5mt+7m^2-7=0$ (*).", "b) Với mỗi nghiệm $t$ dương của phương trình (*) cho ta một nghiệm $x$ của phương trình ban đầu.", "c) Tổng tất cả các phần tử của $S$ bằng $0$."], "correctAnswer": {"0": "true", "1": "true", "2": "false"}, "explanation": ""},
  {"id": 24, "type": "fill_blank", "content": "Biết đồ thị hàm số $y=f(x)=ax^4+bx^2+c$ có hai điểm cực trị là $A(0;-3)$ và $B(1;-5)$. Khi đó, giá trị $f(2)$ bằng ________.", "options": [], "correctAnswer": "13", "explanation": ""},
  {"id": 25, "type": "true_false", "content": "Xét tính đúng sai của các khẳng định sau:", "options": [], "propositions": ["a) Diện tích của hình phẳng được giới hạn bởi đường cong $y=3x^2+1$, trục hoành và hai đường thẳng $x=0, x=2$ là $10$ (đơn vị diện tích).", "b) Cho hình phẳng $D$ giới hạn bởi đường cong $y=\\sqrt{x^2+1}$, trục hoành và các đường thẳng $x=0, x=1$. Khối tròn xoay được tạo thành khi quay $D$ quanh $Ox$ có thể tích là $V=\\frac{4}{3}$ (đơn vị thể tích)."], "correctAnswer": {"0": "true", "1": "false"}, "explanation": ""},
  {"id": 26, "type": "true_false", "content": "Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $B(2;-1)$, phương trình đường thẳng chứa đường cao $AH: x+2y+10=0$, phương trình đường thẳng chứa trung tuyến $CM: 3x-2y+5=0$. Xét tính đúng sai của các khẳng định sau:", "options": [], "propositions": ["a) Phương trình đường thẳng $BC: 2x-y-5=0$.", "b) Toạ độ của điểm $C$ là $(-15;-25)$.", "c) Toạ độ của điểm $A$ là $\\left(-7;-\\frac{3}{2}\\right)$."], "correctAnswer": {"0": "true", "1": "false", "2": "true"}, "explanation": ""},
  {"id": 27, "type": "true_false", "content": "Một chiếc hộp kín chứa $2$ quả bóng đỏ và $18$ quả bóng vàng có cùng kích thước. Ba bạn Nhi, Phương, Quân lần lượt chọn ngẫu nhiên một quả bóng từ hộp và không hoàn trả lại. Người nào lấy được quả bóng đỏ trước là người thắng cuộc. Xét tính đúng sai của các khẳng định sau:", "options": [], "propositions": ["a) Trong một lần chơi, người chơi đầu tiên có xác suất thắng lớn nhất.", "b) Trong một lần chơi, xác suất thắng của người chơi thứ hai là $0,09$."], "correctAnswer": {"0": "true", "1": "false"}, "explanation": ""},
  {"id": 28, "type": "fill_blank", "content": "Khoa Công nghệ thông tin sử dụng hệ thang điểm gồm $8$ bậc ($A, B^+, B, C^+, C, D^+, D, F$). Theo nguyên lý Dirichlet, để chắc chắn có một thang điểm có ít nhất $10$ sinh viên cùng đạt trong một học phần thì cần tối thiểu ________ sinh viên đăng ký vào lớp học phần đó.", "options": [], "correctAnswer": "73", "explanation": ""},
  {"id": 29, "type": "multiple_choice", "content": "Cho $a$ là số tự nhiên sao cho $B=a^4\\cdot(a+1)^5$ có đúng $60$ ước là số nguyên. Tổng các ước là số nguyên tố của $B$ bằng", "options": ["A. $18$.", "B. $9$.", "C. $10$.", "D. $5$."], "correctAnswer": "D", "explanation": ""},
  {"id": 30, "type": "true_false", "content": "Chi phí để sản xuất $x$ cuốn sách được cho bởi $C(x)=0,0001x^2-0,2x+10000$ (đơn vị: vạn đồng). Mỗi cuốn sách khi phát hành có thêm chi phí là $5000$ đồng. Gọi $T(x)$ là tổng chi phí và $M(x)=\\frac{T(x)}{x}$ là chi phí trung bình để sản xuất và phát hành $x$ cuốn sách (biết $1$ vạn đồng $= 10\\,000$ đồng). Mỗi phát biểu sau đây là đúng hay sai?", "options": [], "propositions": ["a) Sản xuất $1000$ cuốn sách sẽ tiết kiệm chi phí sản xuất nhất.", "b) $M(x)=\\frac{0,0001x^2+4,8x+10000}{x}$ (vạn đồng).", "c) Chi phí trung bình để sản xuất và phát hành $x$ cuốn sách đạt giá trị nhỏ nhất là $23$ nghìn đồng/1 cuốn sách."], "correctAnswer": {"0": "true", "1": "false", "2": "true"}, "explanation": ""},
  {"id": 31, "type": "multiple_choice", "content": "Cửa hàng bánh của chị Mai bán bánh Trung thu theo cách: bán cho người đầu tiên $\\frac{1}{2}$ số bánh và tặng thêm $2$ chiếc, bán cho người thứ hai $\\frac{1}{2}$ số bánh còn lại và tặng thêm $2$ chiếc. Tiếp tục như vậy, sau khi bán cho người thứ bảy thì cửa hàng chỉ còn $1$ chiếc bánh. Số bánh nhân đặc biệt mà cửa hàng chị Mai đã bán trong tết Trung thu năm nay là bao nhiêu?", "options": ["A. $507$.", "B. $508$.", "C. $636$.", "D. $635$."], "correctAnswer": "D", "explanation": ""},
  {"id": 32, "type": "drag_drop", "content": "Cho khai triển $(1+x+x^2+x^3)^5=a_0+a_1x+a_2x^2+\\dots+a_{15}x^{15}$.<br>1) Giá trị của $S=a_0+a_1+\\dots+a_{15}$ bằng [1].<br>2) Giá trị của $a_{10}$ bằng [2].", "choices": ["$1024$", "$100$", "$101$", "$128$"], "correctAnswer": ["$1024$", "$101$"], "explanation": ""},
  {"id": 33, "type": "true_false", "content": "Với mỗi số nguyên dương $n$, đặt $u_n=\\frac{n}{\\sqrt{4n^4+1}}+\\frac{n}{\\sqrt{4n^4+2}}+\\dots+\\frac{n}{\\sqrt{4n^4+n}}$. Mỗi phát biểu sau đây là đúng hay sai?", "options": [], "propositions": ["a) $\\lim_{n\\to+\\infty}\\frac{n}{\\sqrt{4n^4+1}}=0$.", "b) $\\lim_{n\\to+\\infty}u_n=0$.", "c) Tồn tại vô số số nguyên dương $n$ để $u_n>\\frac{10^{90}}{2\\cdot 10^{90}+1}$."], "correctAnswer": {"0": "true", "1": "false", "2": "true"}, "explanation": ""},
  {"id": 34, "type": "multiple_choice", "content": "Cho hàm số $y=f(x)$ là hàm đa thức bậc bốn, có đồ thị $y=f'(x)$ như hình vẽ dưới đây.<br><img src='https://i.postimg.cc/dQCHwTC5/34.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Phương trình $f(x)=0$ có $4$ nghiệm thực phân biệt khi và chỉ khi", "options": ["A. $f(0)<0$.", "B. $f(0)<0<f(n)$.", "C. $f(0)>0$.", "D. $f(0)<0<f(m)$."], "correctAnswer": "D", "explanation": ""},
  {"id": 35, "type": "drag_drop", "content": "Hình bên là bản mô phỏng một đường trượt ván bằng bê tông, phần đường cong là đồ thị hàm bậc ba $y=f(x)=ax^3+bx^2+cx+d$ nhận điểm $O$ làm tâm đối xứng và nối liền tiếp tuyến ngang với hai đầu (chiều cao $3\\text{ m}$, chiều ngang $4\\text{ m}$).<br><img src='https://i.postimg.cc/jdQMJ0Zh/35.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>1) Giá trị $2f(-2)$ bằng [1].<br>2) Giá trị $8f'(0)$ bằng [2].<br>3) Giá trị của $4a-5c$ bằng [3].", "choices": ["$-3$", "$-9$", "$6$", "$3$"], "correctAnswer": ["$3$", "$-9$", "$6$"], "explanation": ""},
  {"id": 36, "type": "multiple_choice", "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang vuông tại $A$ và $D$ với $AB=AD=2CD=2a$. Hình chiếu vuông góc của $S$ trên mặt phẳng $(ABCD)$ là trung điểm $M$ của $AD$ (như hình vẽ).<br><img src='https://i.postimg.cc/CKd7tZYD/36.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Biết khoảng cách từ $D$ đến $(SBC)$ bằng $\\frac{a\\sqrt{15}}{5}$. Số đo của góc nhị diện $[S,BC,A]$ là", "options": ["A. $30^\\circ$.", "B. $90^\\circ$.", "C. $60^\\circ$.", "D. $45^\\circ$."], "correctAnswer": "C", "explanation": ""},
  {"id": 37, "type": "true_false", "content": "Trong không gian $Oxyz$, cho điểm $A(1;2;-3)$ và đường thẳng $d:\\frac{x-2}{1}=\\frac{y+1}{-2}=\\frac{z}{3}$. Gọi $(P)$ là mặt phẳng chứa đường thẳng $d$ sao cho khoảng cách từ điểm $A$ đến $(P)$ là lớn nhất. Gọi $H, K$ lần lượt là chân đường vuông góc kẻ từ $A$ xuống $d$ và $(P)$. Mỗi phát biểu sau đây là đúng hay sai?", "options": [], "propositions": ["a) Tọa độ điểm $H$ là $\\left(\\frac{6}{7};\\frac{9}{7};\\frac{24}{7}\\right)$.", "b) $AH\\le AK$.", "c) Khoảng cách từ $A$ đến đường thẳng $d$ là $\\frac{\\sqrt{35}}{7}$.", "d) Phương trình mặt phẳng $(P)$ là $x+5y+3z+3=0$."], "correctAnswer": {"0": "false", "1": "false", "2": "true", "3": "true"}, "explanation": ""},
  {"id": 38, "type": "multiple_choice", "content": "Trong không gian $Oxyz$, cho điểm $K(1;1;-2)$ và mặt cầu $(S): (x-1)^2+(y-1)^2+(z+1)^2=100$. Cho hai điểm $A, B$ thay đổi trên mặt cầu $(S)$ nhưng luôn thoả mãn điều kiện $AB=16$. Giá trị nhỏ nhất của biểu thức $KA^2-KB^2$ là", "options": ["A. $0$.", "B. $-256$.", "C. $-32\\sqrt{17}$.", "D. $-32$."], "correctAnswer": "D", "explanation": ""},
  {"id": 39, "type": "fill_blank", "content": "Trong một cuộc thi nấu ăn, xác suất làm xong bánh đúng thời gian quy định của Mai, Nga, Phương lần lượt là $x, y$ và $0,18$ ($x<y$). Biết xác suất để ít nhất một người làm xong bánh đúng giờ là $0,7991$ và xác suất để cả ba đều làm xong đúng giờ là $0,0351$. Xác suất để có đúng hai người làm xong bánh đúng thời gian là ________. <i>(Dùng dấu phẩy phân cách phần thập phân)</i>", "options": [], "correctAnswer": "0,2607", "explanation": ""},
  {"id": 40, "type": "multiple_choice", "content": "Trong một buổi tập sút penalty của một câu lạc bộ có $85\\%$ cầu thủ lựa chọn sút bóng về phía bên trái của khung thành. Nếu đá về bên trái thì xác suất ghi bàn là $0,7$, còn nếu không đá về bên trái thì xác suất ghi bàn là $0,6$. Chọn ngẫu nhiên một cầu thủ, biết rằng cầu thủ này ghi bàn. Xác suất để cầu thủ đó đá bóng về phía bên trái khung thành là", "options": ["A. $\\frac{119}{200}$.", "B. $\\frac{51}{100}$.", "C. $\\frac{34}{41}$.", "D. $\\frac{119}{137}$."], "correctAnswer": "D", "explanation": ""}
],
    "tsa_toan_02": [
  {"id": 1, "type": "multiple_choice", "content": "Phần nguyên của số thực $x$ là số nguyên lớn nhất không vượt quá $x$, kí hiệu là $[x]$ (ví dụ: $\\left[2\\frac{1}{2}\\right]=[2,5]=2; [-7,2]=-8$). Biết số $x=\\sqrt{2+\\sqrt{2+\\sqrt{2+\\dots}}}$ với $n$ dấu căn. Giá trị của $[x]$ bằng bao nhiêu?", "options": ["A. $1$.", "B. $2$.", "C. $0$.", "D. $-1$."], "correctAnswer": "A", "explanation": ""},
  {"id": 2, "type": "drag_drop", "content": "Cho hàm số $y=\\frac{x+\\sqrt{x}}{\\sqrt{x^2-1}}$.<br>- Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số bằng [1].<br>- Khoảng cách từ $A(2;3)$ đến tiệm cận đứng của đồ thị hàm số bằng [2].", "choices": ["$3$", "$4$", "$1$", "$2$"], "correctAnswer": ["$2$", "$1$"], "explanation": ""},
  {"id": 3, "type": "multiple_choice", "content": "Cho đa giác lồi $n$ đỉnh ($n>3$). Số tam giác có $3$ đỉnh là $3$ đỉnh của đa giác đã cho là", "options": ["A. $A_n^3$.", "B. $C_n^3$.", "C. $\\frac{C_n^3}{3!}$.", "D. $n!$."], "correctAnswer": "B", "explanation": ""},
  {"id": 4, "type": "true_false", "content": "Cho hàm số $f(x)=x^3-\\frac{1}{2}x^2-4x$. Mỗi phát biểu sau đây là đúng hay sai?", "options": [], "propositions": ["a) Đạo hàm của hàm số $y=f(x)$ tại $x=4$ là $f'(4)=3$.", "b) Nghiệm của bất phương trình $f'(x)<0$ là $T=\\left(1;\\frac{4}{3}\\right)$."], "correctAnswer": {"0": "false", "1": "false"}, "explanation": ""},
  {"id": 5, "type": "fill_blank", "content": "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2+y^2+z^2-2x+4y-4z-27=0$. Bán kính $R$ của mặt cầu $(S)$ bằng ________.", "options": [], "correctAnswer": "6", "explanation": ""},
  {"id": 6, "type": "drag_drop", "content": "Cho dãy số $(u_n)$ là một cấp số cộng có $u_1=3$ và công sai $d=4$.<br>- Tổng của [1] số hạng đầu của dãy số $(u_n)$ là $S_n=253$.<br>- Số hạng thứ $10$ của dãy số $(u_n)$ là $u_{10}=$ [2].", "choices": ["$39$", "$40$", "$10$", "$11$"], "correctAnswer": ["$11$", "$39$"], "explanation": ""},
  {"id": 7, "type": "multiple_choice", "content": "Trong không gian $Oxyz$, cho hai điểm $A(1;3;-1)$, $B(3;-1;5)$. Tọa độ của điểm $M$ thỏa mãn hệ thức $\\overrightarrow{MA}=3\\overrightarrow{MB}$ là", "options": ["A. $M\\left(\\frac{5}{3};\\frac{13}{3};1\\right)$.", "B. $M\\left(\\frac{7}{3};\\frac{1}{3};3\\right)$.", "C. $M\\left(\\frac{7}{3};\\frac{1}{3};-3\\right)$.", "D. $M(4;-3;8)$."], "correctAnswer": "D", "explanation": ""},
  {"id": 8, "type": "true_false", "content": "Một lớp học có $40$ học sinh, trong đó có $18$ học sinh tham gia môn bóng đá và $10$ học sinh tham gia môn bóng chuyền, trong đó có $6$ học sinh tham gia cả hai môn. Chọn ngẫu nhiên một học sinh, gọi $A$ là biến cố \"Chọn được học sinh tham gia bóng đá\", $B$ là biến cố \"Chọn được học sinh tham gia bóng chuyền\". Mỗi phát biểu sau đây là đúng hay sai?", "options": [], "propositions": ["a) $P(A)=\\frac{9}{20}$.", "b) $P(AB)=\\frac{7}{20}$.", "c) Xác suất để học sinh được chọn có tham gia ít nhất một trong hai môn thể thao bằng $\\frac{13}{20}$."], "correctAnswer": {"0": "true", "1": "false", "2": "false"}, "explanation": ""},
  {"id": 9, "type": "fill_blank", "content": "Có ________ cặp số nguyên $(x;y)$ thỏa mãn phương trình: $x^2+5y^2+4xy+2x+4y-3=0$.", "options": [], "correctAnswer": "4", "explanation": ""},
  {"id": 10, "type": "drag_drop", "content": "Cho phương trình $\\log_4(x+1)^2+2=\\log_{\\sqrt{2}}\\sqrt{4-x}+\\log_8(4+x)^3$.<br>- Số nghiệm của phương trình đã cho là [1].<br>- Tổng của các nghiệm của phương trình đã cho là [2].", "choices": ["$1$", "$2-\\sqrt{6}$", "$2$", "$4-2\\sqrt{6}$"], "correctAnswer": ["$2$", "$4-2\\sqrt{6}$"], "explanation": ""},
  {"id": 11, "type": "multiple_choice", "content": "Phương trình $\\sin\\left(3x+\\frac{\\pi}{3}\\right)=-\\frac{\\sqrt{3}}{2}$ có bao nhiêu nghiệm thuộc khoảng $\\left(0;\\frac{\\pi}{2}\\right)$?", "options": ["A. $3$.", "B. $4$.", "C. $1$.", "D. $2$."], "correctAnswer": "D", "explanation": ""},
  {"id": 12, "type": "drag_drop", "content": "Cho hai hàm số $F(x)=(x^2+ax+b)e^{-x}$ và $f(x)=(-x^2+3x+6)e^{-x}$. Để $F(x)$ là một nguyên hàm của hàm số $f(x)$ thì $a=$ [1]; $b=$ [2].", "choices": ["$5$", "$3$", "$-7$", "$-1$"], "correctAnswer": ["$-1$", "$-7$"], "explanation": ""},
  {"id": 13, "type": "true_false", "content": "Cho hàm số $y=f(x)=\\begin{cases} \\frac{\\sqrt{1-x}-\\sqrt{1+x}}{x} & \\text{khi } x<0 \\\\ m+\\frac{1-x}{1+x} & \\text{khi } x\\ge 0 \\end{cases}$. Mỗi phát biểu sau đây là đúng hay sai?", "options": [], "propositions": ["a) Hàm số $y=f(x)$ gián đoạn tại $x=0$ khi $m=-1$.", "b) Hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ khi $m\\ne -2$."], "correctAnswer": {"0": "true", "1": "false"}, "explanation": ""},
  {"id": 14, "type": "fill_blank", "content": "Trong thời gian liên tục $25$ năm, một người lao động luôn gửi đúng $4\\,000\\,000$ đồng vào một ngày cố định của tháng ở ngân hàng $M$ với lãi suất không đổi $0,6\\%$/tháng. Số tiền người đó có được sau $25$ năm là ________ triệu đồng. <i>(Làm tròn đến chữ số thập phân thứ ba)</i>", "options": [], "correctAnswer": "3364,867", "explanation": ""},
  {"id": 15, "type": "drag_drop", "content": "- Ước chung của hai số $n+3$ và $2n+5$ là [1], với mọi $n\\in\\mathbb{N}$.<br>- Có [2] bộ số thỏa mãn hai số có tổng bằng $224$ và ước chung lớn nhất bằng $28$.", "choices": ["$7$", "$2$", "$1$", "$5$"], "correctAnswer": ["$1$", "$2$"], "explanation": ""},
  {"id": 16, "type": "multiple_choice", "content": "Cho dãy số $(a_n)$ thỏa mãn $a_1=1$ và $a_n=10a_{n-1}-1$, $\\forall n\\ge 2$. Giá trị nhỏ nhất của $n$ để $\\log a_n > 100$ là", "options": ["A. $100$.", "B. $101$.", "C. $102$.", "D. $103$."], "correctAnswer": "C", "explanation": ""},
  {"id": 17, "type": "fill_blank", "content": "Hai người ngang tài ngang sức tranh chức vô địch của một cuộc thi cờ tướng. Người giành chiến thắng là người đầu tiên thắng được năm ván cờ. Tại thời điểm người chơi thứ nhất đã thắng $4$ ván và người chơi thứ hai mới thắng $2$ ván, xác suất để người chơi thứ nhất giành chiến thắng là ________. <i>(Viết dưới dạng số thập phân)</i>", "options": [], "correctAnswer": "0,875", "explanation": ""},
  {"id": 18, "type": "multiple_choice", "content": "Cho hàm số $y=\\frac{1-m\\sin x}{\\cos x+2}$. Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[0;10]$ để giá trị nhỏ nhất của hàm số nhỏ hơn $-2$?", "options": ["A. $1$.", "B. $9$.", "C. $3$.", "D. $6$."], "correctAnswer": "D", "explanation": ""},
  {"id": 19, "type": "drag_drop", "content": "Người ta đo đường kính của $61$ cây gỗ được trồng sau $12$ năm (đơn vị: cm) và thu được bảng tần số ghép nhóm sau:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 mb-3 text-sm'><tr><th class='border border-gray-300 p-2'>Đường kính</th><td class='border border-gray-300 p-2'>[20;25)</td><td class='border border-gray-300 p-2'>[25;30)</td><td class='border border-gray-300 p-2'>[30;35)</td><td class='border border-gray-300 p-2'>[35;40)</td><td class='border border-gray-300 p-2'>[40;45)</td></tr><tr><th class='border border-gray-300 p-2'>Số cây</th><td class='border border-gray-300 p-2'>4</td><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>26</td><td class='border border-gray-300 p-2'>13</td><td class='border border-gray-300 p-2'>6</td></tr></table>- Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm bằng [1].<br>- Tứ phân vị thứ hai của mẫu số liệu ghép nhóm bằng [2].<br>- Tứ phân vị thứ ba của mẫu số liệu ghép nhóm bằng [3]. <i>(Làm tròn đến chữ số thập phân thứ hai)</i>", "choices": ["$32,79$", "$29,69$", "$32,59$", "$36,44$"], "correctAnswer": ["$29,69$", "$32,79$", "$36,44$"], "explanation": ""},
  {"id": 20, "type": "fill_blank", "content": "Cổng trường Đại học Bách Khoa Hà Nội có hình dạng Parabol, chiều rộng $8\\text{ m}$, chiều cao $12,5\\text{ m}$. Diện tích của cổng là ________ $\\text{m}^2$. <i>(Nhập phân số tối giản a/b)</i>", "options": [], "correctAnswer": "200/3", "explanation": ""},
  {"id": 21, "type": "multiple_choice", "content": "Cho tam giác $ABC$ có $b=7, c=5, \\cos A=\\frac{3}{5}$. Độ dài đường cao $h_a$ của $\\Delta ABC$ bằng", "options": ["A. $2\\sqrt{2}$.", "B. $7\\sqrt{2}$.", "C. $4\\sqrt{2}$.", "D. $\\frac{7\\sqrt{2}}{2}$."], "correctAnswer": "D", "explanation": ""},
  {"id": 22, "type": "fill_blank", "content": "Khi gắn hệ tọa độ $Oxyz$ (đơn vị: km) vào một sân bay, mặt phẳng $(Oxy)$ trùng với mặt sân bay. Một máy bay bay theo đường thẳng từ vị trí $A(5;0;5)$ đến vị trí $B(10;10;3)$ và hạ cánh tại vị trí $M(a;b;0)$. Giá trị của $2a-b$ bằng ________.", "options": [], "correctAnswer": "10", "explanation": ""},
  {"id": 23, "type": "fill_blank", "content": "Cho hàm số $y=\\frac{2x+1}{x+1}$ có đồ thị $(C)$. Có ________ tiếp tuyến của đồ thị $(C)$ song song với đường thẳng $\\Delta: y=x+1$.", "options": [], "correctAnswer": "1", "explanation": ""},
  {"id": 24, "type": "true_false", "content": "Cho hàm số $y=x^2\\cdot e^{-x}$. Mỗi phát biểu sau đây là đúng hay sai?", "options": [], "propositions": ["a) Hàm số không có giá trị lớn nhất và giá trị nhỏ nhất.", "b) Hàm số đạt cực đại tại $x=0$ và đạt cực tiểu tại $x=2$.", "c) Giá trị nhỏ nhất của hàm số bằng $0$."], "correctAnswer": {"0": "false", "1": "false", "2": "true"}, "explanation": ""},
  {"id": 25, "type": "multiple_choice", "content": "Cho tập $A=\\{1;2;3;\\dots;2023;2024\\}$. Có bao nhiêu cách chọn $5$ số từ tập hợp $A$ sao cho các số được chọn lập thành một cấp số nhân tăng có công bội là một số nguyên dương?", "options": ["A. $126$.", "B. $161$.", "C. $111$.", "D. $150$."], "correctAnswer": "B", "explanation": ""},
  {"id": 26, "type": "drag_drop", "content": "Cho hàm số bậc hai $y=f(x)$ có đồ thị $(P)$ và đường thẳng $d$ cắt $(P)$ tại hai điểm như trong hình vẽ. Biết rằng hình phẳng giới hạn bởi $(P)$ và $d$ có diện tích $S=\\frac{125}{9}$.<br><img src='https://i.postimg.cc/Sx9NGdYV/26.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>- Phương trình đường thẳng $d$ là [1].<br>- $\\int_1^6 f'(x)\\,dx$ bằng [2].<br>- $\\int_1^6 f(x)\\,dx$ bằng [3].", "choices": ["$y=2x+1$", "$\\frac{245}{18}$", "$5$", "$8$", "$y=x+2$", "$\\frac{745}{18}$"], "correctAnswer": ["$y=x+2$", "$5$", "$\\frac{245}{18}$"], "explanation": ""},
  {"id": 27, "type": "multiple_choice", "content": "Trong không gian $Oxyz$, cho điểm $A(2;-1;-2)$ và đường thẳng $(d):\\frac{x-1}{1}=\\frac{y-1}{-1}=\\frac{z-1}{1}$. Gọi $(P)$ là mặt phẳng đi qua điểm $A$, song song với đường thẳng $(d)$ và khoảng cách từ đường thẳng $(d)$ tới mặt phẳng $(P)$ là lớn nhất. Mặt phẳng $(P)$ vuông góc với mặt phẳng nào sau đây?", "options": ["A. $x-y-6=0$.", "B. $x+3y+2z+10=0$.", "C. $x-2y-3z-1=0$.", "D. $3x+z+2=0$."], "correctAnswer": "D", "explanation": ""},
  {"id": 28, "type": "multiple_choice", "content": "Cho hình chóp $S.ABCD$ có $ABCD$ là hình chữ nhật tâm $O$ với $AB=a, BC=a\\sqrt{3}$. Hình chiếu vuông góc của $S$ lên mặt phẳng $(ABCD)$ là trung điểm $AO$. Biết góc giữa hai mặt phẳng $(SAC)$ và $(SBC)$ là $60^\\circ$. Thể tích khối chóp $S.ABCD$ là", "options": ["A. $\\frac{a^3\\sqrt{3}}{3}$.", "B. $\\frac{a^3\\sqrt{3}}{2}$.", "C. $\\frac{a^3}{2}$.", "D. $\\frac{a^3\\sqrt{6}}{8}$."], "correctAnswer": "D", "explanation": ""},
  {"id": 29, "type": "true_false", "content": "Cho hàm số $y=x^4-4x^3+(m-2)x^2+8x+4$ có đồ thị $(C)$. Mỗi phát biểu sau đây là đúng hay sai?", "options": [], "propositions": ["a) Với $m=2$ thì đồ thị hàm số $(C)$ đã cho cắt trục hoành tại $3$ điểm phân biệt.", "b) Có tất cả $10$ giá trị nguyên của $m$ để đồ thị hàm số $(C)$ đã cho cắt trục hoành tại đúng hai điểm có hoành độ lớn hơn $1$."], "correctAnswer": {"0": "false", "1": "false"}, "explanation": ""},
  {"id": 30, "type": "multiple_choice", "content": "Cho hình lăng trụ đứng $ABC.A'B'C'$. Biết rằng góc giữa hai mặt phẳng $(A'BC)$ và $(ABC)$ là $30^\\circ$, tam giác $A'BC$ đều và có diện tích bằng $\\sqrt{3}$. Thể tích khối lăng trụ $ABC.A'B'C'$ bằng", "options": ["A. $2\\sqrt{3}$.", "B. $6$.", "C. $\\frac{3\\sqrt{3}}{4}$.", "D. $\\frac{\\sqrt{3}}{4}$."], "correctAnswer": "C", "explanation": ""},
  {"id": 31, "type": "fill_blank", "content": "Một người thống kê lại thời gian thực hiện các cuộc gọi điện thoại (đơn vị: giây) của người đó trong một tuần ở bảng sau:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 mb-3 text-sm'><tr><th class='border border-gray-300 p-2'>Thời gian</th><td class='border border-gray-300 p-2'>[0;60)</td><td class='border border-gray-300 p-2'>[60;120)</td><td class='border border-gray-300 p-2'>[120;180)</td><td class='border border-gray-300 p-2'>[180;240)</td><td class='border border-gray-300 p-2'>[240;300)</td><td class='border border-gray-300 p-2'>[300;360)</td></tr><tr><th class='border border-gray-300 p-2'>Số cuộc gọi</th><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>10</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>5</td><td class='border border-gray-300 p-2'>2</td><td class='border border-gray-300 p-2'>1</td></tr></table>Khoảng tứ phân vị của mẫu số liệu ghép nhóm trên bằng ________.", "options": [], "correctAnswer": "116,3", "explanation": ""},
  {"id": 32, "type": "fill_blank", "content": "Một đống đất được vun thành hình một khối chóp cụt tứ giác đều có cạnh đáy lớn bằng $2\\text{ m}$, cạnh đáy nhỏ bằng $1\\text{ m}$ và chiều cao bằng $2\\text{ m}$.<br><img src='https://i.postimg.cc/SsgyKt3t/32.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Thể tích đống đất có giá trị gần nhất bằng ________ $\\text{m}^3$. <i>(Làm tròn đến chữ số thập phân thứ hai)</i>", "options": [], "correctAnswer": "4,67", "explanation": ""},
  {"id": 33, "type": "multiple_choice", "content": "Gọi $S$ là tập hợp tất cả các giá trị của tham số $m$ để bất phương trình $\\log_3(x^2-5x+m)>\\log_3(x-2)$ có tập nghiệm chứa khoảng $(2;+\\infty)$. Khẳng định nào sau đây là đúng?", "options": ["A. $S=(7;+\\infty)$.", "B. $S=[6;+\\infty)$.", "C. $S=(-\\infty;4)$.", "D. $S=(-\\infty;5]$."], "correctAnswer": "A", "explanation": ""},
  {"id": 34, "type": "true_false", "content": "Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$, đường thẳng $SO$ vuông góc với mặt phẳng $(ABCD)$. Biết $AB=SB=a$, $SO=\\frac{a\\sqrt{6}}{3}$. Gọi $M$ là trung điểm của $SA$. Mỗi phát biểu sau đây là đúng hay sai?", "options": [], "propositions": ["a) Góc giữa hai mặt phẳng $(SAB)$ và $(SAD)$ là góc $\\widehat{BMD}$.", "b) Số đo góc $\\widehat{BMO}=60^\\circ$.", "c) Số đo góc giữa hai mặt phẳng $(SAB)$ và $(SAD)$ là $60^\\circ$."], "correctAnswer": {"0": "true", "1": "false", "2": "false"}, "explanation": ""},
  {"id": 35, "type": "multiple_choice", "content": "An và Bình cùng tham gia kì thi thử Tốt nghiệp THPT. Ngoài ba môn bắt buộc, An và Bình đều đăng kí thi thêm đúng hai môn tự chọn trong ba môn Vật lí, Hóa học và Sinh học. Mỗi môn tự chọn có $8$ mã đề thi khác nhau. Xác suất để An và Bình có chung đúng một môn thi tự chọn và chung một mã đề là", "options": ["A. $\\frac{1}{9}$.", "B. $\\frac{1}{10}$.", "C. $\\frac{1}{12}$.", "D. $\\frac{1}{24}$."], "correctAnswer": "C", "explanation": ""},
  {"id": 36, "type": "multiple_choice", "content": "Cho hình lăng trụ $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$. Hình chiếu của $A'$ lên mặt phẳng $(ABC)$ trùng với trung điểm $BC$. Biết góc giữa hai mặt phẳng $(ABB'A')$ và $(A'B'C')$ bằng $60^\\circ$. Khoảng cách $d$ giữa hai đường thẳng $B'C'$ và $AA'$ bằng bao nhiêu?", "options": ["A. $d=\\frac{3a\\sqrt{7}}{14}$.", "B. $d=\\frac{a\\sqrt{21}}{14}$.", "C. $d=\\frac{3a}{4}$.", "D. $d=\\frac{a\\sqrt{3}}{4}$."], "correctAnswer": "A", "explanation": ""},
  {"id": 37, "type": "fill_blank", "content": "Trong không gian $Oxyz$, cho đường thẳng $d:\\frac{x}{2}=\\frac{y-1}{-1}=\\frac{z+1}{-1}$ và điểm $A(1;1;1)$. Hai điểm $B, C$ di động trên đường thẳng $d$ sao cho mặt phẳng $(OAB)$ vuông góc với mặt phẳng $(OAC)$. Gọi điểm $B'$ là hình chiếu vuông góc của điểm $B$ lên đường thẳng $AC$. Quỹ tích các điểm $B'$ là đường tròn cố định có bán kính $r$ bằng ________. <i>(Làm tròn đến chữ số thập phân thứ hai)</i>", "options": [], "correctAnswer": "0,67", "explanation": ""},
  {"id": 38, "type": "fill_blank", "content": "Một khối lập phương lớn tạo bởi $27$ khối lập phương đơn vị. Một mặt phẳng vuông góc với đường chéo của khối lập phương lớn tại trung điểm của nó. Mặt phẳng này cắt ngang (không đi qua đỉnh) ________ khối lập phương đơn vị.", "options": [], "correctAnswer": "19", "explanation": ""},
  {"id": 39, "type": "multiple_choice", "content": "Giả sử tỉ lệ người nghiện thuốc lào tại khu vực du lịch $X$ là $10\\%$; tỉ lệ người bị bệnh phổi trong số người nghiện thuốc lào là $70\\%$, trong số người không nghiện thuốc lào là $15\\%$. Xác suất gặp ngẫu nhiên một người mà người đó nghiện thuốc lào khi biết họ bị bệnh phổi bằng", "options": ["A. $\\frac{14}{41}$.", "B. $\\frac{6}{13}$.", "C. $\\frac{4}{13}$.", "D. $\\frac{41}{200}$."], "correctAnswer": "A", "explanation": ""},
  {"id": 40, "type": "fill_blank", "content": "Một cửa hàng điện máy có doanh số bán lẻ tivi mỗi năm là $2500$ chiếc. Chi phí lưu kho là $200$ nghìn đồng/chiếc/năm. Mỗi lần đặt hàng cần đặt cọc cố định $10$ triệu đồng và sau khi nhập hàng trả thêm $3$ triệu đồng/chiếc. Biết số lượng tivi trung bình trong kho bằng một nửa số tivi mỗi lần đặt. Cửa hàng nên đặt hàng nhà sản xuất [1] lần mỗi năm và mỗi lần đặt [2] chiếc tivi để chi phí hàng tồn kho là thấp nhất. <i>(Nhập các đáp án cách nhau bởi dấu \"; \")</i>", "options": [], "correctAnswer": "5; 500", "explanation": ""}
],
    "tsa_khoahoc_01": [
  {"id": 1, "type": "multiple_choice", "content": "<div class='p-4 mb-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl text-sm text-gray-700 leading-relaxed'><b>Đọc văn bản sau và trả lời các câu hỏi từ 1 đến 5:</b><br>Không khí trong một phòng tắm hơi được làm nóng và giữ luôn ở nhiệt độ $90^\\circ\\text{C}$ làm cho người trong phòng tắm hơi đổ nhiều mồ hôi. Bộ phận làm nóng có tác dụng làm tăng nhiệt độ không khí trong phòng tắm hơi. Nhiệt dung của không khí có hơi nước trong phòng tắm hơi là $47\\text{ kJ/K}$.<br>Bộ điều khiển nhiệt độ có chức năng đo nhiệt độ và điều khiển đóng, ngắt bộ phận làm nóng để giữ nhiệt độ trong phòng tắm không đổi. Để đo nhiệt độ, có thể sử dụng một trong hai cảm biến nhiệt độ có đường đặc trưng điện áp $U$ theo nhiệt độ $t$ như đồ thị Hình 1.<br><img src='https://i.postimg.cc/rpMPrf2N/1.png' class='mt-3 mb-3 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Biểu thức liên hệ áp suất $p$ ($\\text{N/m}^2$), nhiệt độ tuyệt đối $T$ (K), thể tích $V$ ($\\text{m}^3$) của $n$ mol khí: $pV = nRT = \\frac{m}{\\mu}RT$, với $m$ (g), $\\mu$ (g/mol), $R = 8,31\\text{ J/(mol}\\cdot\\text{K)}$.<br>Nhiệt dung $C$ của vật: $C = \\frac{Q}{\\Delta T}$. Độ ẩm tương đối $f(\\%)$ ở nhiệt độ $T$: $f = \\frac{p}{p_{bh}}$ (với $p$ là áp suất hơi nước, $p_{bh}$ là áp suất hơi nước bão hoà ở nhiệt độ $T$).</div>Các quá trình truyền nhiệt từ bộ phận làm nóng sang người trong phòng tắm hơi bao gồm:<br>1. Truyền nhiệt từ bộ phận làm nóng sang không khí.<br>2. Truyền nhiệt trong không khí.<br>3. Truyền nhiệt từ không khí sang người trong phòng tắm hơi.<br>Các hình thức truyền nhiệt chủ yếu tương ứng với các quá trình 1-2-3 là", "options": ["A. bức xạ – đối lưu – dẫn nhiệt.", "B. dẫn nhiệt – đối lưu – đối lưu.", "C. dẫn nhiệt – đối lưu – dẫn nhiệt.", "D. bức xạ – đối lưu – đối lưu."], "correctAnswer": "C", "explanation": ""},
  {"id": 2, "type": "multiple_choice", "content": "Chọn phương án thích hợp điền vào chỗ trống để phát biểu sau đúng:<br>Khi người ở trong môi trường nhiệt độ cao ($90^\\circ\\text{C}$) của phòng tắm hơi, da người đổ nhiều mồ hôi là bởi vì ________ nên người không bị quá nóng.", "options": ["A. mồ hôi trên da sẽ bay hơi, thu nhiệt và làm giảm nhiệt độ của không khí", "B. mồ hôi thu nhiệt và bay hơi làm giảm nhiệt độ của da", "C. mồ hôi tạo thành lớp nước cách nhiệt với không khí nóng", "D. mồ hôi trên da sẽ bay hơi và cân bằng với nhiệt độ của không khí"], "correctAnswer": "B", "explanation": ""},
  {"id": 3, "type": "fill_blank", "content": "Một phòng tắm hơi có thể tích $34\\text{ m}^3$. Không khí trong phòng tắm hơi có độ ẩm tương đối là $3,5\\%$. Khối lượng mol của nước là $18\\text{ g/mol}$. Áp suất hơi nước bão hoà ở nhiệt độ $90^\\circ\\text{C}$ là $70\\text{ kPa}$. Khối lượng hơi nước trong phòng tắm hơi là ________ kg. <i>(Làm tròn đến chữ số thập phân thứ nhất)</i>", "options": [], "correctAnswer": "0,5", "explanation": ""},
  {"id": 4, "type": "drag_drop", "content": "Dựa vào đồ thị Hình 1 ở bài đọc Câu 1, hoàn thành nhận định sau:<br>Để duy trì nhiệt độ trong phòng tắm hơi ổn định và chính xác ở mức $90^\\circ\\text{C}$, nên chọn [1] vì ở gần $90^\\circ\\text{C}$ điện áp $U$ tăng [2] theo nhiệt độ.", "choices": ["chậm", "cảm biến B", "nhanh", "cảm biến A", "cảm biến A và B"], "correctAnswer": ["cảm biến B", "nhanh"], "explanation": ""},
  {"id": 5, "type": "fill_blank", "content": "Bộ phận làm nóng dùng điện trở nhiệt có công suất nhiệt là $32,6\\text{ kW}$, làm tăng nhiệt độ của không khí chứa hơi nước và các đồ vật trong phòng tắm hơi thêm $0,27^\\circ\\text{C}$ mỗi giây. Nhiệt dung của các vật (không bao gồm không khí và hơi nước) trong phòng tắm hơi xấp xỉ là ________ $\\text{kJ/K}$. <i>(Điền số tự nhiên)</i>", "options": [], "correctAnswer": "74", "explanation": ""},
  {"id": 6, "type": "multiple_choice", "content": "<div class='p-4 mb-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl text-sm text-gray-700 leading-relaxed'><b>Đọc văn bản sau và trả lời các câu hỏi từ 6 đến 10:</b><br><b>Bảng 1. Nhiệt độ sôi của một số chất</b><table class='w-full text-center border-collapse border border-gray-300 mt-2 mb-3 text-xs bg-white'><tr><th class='border border-gray-300 p-1.5'>Chất</th><th class='border border-gray-300 p-1.5'>Tên gọi</th><th class='border border-gray-300 p-1.5'>PTK</th><th class='border border-gray-300 p-1.5'>Nhiệt độ sôi ($^\\circ\\text{C}$)</th></tr><tr><td class='border border-gray-300 p-1.5'>$(\\text{CH}_3)_3\\text{N}$</td><td class='border border-gray-300 p-1.5'>Trimethylamine</td><td class='border border-gray-300 p-1.5'>59</td><td class='border border-gray-300 p-1.5'>3,0</td></tr><tr><td class='border border-gray-300 p-1.5'>$\\text{CH}_3\\text{-O-CH}_2\\text{CH}_3$</td><td class='border border-gray-300 p-1.5'>Ethylmethyl ether</td><td class='border border-gray-300 p-1.5'>60</td><td class='border border-gray-300 p-1.5'>8,0</td></tr><tr><td class='border border-gray-300 p-1.5'>$\\text{CH}_3\\text{-NH-CH}_2\\text{CH}_3$</td><td class='border border-gray-300 p-1.5'>Ethylmethylamine</td><td class='border border-gray-300 p-1.5'>59</td><td class='border border-gray-300 p-1.5'>37,0</td></tr><tr><td class='border border-gray-300 p-1.5'>$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{-NH}_2$</td><td class='border border-gray-300 p-1.5'>Propylamine</td><td class='border border-gray-300 p-1.5'>59</td><td class='border border-gray-300 p-1.5'>48,0</td></tr><tr><td class='border border-gray-300 p-1.5'>$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{-OH}$</td><td class='border border-gray-300 p-1.5'>Propan-1-ol</td><td class='border border-gray-300 p-1.5'>60</td><td class='border border-gray-300 p-1.5'>97,0</td></tr><tr><td class='border border-gray-300 p-1.5'>$\\text{CH}_3\\text{CH}_2\\text{-NH}_2$</td><td class='border border-gray-300 p-1.5'>Ethylamine</td><td class='border border-gray-300 p-1.5'>45</td><td class='border border-gray-300 p-1.5'>16,6</td></tr><tr><td class='border border-gray-300 p-1.5'>$\\text{CH}_3\\text{CH}_2\\text{-OH}$</td><td class='border border-gray-300 p-1.5'>Ethanol</td><td class='border border-gray-300 p-1.5'>46</td><td class='border border-gray-300 p-1.5'>78,3</td></tr><tr><td class='border border-gray-300 p-1.5'>$\\text{H-O-H}$</td><td class='border border-gray-300 p-1.5'>Nước</td><td class='border border-gray-300 p-1.5'>18</td><td class='border border-gray-300 p-1.5'>100</td></tr><tr><td class='border border-gray-300 p-1.5'>$\\text{H-S-H}$</td><td class='border border-gray-300 p-1.5'>Hydrogen sulfide</td><td class='border border-gray-300 p-1.5'>34</td><td class='border border-gray-300 p-1.5'>-60,7</td></tr></table>Nhiệt độ sôi của chất phụ thuộc vào hai yếu tố chính: (1) Khối lượng phân tử càng lớn thì nhiệt độ sôi càng cao; (2) Liên kết giữa các phân tử càng nhiều và càng mạnh thì nhiệt độ sôi càng cao. Liên kết hydrogen hình thành khi nguyên tử $\\text{H}$ đã liên kết với một nguyên tử có độ âm điện lớn (như $\\text{N, O, F}$) tương tác với một nguyên tử khác có độ âm điện lớn và còn cặp electron chưa liên kết. Khi ethanol hoà tan trong nước, các phân tử ethanol tạo liên kết hydrogen không chỉ với chính nó mà còn với các phân tử nước. Thông thường, nguyên tử có độ âm điện càng lớn thì liên kết của nguyên tử $\\text{H}$ với nguyên tử đó càng phân cực, vì vậy tạo được liên kết hydrogen mạnh hơn.</div>Trong bảng trên, số chất không tạo được liên kết hydrogen là", "options": ["A. $1$.", "B. $2$.", "C. $3$.", "D. $4$."], "correctAnswer": "C", "explanation": ""},
  {"id": 7, "type": "multiple_choice", "content": "Phân tử propylamine có bao nhiêu nguyên tử $\\text{H}$ có khả năng tạo liên kết hydrogen?", "options": ["A. $2$.", "B. $4$.", "C. $6$.", "D. $9$."], "correctAnswer": "A", "explanation": ""},
  {"id": 8, "type": "multiple_choice", "content": "Chất tạo được liên kết hydrogen mạnh nhất là", "options": ["A. ethylmethyl ether.", "B. ethylmethylamine.", "C. propylamine.", "D. ethanol."], "correctAnswer": "D", "explanation": ""},
  {"id": 9, "type": "true_false", "content": "Cho nguyên tử khối của $\\text{O}=16\\text{ amu}$; $\\text{H}=1\\text{ amu}$ và $\\text{C}=12\\text{ amu}$. Xét tính đúng sai của các phát biểu sau:", "options": [], "propositions": ["a) Các nguyên tử trong phân tử ethanol liên kết với nhau bằng liên kết hydrogen.", "b) $\\text{CH}_3\\text{OH}$ có nhiệt độ sôi cao hơn $\\text{HCH=O}$.", "c) Thứ tự tăng dần nhiệt độ sôi từ trái sang phải là $\\text{CH}_4$, $\\text{CH}_3\\text{-CH}_3$, $\\text{CH}_3\\text{OH}$."], "correctAnswer": {"0": "false", "1": "true", "2": "true"}, "explanation": ""},
  {"id": 10, "type": "fill_blank", "content": "Số kiểu liên kết hydrogen trong dung dịch ethanol là ________. <i>(Điền số tự nhiên)</i>", "options": [], "correctAnswer": "4", "explanation": ""},
  {"id": 11, "type": "multiple_choice", "content": "<div class='p-4 mb-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl text-sm text-gray-700 leading-relaxed'><b>Đọc văn bản sau và trả lời các câu hỏi từ 11 đến 15:</b><br>Virus SARS-CoV-2 là virus đường hô hấp mới gây bệnh viêm đường hô hấp cấp (Covid-19) ở người, xuất hiện lần đầu tiên vào tháng 12 năm 2019 tại Vũ Hán (Trung Quốc). Virus SARS-CoV-2 có dạng hình cầu, đường kính xấp xỉ $125\\text{ nm}$, cấu tạo gồm lõi nucleic acid chứa ARN sợi đơn, lớp vỏ capsid và lớp vỏ ngoài chứa các thụ thể glycoprotein làm nhiệm vụ kháng nguyên. Ở nhiệt độ cao bên ngoài cơ thể (đặc biệt trên $25^\\circ\\text{C}$), có nắng và môi trường thông thoáng sẽ làm virus yếu đi và giảm khả năng lây bệnh. Ngược lại, trong điều kiện nhiệt độ thấp, độ ẩm cao, không khí không lưu thông tốt thì virus sẽ phát tán và lây lan rất nhanh.<br><img src='https://i.postimg.cc/MTG3sXTz/11.png' class='mt-3 mb-2 w-full max-w-2xl mx-auto rounded-lg border border-gray-200 shadow-sm'></div>Dựa vào biểu đồ trên, cho biết ngày nào sau đây có số ca mắc mới ở cộng đồng cao nhất thành phố Hà Nội đợt 4?", "options": ["A. $14/01/2022$.", "B. $23/01/2022$.", "C. $20/01/2022$.", "D. $08/01/2022$."], "correctAnswer": "B", "explanation": ""},
  {"id": 12, "type": "multiple_choice", "content": "Nguyên nhân nào sau đây có thể làm tăng nguy cơ lây lan dịch bệnh Covid-19 một cách nhanh chóng?<br>(1) Chỉ cần đeo khẩu trang khi tiếp xúc với người đã nhiễm virus SARS-CoV-2.<br>(2) Luôn rửa tay sau khi chạm vào các vật nơi công cộng.<br>(3) Tổ chức các cuộc gặp mặt đầu xuân.<br>(4) Sử dụng chung các đồ dùng nơi công cộng.<br>(5) Làm việc trong không gian hẹp, thiếu sự lưu thông khí.", "options": ["A. (1), (2), (3), (4).", "B. (1), (3), (4), (5).", "C. (2), (3), (4), (5).", "D. (1), (3), (5)."], "correctAnswer": "B", "explanation": ""},
  {"id": 13, "type": "multiple_choice", "content": "Số lượng ca mắc trong cộng đồng tăng cao gây khó khăn cho công tác phòng chống dịch hơn các ca mắc mới trong khu vực đã cách ly vì", "options": ["A. khó khăn trong việc truy vết, dễ dàng lây lan chéo tạo thành các ổ dịch.", "B. tạo ra các chủng đột biến mới gây nguy hiểm hơn các chủng đột biến cũ.", "C. làm giảm hiệu quả phòng bệnh của vắc xin.", "D. cơ thể không đáp ứng miễn dịch."], "correctAnswer": "A", "explanation": ""},
  {"id": 14, "type": "multiple_choice", "content": "Phát biểu sau đây đúng hay sai?<br><i>Thuốc kháng sinh có khả năng điều trị các bệnh về virus.</i>", "options": ["A. Đúng.", "B. Sai."], "correctAnswer": "B", "explanation": ""},
  {"id": 15, "type": "fill_blank", "content": "Điền từ/cụm từ thích hợp vào chỗ trống sau đây:<br>Kháng nguyên là những chất khi xâm nhập vào cơ thể người thì được hệ thống miễn dịch nhận biết và sinh ra các ________ tương ứng.", "options": [], "correctAnswer": "kháng thể", "explanation": ""},
  {"id": 16, "type": "multiple_select", "content": "<div class='p-4 mb-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl text-sm text-gray-700 leading-relaxed'><b>Đọc văn bản sau và trả lời các câu hỏi từ 16 đến 20:</b><br>Dung dịch là sự đồng nhất của dung môi và chất tan. Dung môi thường gặp là nước. Ở một nhiệt độ xác định, dung dịch phân thành: <i>chưa bão hòa</i> (có thể hòa tan thêm chất tan), <i>bão hòa</i> (không thể hòa tan thêm chất tan), <i>quá bão hòa</i> (chứa lượng chất tan nhiều hơn dung dịch bão hòa, thường kém bền và dễ tách chất tan ở dạng rắn gọi là quá trình kết tinh).<br>Độ tan $S$ của một chất là số gam chất đó hòa tan trong $100\\text{ g}$ nước để tạo thành dung dịch bão hoà ở một nhiệt độ xác định: $S = \\frac{m_{ct}}{m_{H_2O}}\\cdot 100\\text{ (gam/100 gam H}_2\\text{O)}$.<br><img src='https://i.postimg.cc/nzwRNZ9J/16.png' class='mt-3 mb-2 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><div class='text-center text-xs italic'>Hình 3. Độ tan của một số chất</div></div>Dựa vào Hình 3, trong các chất sau đây, những chất có độ tan giảm khi nhiệt độ tăng là", "options": ["<b class='text-blue-700'>A.</b> $\\text{NH}_3$.", "<b class='text-blue-700'>B.</b> $\\text{KClO}_3$.", "<b class='text-blue-700'>C.</b> $\\text{NH}_4\\text{Cl}$.", "<b class='text-blue-700'>D.</b> $\\text{HCl}$."], "correctAnswer": ["A", "D"], "explanation": ""},
  {"id": 17, "type": "true_false", "content": "Xét tính đúng sai cho các phát biểu sau:", "options": [], "propositions": ["a) Độ tan là khối lượng chất tan tối đa có thể hòa tan trong $100\\text{ gam}$ nước ở một nhiệt độ xác định.", "b) Ở một nhiệt độ xác định, dung dịch quá bão hòa rất bền và ổn định.", "c) Nước là dung môi phổ biến để hòa tan các chất tan."], "correctAnswer": {"0": "true", "1": "false", "2": "true"}, "explanation": ""},
  {"id": 18, "type": "drag_drop", "content": "Dựa vào Hình 3 ở bài đọc Câu 16, kéo ô thích hợp thả vào vị trí tương ứng:<br>Tiến hành thí nghiệm hòa tan $225\\text{ gam}$ $\\text{NaNO}_3$ rắn, tinh khiết bằng $250\\text{ gam}$ nước ở nhiệt độ $30^\\circ\\text{C}$ sẽ thu được dung dịch $\\text{NaNO}_3$ [1]. Điều này được giải thích là do dựa vào đường cong biểu diễn sự phụ thuộc độ tan của $\\text{NaNO}_3$ vào nhiệt độ, $250\\text{ gam}$ nước có thể hòa tan tối đa khoảng [2] gam $\\text{NaNO}_3$.", "choices": ["225", "238", "chưa bão hòa", "95", "bão hòa", "quá bão hòa"], "correctAnswer": ["chưa bão hòa", "238"], "explanation": ""},
  {"id": 19, "type": "fill_blank", "content": "Một mẫu $\\text{CuSO}_4$ thực tế nặng $46\\text{ gam}$, trong đó có $80\\%$ là $\\text{CuSO}_4$ và còn lại là các chất rắn không tan trong nước. Hòa tan hoàn toàn mẫu chất rắn trong $50\\text{ ml}$ nước tinh khiết ở $100^\\circ\\text{C}$, lọc lấy dung dịch rồi để nguội dần đến $20^\\circ\\text{C}$ thì xuất hiện các tinh thể $\\text{CuSO}_4$ rắn. Lọc lấy chất rắn rồi sấy ở $100^\\circ\\text{C}$ đến khối lượng không đổi thu được $\\text{CuSO}_4$ khan.<br>Biết ở $20^\\circ\\text{C}$ độ tan của $\\text{CuSO}_4$ là $32\\text{ gam/100 gam H}_2\\text{O}$, khối lượng riêng của nước là $1\\text{ g/ml}$. Khối lượng của $\\text{CuSO}_4$ khan thu được là ________ gam. <i>(Làm tròn đến chữ số thập phân thứ nhất)</i>", "options": [], "correctAnswer": "20,8", "explanation": ""},
  {"id": 20, "type": "multiple_choice", "content": "Phèn chua có công thức $\\text{KAl(SO}_4)_2\\cdot 12\\text{H}_2\\text{O}$. Ở $50^\\circ\\text{C}$, để tạo dung dịch bão hòa phèn chua, tiến hành hòa tan hoàn toàn $42,53\\text{ gam}$ mẫu phèn chua (độ tinh khiết $80\\%$) trong $V\\text{ ml}$ nước tinh khiết. Biết ở $50^\\circ\\text{C}$ độ tan của $\\text{KAl(SO}_4)_2$ là $36,8\\text{ gam/100 gam H}_2\\text{O}$, $D_{\\text{H}_2\\text{O}}=1\\text{ g/ml}$, $M_{\\text{KAl(SO}_4)_2}=258\\text{ g/mol}$, $M_{\\text{H}_2\\text{O}}=18\\text{ g/mol}$. $V$ có giá trị gần đúng nào sau đây?", "options": ["A. $34,83\\text{ ml}$.", "B. $43,52\\text{ ml}$.", "C. $50,33\\text{ ml}$.", "D. $62,90\\text{ ml}$."], "correctAnswer": "A", "explanation": ""},
  {"id": 21, "type": "multiple_choice", "content": "<div class='p-4 mb-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl text-sm text-gray-700 leading-relaxed'><b>Đọc văn bản sau và trả lời các câu hỏi từ 21 đến 25:</b><br>Các virus thiếu enzyme chuyển hóa và bộ máy sản xuất protein. Chúng là các dạng sống ký sinh nội bào bắt buộc. Virus nhận ra các tế bào chủ của nó theo nguyên tắc \"chìa và khóa\" giữa các protein bề mặt của virus với các phân tử thụ thể đặc hiệu trên bề mặt ngoài của tế bào chủ.<br><img src='https://i.postimg.cc/x8wsTRPN/21.png' class='mt-3 mb-2 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><div class='text-center text-xs italic mb-2'>Hình 1. Chu trình nhân lên của virus trong tế bào chủ</div>Khi hệ gene của virus đã ở trong tế bào chủ, tế bào chủ cung cấp các nucleotide, enzyme, ribosome, tRNA, amino acid, ATP và các thành phần khác cần thiết để tổng hợp nucleic acid và protein của virus. Phần lớn virus DNA dùng DNA polymerase của tế bào chủ; ngược lại, các virus RNA thường mã hóa các enzyme polymerase sử dụng RNA làm mạch khuôn. Sau khi các phân tử nucleic acid và capsomer được tạo ra, chúng tự đóng gói thành virus thế hệ con và thoát khỏi tế bào chủ.</div>Virus nhận ra các tế bào chủ của nó theo nguyên tắc \"chìa và khóa\" nghĩa là", "options": ["A. protein bề mặt của virus có thể kết hợp được với nhiều thụ thể khác nhau của nhiều loại tế bào khác nhau.", "B. protein bề mặt của virus liên kết đặc hiệu với từng loại thụ thể trên bề mặt tế bào.", "C. protein bề mặt của virus mã hóa được mọi loại thụ thể tế bào.", "D. protein bề mặt của virus liên kết không đặc hiệu với thụ thể trên bề mặt tế bào."], "correctAnswer": "B", "explanation": ""},
  {"id": 22, "type": "drag_drop", "content": "Sắp xếp các giai đoạn sau đây cho đúng chu trình nhân lên của virus:<br>[1] $\\rightarrow$ [2] $\\rightarrow$ [3] $\\rightarrow$ [4] $\\rightarrow$ [5]", "choices": ["Sinh tổng hợp", "Xâm nhập", "Hấp phụ", "Lắp ráp", "Giải phóng"], "correctAnswer": ["Hấp phụ", "Xâm nhập", "Sinh tổng hợp", "Lắp ráp", "Giải phóng"], "explanation": ""},
  {"id": 23, "type": "multiple_choice", "content": "Điều nào sau đây không đúng khi nói về virus?", "options": ["A. Chỉ trong tế bào chủ, virus mới hoạt động như một thể sống.", "B. Hệ gene của virus chỉ chứa một trong hai loại nucleic acid: DNA, RNA.", "C. Kích thước của virus vô cùng nhỏ, chỉ có thể thấy được dưới kính hiển vi điện tử.", "D. Ở bên ngoài môi trường, virus chỉ sinh trưởng chứ không sinh sản được mặc dù có cả phức hợp gồm nucleic acid và protein."], "correctAnswer": "D", "explanation": ""},
  {"id": 24, "type": "multiple_choice", "content": "Các virus cần tự mã hóa một số enzyme nhất định vì", "options": ["A. tế bào chủ thiếu các enzyme có thể sao chép hệ gene virus.", "B. những enzyme này không tổng hợp được trong tế bào chủ.", "C. tế bào chủ nhanh chóng phá hủy các virus.", "D. những enzyme này dịch mã mRNA virus thành các protein."], "correctAnswer": "A", "explanation": ""},
  {"id": 25, "type": "true_false", "content": "Các phát biểu sau đây đúng hay sai?", "options": [], "propositions": ["a) Virus bám được vào tế bào chủ là nhờ các thụ thể thích hợp có sẵn trên bề mặt tế bào chủ.", "b) Kết quả của quá trình nhân lên là từ một virus ban đầu tạo ra vô số virus mới có độc tính tăng gấp nhiều lần.", "c) Virus sử dụng nguyên liệu của tế bào chủ trong quá trình nhân lên của mình."], "correctAnswer": {"0": "true", "1": "false", "2": "true"}, "explanation": ""},
  {"id": 26, "type": "drag_drop", "content": "<div class='p-4 mb-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl text-sm text-gray-700 leading-relaxed'><b>Đọc văn bản sau và trả lời các câu hỏi từ 26 đến 30:</b><br>Điện trở nhiệt (thermistor) là linh kiện có điện trở thay đổi rõ rệt theo nhiệt độ, được ứng dụng rộng rãi trong kĩ thuật điện tử, làm cảm biến nhiệt.<br><div class='flex flex-wrap justify-center gap-4 my-3'><img src='https://i.postimg.cc/jqBK7YgX/26a.png' class='h-36 rounded-lg border border-gray-200 shadow-sm'><img src='https://i.postimg.cc/6pXXMLNc/26b.png' class='h-36 rounded-lg border border-gray-200 shadow-sm'></div>Khảo sát điện trở nhiệt NTC (Negative Temperature Coefficient) thu được kết quả ở Bảng 1:<table class='w-full text-center border-collapse border border-gray-300 mt-2 mb-3 text-xs bg-white'><tr><th class='border border-gray-300 p-1'>Nhiệt độ ($^\\circ\\text{C}$)</th><th class='border border-gray-300 p-1'>Điện trở ($\\Omega$)</th><th class='border border-gray-300 p-1'>Nhiệt độ ($^\\circ\\text{C}$)</th><th class='border border-gray-300 p-1'>Điện trở ($\\Omega$)</th></tr><tr><td class='border border-gray-300 p-1'>5</td><td class='border border-gray-300 p-1'>121951,2</td><td class='border border-gray-300 p-1'>49</td><td class='border border-gray-300 p-1'>16077,2</td></tr><tr><td class='border border-gray-300 p-1'>9</td><td class='border border-gray-300 p-1'>99206,3</td><td class='border border-gray-300 p-1'>53</td><td class='border border-gray-300 p-1'>13661,2</td></tr><tr><td class='border border-gray-300 p-1'>15</td><td class='border border-gray-300 p-1'>73529,4</td><td class='border border-gray-300 p-1'>58</td><td class='border border-gray-300 p-1'>11160,7</td></tr><tr><td class='border border-gray-300 p-1'>19</td><td class='border border-gray-300 p-1'>60532,7</td><td class='border border-gray-300 p-1'>62</td><td class='border border-gray-300 p-1'>9542,0</td></tr><tr><td class='border border-gray-300 p-1'>26</td><td class='border border-gray-300 p-1'>43478,3</td><td class='border border-gray-300 p-1'>68</td><td class='border border-gray-300 p-1'>7564,3</td></tr><tr><td class='border border-gray-300 p-1'>32</td><td class='border border-gray-300 p-1'>33333,3</td><td class='border border-gray-300 p-1'>74</td><td class='border border-gray-300 p-1'>6016,8</td></tr><tr><td class='border border-gray-300 p-1'>37</td><td class='border border-gray-300 p-1'>26595,7</td><td class='border border-gray-300 p-1'>80</td><td class='border border-gray-300 p-1'>4807,7</td></tr><tr><td class='border border-gray-300 p-1'>41</td><td class='border border-gray-300 p-1'>22522,5</td><td class='border border-gray-300 p-1'></td><td class='border border-gray-300 p-1'></td></tr></table>Ngoài điện trở nhiệt NTC, trong thực tế còn có loại điện trở nhiệt PTC (Positive Temperature Coefficient) có điện trở tăng khi nhiệt độ tăng.</div>Kéo thả các từ/cụm từ sau vào vị trí thích hợp:<br>- Loại điện trở nhiệt khi nhiệt độ tăng thì điện trở giảm gọi là [1], ký hiệu là [2].<br>- Loại điện trở nhiệt khi nhiệt độ tăng thì điện trở tăng gọi là [3], ký hiệu là [4].", "choices": ["NTC", "PTC", "nghịch điện trở nhiệt", "thuận điện trở nhiệt"], "correctAnswer": ["nghịch điện trở nhiệt", "NTC", "thuận điện trở nhiệt", "PTC"], "explanation": ""},
  {"id": 27, "type": "multiple_choice", "content": "Điện trở nhiệt được sử dụng chủ yếu trong lĩnh vực nào sau đây?", "options": ["A. Nông nghiệp.", "B. Năng lượng tái tạo.", "C. Điện tử.", "D. Y tế."], "correctAnswer": "C", "explanation": ""},
  {"id": 28, "type": "multiple_choice", "content": "Trong bảng kết quả thí nghiệm ở bài đọc Câu 26, khi nhiệt độ tăng từ $5^\\circ\\text{C}$ đến $41^\\circ\\text{C}$ thì giá trị điện trở của điện trở nhiệt NTC", "options": ["A. tăng lên $36\\ \\Omega$.", "B. giảm đi $36\\ \\Omega$.", "C. tăng lên $99428,7\\ \\Omega$.", "D. giảm đi $99428,7\\ \\Omega$."], "correctAnswer": "D", "explanation": ""},
  {"id": 29, "type": "multiple_choice", "content": "Trong khoảng nhiệt độ nào dưới đây, giá trị điện trở của điện trở nhiệt biến đổi chậm nhất?", "options": ["A. $9^\\circ\\text{C} - 15^\\circ\\text{C}$.", "B. $26^\\circ\\text{C} - 32^\\circ\\text{C}$.", "C. $41^\\circ\\text{C} - 49^\\circ\\text{C}$.", "D. $74^\\circ\\text{C} - 80^\\circ\\text{C}$."], "correctAnswer": "D", "explanation": ""},
  {"id": 30, "type": "drag_drop", "content": "Đồ thị sau đây biểu diễn sự phụ thuộc của giá trị điện trở theo nhiệt độ đối với hai loại điện trở nhiệt NTC và PTC.<br><img src='https://i.postimg.cc/5tPW9hQX/30.png' class='mt-3 mb-3 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>- Đường màu xanh thể hiện sự phụ thuộc của giá trị điện trở theo nhiệt độ đối với điện trở nhiệt [1].<br>- Đường màu đỏ thể hiện sự phụ thuộc của giá trị điện trở theo nhiệt độ đối với điện trở nhiệt [2].", "choices": ["PTC", "NTC"], "correctAnswer": ["NTC", "PTC"], "explanation": ""},
  {"id": 31, "type": "multiple_choice", "content": "<div class='p-4 mb-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl text-sm text-gray-700 leading-relaxed'><b>Đọc văn bản sau và trả lời các câu hỏi từ 31 đến 35:</b><br>Potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) là chất rắn màu da cam của ion dichromate ($\\text{Cr}_2\\text{O}_7^{2-}$), có tính oxi hóa mạnh trong môi trường acid: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. Trong dung dịch luôn có cân bằng giữa $\\text{Cr}_2\\text{O}_7^{2-}$ (màu da cam) và $\\text{CrO}_4^{2-}$ (màu vàng): $\\text{Cr}_2\\text{O}_7^{2-} + \\text{H}_2\\text{O} \\rightleftharpoons 2\\text{CrO}_4^{2-} + 2\\text{H}^+$.<br>Ưu điểm của phương pháp dichromate: dễ tinh chế nên có thể pha dung dịch chuẩn $\\text{K}_2\\text{Cr}_2\\text{O}_7$ từ lượng cân chính xác, dung dịch rất bền khi bảo quản. Chất chỉ thị thường dùng là diphenylamine. Khi chuẩn độ $\\text{Fe}^{2+}$ bằng $\\text{K}_2\\text{Cr}_2\\text{O}_7$, người ta thêm $\\text{H}_3\\text{PO}_4$ để tạo phức bền $[\\text{Fe(PO}_4)_2]^{3+}$ tránh sai số chỉ thị chuyển màu sớm.<br><b>Thí nghiệm xác định nồng độ $\\text{FeSO}_4$ bằng $\\text{K}_2\\text{Cr}_2\\text{O}_7$:</b><br>- Bước 1: Cho vào bình nón $5\\text{ ml}$ dung dịch $\\text{FeSO}_4$; $1\\text{ ml}$ $\\text{H}_3\\text{PO}_4$ $1\\text{ M}$; $5\\text{ ml}$ $\\text{HCl}$ $0,5\\text{ M}$ và $2$ giọt chất chỉ thị diphenylamine.<br>- Bước 2: Nạp dung dịch chuẩn $\\text{K}_2\\text{Cr}_2\\text{O}_7$ $0,05\\text{ N}$ vào burette.<br>- Bước 3: Thêm từ từ $\\text{K}_2\\text{Cr}_2\\text{O}_7$ vào bình nón, dung dịch xuất hiện màu xanh lá mạ (của $\\text{Cr}^{3+}$), chuẩn độ đến khi chuyển sang màu xanh tím thì dừng, ghi lại thể tích.<br>- Bước 4: Lặp lại thí nghiệm thêm hai lần, lấy giá trị trung bình.</div>Phát biểu sau đúng hay sai?<br><i>Trong chuẩn độ ion $\\text{Fe}^{2+}$ bằng $\\text{K}_2\\text{Cr}_2\\text{O}_7$ ngoài môi trường acid là $\\text{HCl}$ người ta còn phải cho thêm $\\text{H}_3\\text{PO}_4$.</i>", "options": ["A. Đúng.", "B. Sai."], "correctAnswer": "A", "explanation": ""},
  {"id": 32, "type": "true_false", "content": "Các phát biểu sau đúng hay sai?", "options": [], "propositions": ["a) Có thể pha dung dịch chuẩn $\\text{K}_2\\text{Cr}_2\\text{O}_7$ bằng cách cân chính xác.", "b) Phương pháp chuẩn độ bằng dichromate không cần chất chỉ thị.", "c) Trong môi trường thích hợp, các muối chromate (màu da cam) và dichromate (màu vàng) chuyển hoá lẫn nhau theo cân bằng: $\\text{Cr}_2\\text{O}_7^{2-} + \\text{H}_2\\text{O} \\rightleftharpoons 2\\text{CrO}_4^{2-} + 2\\text{H}^+$."], "correctAnswer": {"0": "true", "1": "false", "2": "false"}, "explanation": ""},
  {"id": 33, "type": "fill_blank", "content": "Thể tích của dung dịch $\\text{K}_2\\text{Cr}_2\\text{O}_7$ $0,05\\text{ M}$ vừa đủ phản ứng với dung dịch chứa $0,06\\text{ mol}$ $\\text{FeSO}_4$ trong môi trường $\\text{H}_2\\text{SO}_4$ dư là ________ $\\text{mL}$. <i>(Điền số nguyên)</i>", "options": [], "correctAnswer": "200", "explanation": ""},
  {"id": 34, "type": "multiple_choice", "content": "Trong thí nghiệm ở bài đọc Câu 31, trước khi chuẩn độ, trong bình chuẩn độ chứa bao nhiêu dung dịch khác nhau?", "options": ["A. $2$.", "B. $3$.", "C. $4$.", "D. $5$."], "correctAnswer": "C", "explanation": ""},
  {"id": 35, "type": "drag_drop", "content": "Trong thí nghiệm chuẩn độ dung dịch [1] bằng [2], khi thêm từ từ dung dịch $\\text{K}_2\\text{Cr}_2\\text{O}_7$ từ burette vào bình, chuẩn độ đến khi dung dịch xuất hiện [3] thì dừng chuẩn độ.", "choices": ["$\\text{FeSO}_4$", "$\\text{K}_2\\text{Cr}_2\\text{O}_7$", "màu xanh lá mạ", "màu vàng", "màu xanh tím", "$\\text{H}_3\\text{PO}_4$"], "correctAnswer": ["$\\text{FeSO}_4$", "$\\text{K}_2\\text{Cr}_2\\text{O}_7$", "màu xanh tím"], "explanation": ""},
  {"id": 36, "type": "fill_blank", "content": "<div class='p-4 mb-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl text-sm text-gray-700 leading-relaxed'><b>Đọc văn bản sau và trả lời các câu hỏi từ 36 đến 40:</b><br>Sét là hiện tượng phóng điện trong khí quyển giữa các vùng mang điện tích trái dấu. Hai lý thuyết sau giải thích cơ chế tích điện của đám mây dông:<br><b>1. Lý thuyết hấp dẫn:</b> Ban đầu (Giai đoạn I), đám mây chứa các hạt mưa, tuyết hoặc tinh thể băng trung hòa. Các hạt lớn hơn ở phía trên rơi xuống do trọng lực, cọ xát với các hạt nhỏ hơn (Giai đoạn II). Ma sát làm các hạt lớn tích điện âm rơi xuống đáy mây, các hạt nhỏ tích điện dương di chuyển lên đỉnh mây (Giai đoạn III).<br><img src='https://i.postimg.cc/SsJFngW0/36.png' class='mt-3 mb-3 w-full max-w-lg mx-auto rounded-lg border border-gray-200 shadow-sm'><br><b>2. Lý thuyết đối lưu:</b> Gần mặt đất có các phân tử không khí tích điện dương. Luồng khí thăng lên mang điện tích dương tới đám mây trung hòa (Giai đoạn I), làm toàn bộ đám mây tích điện dương (Giai đoạn II). Các hạt tích điện âm trong khí quyển bị hút về tạo lớp điện tích âm quanh rìa mây (Giai đoạn III). Mưa rơi xuống kéo theo lớp điện tích âm ở rìa xuống đáy mây, còn luồng khí mới đẩy điện tích dương lên đỉnh mây (Giai đoạn IV).<br><img src='https://i.postimg.cc/fLp4mYKt/36b.png' class='mt-3 mb-2 w-full max-w-lg mx-auto rounded-lg border border-gray-200 shadow-sm'></div>Theo lý thuyết hấp dẫn, sự phân tách điện tích trong đám mây dông xảy ra qua ________ giai đoạn.", "options": [], "correctAnswer": "3", "explanation": ""},
  {"id": 37, "type": "multiple_choice", "content": "Theo lý thuyết hấp dẫn, nồng độ điện tích âm ở chân mây sẽ lớn nhất khi", "options": ["A. những hạt mưa lớn bên trong đám mây.", "B. những hạt mưa nhỏ bên trong đám mây.", "C. không có mưa rơi vào trong đám mây.", "D. sau khi bị sét đánh."], "correctAnswer": "A", "explanation": ""},
  {"id": 38, "type": "multiple_choice", "content": "Một máy bay nghiên cứu bay qua tâm của một đám mây dông ở giai đoạn hoàn chỉnh tại độ cao không đổi và phát hiện hầu hết các hạt trong vùng đó đều tích điện âm. Cả hai lý thuyết đều đồng ý rằng", "options": ["A. không có hoàn lưu gió để mang các hạt tích điện dương lên khỏi mặt đất.", "B. hầu hết các hạt tích điện dương lơ lửng phía trên vùng được khảo sát.", "C. hoàn lưu gió chỉ xảy ra ở các mức trên của khu vực được khảo sát.", "D. toàn bộ đám mây mang điện tích âm."], "correctAnswer": "B", "explanation": ""},
  {"id": 39, "type": "multiple_choice", "content": "Nếu một đám mây được tạo thành hoàn toàn từ tinh thể băng, theo lý thuyết hấp dẫn, nhận định nào sau đây là đúng?", "options": ["A. Chỉ những tinh thể băng mang điện tích dương mới rơi xuống và tạo ra sự phân tách điện tích.", "B. Các tinh thể băng tích điện dương sẽ hút các tinh thể băng tích điện âm từ khí quyển.", "C. Các tinh thể băng lớn hơn sẽ rơi nhanh hơn các tinh thể băng nhỏ hơn và trở nên tích điện âm.", "D. Dòng khí đi xuống làm cho các tinh thể băng rơi xuống và do đó mang điện tích âm."], "correctAnswer": "C", "explanation": ""},
  {"id": 40, "type": "multiple_choice", "content": "Sét thường xảy ra khi dòng điện chạy từ vùng mang điện tích âm đến vùng mang điện tích dương. Dựa trên lý thuyết đối lưu, đường đi nào của tia sét không thể xảy ra?", "options": ["A. Trong đám mây từ chân tới đỉnh.", "B. Từ chân đám mây này đến đỉnh đám mây khác.", "C. Từ chân mây xuống mặt đất.", "D. Từ chân mây đến vùng tích điện dương của khí quyển."], "correctAnswer": "C", "explanation": ""}
],
    "bt_sohoc_01": [
    {
        id: 318902, type: "multiple_choice",
        content: "Một số nguyên tố $p$ chia cho $42$ có số dư là hợp số. Khi đó, hợp số đó bằng",
        options: ["A. $9$.", "B. $21$.", "C. $25$.", "D. $39$."],
        correctAnswer: "C",
        explanation: "Đặt $p = 42k + r$ ($k \\in \\mathbb{N}^*$, $0 < r < 42$). Vì $p$ là số nguyên tố lớn hơn $42$ nên $\\gcd(p, 42) = 1 \\Rightarrow \\gcd(r, 42) = 1$. Do $42 = 2 \\cdot 3 \\cdot 7$ nên $r$ không chia hết cho $2, 3, 7$. Trong 4 đáp án chỉ có $25 = 5^2$ là hợp số nguyên tố cùng nhau với $42$ (ví dụ $p = 67$)."
    },
    {
        id: 318903, type: "multiple_choice",
        content: "Cho số nguyên tố $\\overline{ab}$ thỏa mãn $\\overline{ab} - \\overline{ba}$ là số chính phương và $a > b > 0$. Tổng các số nguyên tố thỏa mãn điều kiện đã cho bằng",
        options: ["A. $73$.", "B. $43$.", "C. $84$.", "D. $116$."],
        correctAnswer: "D",
        explanation: "Ta có $\\overline{ab} - \\overline{ba} = 9(a - b)$ là số chính phương nên $a - b$ là số chính phương. Vì $1 \\le a - b \\le 8$ nên $a - b \\in \\{1; 4\\}$. Do $\\overline{ab}$ nguyên tố nên $b \\in \\{1; 3; 7; 9\\}$. Thử trực tiếp tìm được hai số nguyên tố là $43$ và $73$. Tổng: $43 + 73 = 116$."
    },
    {
        id: 318904, type: "multiple_choice",
        content: "Cho $B = 3 + 3^2 + 3^3 + \\dots + 3^{100}$ (có $100$ số hạng). Khi chia $B$ cho $82$ ta được số dư là",
        options: ["A. $0$.", "B. $38$.", "C. $1$.", "D. $39$."],
        correctAnswer: "B",
        explanation: "Ta có $3^4 + 1 = 82$, nên tổng 8 số hạng liên tiếp luôn chia hết cho $82$: $(3 + 3^2 + 3^3 + 3^4)(1 + 3^4) \\vdots 82$. Vì $100 = 8 \\cdot 12 + 4$ nên $B \\equiv 3 + 3^2 + 3^3 + 3^4 = 120 \\equiv 38 \\pmod{82}$."
    },
    {
        id: 318905, type: "multiple_choice",
        content: "Có bao nhiêu số tự nhiên $n$ thỏa mãn $n^2 + 2026$ là số chính phương?",
        options: ["A. $0$.", "B. $1$.", "C. $7$.", "D. $45$."],
        correctAnswer: "A",
        explanation: "Giả sử $n^2 + 2026 = k^2 \\Rightarrow (k - n)(k + n) = 2026$. Vì $k - n$ và $k + n$ cùng tính chẵn lẻ mà tích chẵn nên cả hai cùng chẵn $\\Rightarrow$ tích chia hết cho $4$. Vô lý vì $2026$ không chia hết cho $4$. Vậy có $0$ số."
    },
    {
        id: 318906, type: "multiple_choice",
        content: "Cho $a, b$ là hai số tự nhiên. Biết rằng $a$ chia cho $5$ dư $3$ và $b$ chia cho $5$ dư $2$. Tích $a \\cdot b$ chia cho $5$ dư bao nhiêu?",
        options: ["A. $0$.", "B. $1$.", "C. $2$.", "D. $3$."],
        correctAnswer: "B",
        explanation: "Ta có $a \\equiv 3 \\pmod 5$ và $b \\equiv 2 \\pmod 5 \\Rightarrow a \\cdot b \\equiv 3 \\cdot 2 = 6 \\equiv 1 \\pmod 5$."
    },
    {
        id: 318907, type: "multiple_select",
        content: "Cho bộ các số nguyên $(m, n)$ thỏa mãn $m = \\frac{n^2 + n + 1}{n + 1}$. Tổng $m + n$ có thể bằng",
        options: ["A. $-3$.", "B. $1$.", "C. $-5$.", "D. $2$."],
        correctAnswer: ["B", "C"],
        explanation: "Ta có $m = n + \\frac{1}{n + 1}$. Để $m \\in \\mathbb{Z}$ thì $n + 1 \\in \\{1; -1\\} \\Rightarrow n \\in \\{0; -2\\}$. Với $n = 0 \\Rightarrow m = 1 \\Rightarrow m + n = 1$; với $n = -2 \\Rightarrow m = -3 \\Rightarrow m + n = -5$."
    },
    {
        id: 318908, type: "multiple_choice",
        content: "Cho $A = \\frac{a^2 + 4a + 4}{a^3 + 2a^2 - 4a - 8}$. Tổng các giá trị nguyên của $a$ để $A$ là số nguyên bằng",
        options: ["A. $1$.", "B. $3$.", "C. $2$.", "D. $4$."],
        correctAnswer: "D",
        explanation: "ĐKXĐ: $a \\ne \\pm 2$. Rút gọn $A = \\frac{(a+2)^2}{(a+2)^2(a-2)} = \\frac{1}{a - 2}$. Để $A \\in \\mathbb{Z}$ thì $a - 2 \\in \\{1; -1\\} \\Rightarrow a \\in \\{3; 1\\}$ (thỏa mãn). Tổng bằng $3 + 1 = 4$."
    },
    {
        id: 318909, type: "multiple_choice",
        content: "Có bao nhiêu số tự nhiên $n$ thỏa mãn $n^5 + 1$ chia hết cho $n^3 + 1$?",
        options: ["A. $2$.", "B. $1$.", "C. $13$.", "D. $12$."],
        correctAnswer: "A",
        explanation: "Ta có $n^5 + 1 = n^2(n^3 + 1) - (n^2 - 1)$, suy ra $n^2 - 1 \\vdots n^3 + 1$. Với $n \\ge 2$ thì $0 < n^2 - 1 < n^3 + 1$ (vô lý). Thử $n = 0$ ($1 \\vdots 1$) và $n = 1$ ($2 \\vdots 2$) đều thỏa mãn. Vậy có $2$ số."
    },
    {
        id: 318910, type: "multiple_choice",
        content: "Cho $a, b, c$ đôi một khác nhau và khác $0$. Biết $\\overline{ab}$ là số nguyên tố và $\\frac{\\overline{ab}}{\\overline{bc}} = \\frac{a}{c}$. Số $\\overline{abc}$ không chia hết cho số nào sau đây?",
        options: ["A. $1$.", "B. $13$.", "C. $3$.", "D. $9$."],
        correctAnswer: "D",
        explanation: "Từ $\\frac{10a + b}{10b + c} = \\frac{a}{c} \\Leftrightarrow c(9a + b) = 10ab$. Với $a, b, c$ khác nhau và $\\overline{ab}$ nguyên tố, tìm được duy nhất $a = 1, b = 9, c = 5 \\Rightarrow \\overline{abc} = 195 = 3 \\cdot 5 \\cdot 13$. Do đó $195$ không chia hết cho $9$."
    },
    {
        id: 318911, type: "multiple_choice",
        content: "Cho hai đa thức $P(x) = 1 + x + x^2 + x^3 + \\dots + x^{2025} + x^{2026}$ và $Q(x) = 1 - x + x^2 - x^3 + \\dots - x^{2025} + x^{2026}$. Biết $P\\left(\\frac{1}{2}\\right) + Q\\left(\\frac{1}{2}\\right) = \\frac{a}{b}$ với $a, b \\in \\mathbb{N}$ và $a, b$ nguyên tố cùng nhau. Tổng chữ số tận cùng của $a$ và $b$ bằng",
        options: ["A. $1$.", "B. $3$.", "C. $11$.", "D. $7$."],
        correctAnswer: "D",
        explanation: "Ta có $P\\left(\\frac{1}{2}\\right) + Q\\left(\\frac{1}{2}\\right) = 2\\left(1 + \\frac{1}{4} + \\dots + \\frac{1}{4^{1013}}\\right) = \\frac{4^{1014} - 1}{3 \\cdot 2^{2025}}$. Do đó $a = \\frac{4^{1014}-1}{3}$ (tận cùng là $5$) và $b = 2^{2025}$ (tận cùng là $2$). Tổng hai chữ số tận cùng là $5 + 2 = 7$."
    },
    {
        id: 318912, type: "drag_drop",
        content: "Cho $5$ số chính phương (có từ hai chữ số trở lên) có chữ số hàng chục khác nhau còn chữ số hàng đơn vị đều là $6$.<br>Tổng các chữ số hàng chục của $5$ số chính phương đó là [1] và có chữ số tận cùng bằng [2].",
        choices: ["số nguyên tố", "1", "5", "3", "7", "số chính phương"],
        correctAnswer: ["số chính phương", "5"],
        explanation: "Số chính phương tận cùng là $6$ có dạng $(10k \\pm 4)^2 = 100k^2 \\pm 80k + 16$ nên chữ số hàng chục luôn lẻ, thuộc $\\{1; 3; 5; 7; 9\\}$. Tổng $5$ chữ số hàng chục là $1 + 3 + 5 + 7 + 9 = 25$, là số chính phương và tận cùng bằng $5$."
    },
    {
        id: 318913, type: "drag_drop",
        content: "Cho một số có ba chữ số biết rằng số đó chia hết cho $72$, các chữ số của nó sắp xếp theo thứ tự từ nhỏ đến lớn tỉ lệ với $2; 3; 4$.<br>Có [1] số thỏa mãn, trong đó tổng các chữ số của số nhỏ nhất là [2].",
        choices: ["9", "7", "6", "3"],
        correctAnswer: ["3", "9"],
        explanation: "Bộ 3 chữ số tỉ lệ với $2:3:4$ là $\\{2; 3; 4\\}$ (tổng $9$) hoặc $\\{4; 6; 8\\}$ (tổng $18$), đều chia hết cho $9$. Để chia hết cho $8$, tìm được $3$ số là $432, 648, 864$. Số nhỏ nhất là $432$ có tổng chữ số bằng $9$."
    },
    {
        id: 318914, type: "drag_drop",
        content: "Cho một số có ba chữ số chia hết cho $7$ và tổng các chữ số của nó cũng chia hết cho $7$.<br>Có tất cả [1] số thỏa mãn điều kiện đã cho, trong đó số nhỏ nhất chia hết cho [2].",
        choices: ["5", "9", "19", "18"],
        correctAnswer: ["18", "19"],
        explanation: "Từ $100a + 10b + c \\equiv 2a + 3b + c \\equiv 0 \\pmod 7$ và $a + b + c \\equiv 0 \\pmod 7$, suy ra $a \\equiv 5b \\pmod 7$ và $c \\equiv b \\pmod 7$. Xét $b \\in \\{0; \\dots; 9\\}$ đếm được $18$ số. Số nhỏ nhất là $133 = 7 \\cdot 19$ nên chia hết cho $19$."
    },
    {
        id: 318915, type: "drag_drop",
        content: "Cho số nguyên $n$ thỏa mãn $n(n + 3)$ là số chính phương.<br>Có tất cả [1] số $n$ thỏa mãn điều kiện đã cho. Khi đó, có [2] số $n(n + 3)$ thỏa mãn.",
        choices: ["3", "4", "2", "5"],
        correctAnswer: ["4", "2"],
        explanation: "Đặt $n(n+3) = k^2 \\Leftrightarrow (2n + 3 - 2k)(2n + 3 + 2k) = 9$. Giải các cặp ước của $9$ thu được $4$ giá trị $n \\in \\{-4; -3; 0; 1\\}$, tương ứng $2$ giá trị của $n(n+3)$ là $0$ và $4$."
    },
    {
        id: 318916, type: "drag_drop",
        content: "Cho hai số nguyên dương thỏa mãn tổng hai số bằng $128$ và có ước chung lớn nhất bằng $16$.<br>Có [1] bộ số $(a; b)$ thỏa mãn, trong đó hiệu số lớn trừ số bé lớn nhất bằng [2].",
        choices: ["48", "3", "2", "32", "96"],
        correctAnswer: ["2", "96"],
        explanation: "Đặt $a = 16x, b = 16y$ với $(x, y) = 1 \\Rightarrow x + y = 8$. Có $2$ cặp là $\\{1; 7\\}$ và $\\{3; 5\\}$, tương ứng hai cặp số $\\{16; 112\\}$ và $\\{48; 80\\}$. Hiệu lớn nhất là $112 - 16 = 96$."
    },
    {
        id: 318917, type: "true_false",
        content: "Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "$7^{89} - 4^{81}$ có chữ số tận cùng bằng $3$.",
            "$2^{2014} \\cdot 9^{1955}$ chia $5$ dư $2$."
        ],
        correctAnswer: { "0": "true", "1": "false" },
        explanation: "a) $7^{89} = 7^{4 \\cdot 22 + 1} \\equiv 7 \\pmod{10}$, $4^{81} \\equiv 4 \\pmod{10} \\Rightarrow 7^{89} - 4^{81} \\equiv 3 \\pmod{10}$ (Đúng).\nb) $2^{2014} = (2^4)^{503} \\cdot 4 \\equiv -1 \\pmod 5$, $9^{1955} \\equiv (-1)^{1955} = -1 \\pmod 5 \\Rightarrow$ tích chia $5$ dư $1$ (Sai)."
    },
    {
        id: 318918, type: "true_false",
        content: "Cho $A = n^2 + n + 1$ ($n \\in \\mathbb{N}$). Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "$A$ không chia hết cho $2$.",
            "$A$ có chữ số tận cùng là số nguyên tố."
        ],
        correctAnswer: { "0": "true", "1": "false" },
        explanation: "a) $n(n+1)$ luôn chẵn nên $A = n(n+1) + 1$ luôn lẻ, không chia hết cho $2$ (Đúng).\nb) Với $n = 0$ thì $A = 1$ không phải số nguyên tố (Sai)."
    },
    {
        id: 318919, type: "true_false",
        content: "Cho số tự nhiên có hai chữ số, sao cho nếu viết nó tiếp sau số $1999$ thì ta được một số chia hết cho $37$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Có $3$ số tự nhiên thỏa mãn bài toán.",
            "Trong các số tự nhiên thỏa mãn, chỉ có một số chẵn."
        ],
        correctAnswer: { "0": "true", "1": "true" },
        explanation: "Ta có $199900 + \\overline{ab} \\equiv 26 + \\overline{ab} \\equiv 0 \\pmod{37} \\Rightarrow \\overline{ab} \\equiv 11 \\pmod{37}$. Suy ra $\\overline{ab} \\in \\{11; 48; 85\\}$: có $3$ số và chỉ có $1$ số chẵn là $48$."
    },
    {
        id: 318920, type: "true_false",
        content: "Cho số $\\overline{abcd}$ thỏa mãn số đó chia hết cho tích các số $\\overline{ab}$ và $\\overline{cd}$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "$\\overline{cd}$ chia hết cho $\\overline{ab}$.",
            "$\\overline{ab}$ là số nguyên tố.",
            "Có $3$ số $\\overline{abcd}$ thỏa mãn."
        ],
        correctAnswer: { "0": "true", "1": "true", "2": "false" },
        explanation: "Ta có $100\\overline{ab} + \\overline{cd} \\vdots (\\overline{ab} \\cdot \\overline{cd}) \\Rightarrow \\overline{cd} \\vdots \\overline{ab}$. Đặt $\\overline{cd} = k \\cdot \\overline{ab}$ ($1 \\le k \\le 9$), suy ra $100 + k \\vdots k\\overline{ab} \\Rightarrow k \\in \\{1; 2; 4; 5\\}$. Giải ra chỉ có $2$ số là $1734$ ($\\overline{ab}=17$) và $1352$ ($\\overline{ab}=13$)."
    },
    {
        id: 318921, type: "true_false",
        content: "Cho số tự nhiên có ba chữ số, biết rằng nó tăng gấp $n$ lần nếu cộng mỗi chữ số của nó với $n$ ($n$ là số tự nhiên, có thể gồm một hoặc nhiều chữ số). Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "$n$ là số tự nhiên có $3$ chữ số.",
            "Có $3$ số tự nhiên có ba chữ số thỏa mãn bài toán.",
            "Các số thỏa mãn không vượt quá $115$."
        ],
        correctAnswer: { "0": "false", "1": "false", "2": "false" },
        explanation: "Ta có $\\overline{abc} + 111n = n \\cdot \\overline{abc} \\Leftrightarrow \\overline{abc} = 111 + \\frac{111}{n - 1}$. Vì $n - 1 \\in \\{1; 3; 37; 111\\}$ nên $(n; \\overline{abc}) \\in \\{(2; 222), (4; 148), (38; 114), (112; 112)\\}$. Do đó cả 3 phát biểu đều sai."
    },
    {
        id: 318922, type: "fill_blank",
        content: "Cho số chính phương có $4$ chữ số biết rằng nếu cộng chữ số hàng nghìn với $3$ và trừ chữ số hàng đơn vị đi $3$ ta vẫn được một số chính phương. Số đó là ________.",
        correctAnswer: "1764",
        explanation: "Đặt số ban đầu là $a^2$, số mới là $b^2 = a^2 + 2997 \\Rightarrow (b-a)(b+a) = 2997 = 27 \\cdot 111$. Với $32 \\le a < b \\le 99$, tìm được duy nhất $b + a = 111, b - a = 27 \\Rightarrow a = 42, b = 69$. Số cần tìm là $42^2 = 1764$ (số mới $4761 = 69^2$)."
    },
    {
        id: 318923, type: "fill_blank",
        content: "Số nguyên dương $n$ nhỏ nhất thỏa mãn các số $n + 1$; $6n + 1$; $20n + 1$ đều là các số chính phương là ________.",
        correctAnswer: "48",
        explanation: "Đặt $n + 1 = a^2 \\Rightarrow 6a^2 - 5 = b^2$ (suy ra $a$ lẻ) và $20a^2 - 19 = c^2$ (suy ra $a$ không chia hết cho $3$). Thử lần lượt $a = 5 \\Rightarrow n = 24$ (loại); $a = 7 \\Rightarrow n = 48$ cho $49 = 7^2$, $289 = 17^2$, $961 = 31^2$ (thỏa mãn)."
    },
    {
        id: 318924, type: "fill_blank",
        content: "Cho số nguyên dương $n$ nhỏ nhất sao cho khi viết tiếp số đó vào sau số $2025$ ta được một số chia hết cho $113$. Tổng các chữ số của $n$ bằng ________.",
        correctAnswer: "15",
        explanation: "Thử với $n$ có $1$ chữ số ($20250 + n$) và $2$ chữ số ($202500 + n$) đều không chia hết cho $113$. Với $n$ có $3$ chữ số: $2025000 + n \\equiv 40 + n \\equiv 0 \\pmod{113} \\Rightarrow n \\equiv 73 \\pmod{113}$. Số nhỏ nhất là $n = 186$, tổng chữ số bằng $1 + 8 + 6 = 15$."
    },
    {
        id: 318925, type: "fill_blank",
        content: "Có ________ số nguyên tố $p$ thỏa mãn $2p + 1$ và $4p + 1$ đều là số nguyên tố.",
        correctAnswer: "1",
        explanation: "Với $p = 2$: $4p+1 = 9$ (loại). Với $p = 3$: $2p+1 = 7, 4p+1 = 13$ (nhận). Với $p > 3$: nếu $p \\equiv 1 \\pmod 3$ thì $2p+1 \\vdots 3$; nếu $p \\equiv 2 \\pmod 3$ thì $4p+1 \\vdots 3$. Vậy chỉ có $1$ số là $p = 3$."
    },
    {
        id: 318926, type: "fill_blank",
        content: "Cho số tự nhiên $a \\ge 3$ thỏa mãn $A = \\overline{a(a-1)} \\cdot \\overline{a(a-1)} = \\overline{(a-2)aa(a-1)}$. Số $A$ có hai chữ số tận cùng bằng ________.",
        correctAnswer: "76",
        explanation: "Phương trình tương đương $(11a - 1)^2 = 1111a - 2001 \\Leftrightarrow 11a^2 - 103a + 182 = 0 \\Rightarrow a = 7$. Khi đó $A = 76^2 = 5776$, hai chữ số tận cùng là $76$."
    },
    {
        id: 318927, type: "fill_blank",
        content: "Cho số chính phương có $4$ chữ số thỏa mãn chữ số cuối là số nguyên tố và căn bậc hai của số đó có tổng các chữ số là một số chính phương. Tổng các chữ số của số đó bằng ________.",
        correctAnswer: "9",
        explanation: "Chữ số tận cùng của số chính phương là số nguyên tố nên chỉ có thể là $5$. Căn bậc hai $k \\in \\{35; 45; 55; 65; 75; 85; 95\\}$. Chỉ có $k = 45$ có tổng chữ số $4 + 5 = 9$ là số chính phương. Số đó là $45^2 = 2025$, tổng chữ số bằng $9$."
    },
    {
        id: 318928, type: "fill_blank",
        content: "Có tất cả [1] bộ số $(x; y)$ thỏa mãn số $\\overline{34x5y}$ chia hết cho $36$. Khi $x$ nhận giá trị lớn nhất thì $y$ bằng [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu \"; \")</i>",
        correctAnswer: "3; 6",
        explanation: "Để chia hết cho $4$ thì $y \\in \\{2; 6\\}$. Để chia hết cho $9$ thì $x + y \\equiv 6 \\pmod 9$. Nếu $y = 2 \\Rightarrow x = 4$; nếu $y = 6 \\Rightarrow x \\in \\{0; 9\\}$. Vậy có $3$ bộ số, khi $x$ lớn nhất ($x = 9$) thì $y = 6$."
    },
    {
        id: 318929, type: "fill_blank",
        content: "Viết thêm vào bên phải số $579$ ba chữ số để được số chia hết cho $5; 7; 9$. Khi đó, có [1] số thỏa mãn, trong đó số [2] có tích các chữ số lớn nhất.<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu \"; \")</i>",
        correctAnswer: "3; 579285",
        explanation: "Số cần tìm chia hết cho $\\text{BCNN}(5, 7, 9) = 315$ và nằm trong $[579000; 579999]$. Có $3$ số là $579285$, $579600$ và $579915$. So sánh tích $3$ chữ số cuối: $2\\cdot 8\\cdot 5 = 80 > 9\\cdot 1\\cdot 5 = 45 > 0$, nên $579285$ có tích các chữ số lớn nhất."
    },
    {
        id: 318930, type: "fill_blank",
        content: "Có ________ bộ các số tự nhiên $a, b$ khác $0$ sao cho $(a, b) = 1$ và $\\frac{a + b}{a^2 + b^2} = \\frac{7}{25}$.",
        correctAnswer: "2",
        explanation: "Đặt $d = \\gcd(a+b, a^2+b^2)$. Vì $(a, b) = 1$ nên $d \\mid 2 \\Rightarrow d \\in \\{1; 2\\}$. Với $d = 1$: $a+b=7, a^2+b^2=25 \\Rightarrow (a; b) \\in \\{(3; 4), (4; 3)\\}$. Với $d = 2$: $a+b=14, a^2+b^2=50$ (vô nghiệm). Vậy có $2$ bộ số."
    },
    {
        id: 318931, type: "fill_blank",
        content: "Tổng các số tự nhiên khác $0$ là $a_1, a_2, \\dots, a_{49}$ bằng $999$. Ước số chung lớn nhất của chúng nhận giá trị lớn nhất bằng ________.",
        correctAnswer: "9",
        explanation: "Đặt $d = \\gcd(a_1, \\dots, a_{49})$ và $a_i = d \\cdot k_i$ ($k_i \\ge 1$). Khi đó $d(k_1 + \\dots + k_{49}) = 999 = 3^3 \\cdot 37$ với $k_1 + \\dots + k_{49} \\ge 49$. Ước nhỏ nhất của $999$ không nhỏ hơn $49$ là $111$, suy ra $d_{\\max} = \\frac{999}{111} = 9$."
    }
],
    "bt_hhkg_01": [
    {
        id: 321824, type: "multiple_choice",
        content: "Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh $a$, $SA \\perp (ABC)$ và $SA = a\\sqrt{3}$. Gọi $M, N$ lần lượt là trung điểm $AB$ và $SC$. Cosin của góc giữa hai đường thẳng $AN$ và $CM$ bằng bao nhiêu?",
        options: ["A. $\\frac{\\sqrt{2}}{3}$.", "B. $\\frac{\\sqrt{5}}{5}$.", "C. $\\frac{\\sqrt{3}}{4}$.", "D. $\\frac{1}{2}$."],
        correctAnswer: "C",
        explanation: "Gắn hệ trục $Oxyz$ với $A(0;0;0), B(a;0;0), C\\left(\\frac{a}{2};\\frac{a\\sqrt{3}}{2};0\\right), S(0;0;a\\sqrt{3})$. Ta có $M\\left(\\frac{a}{2};0;0\\right), N\\left(\\frac{a}{4};\\frac{a\\sqrt{3}}{4};\\frac{a\\sqrt{3}}{2}\\right)$. Khi đó $|\\overrightarrow{AN}| = a$, $|\\overrightarrow{CM}| = \\frac{a\\sqrt{3}}{2}$, $\\overrightarrow{AN}\\cdot\\overrightarrow{CM} = -\\frac{3a^2}{8} \\Rightarrow \\cos(AN, CM) = \\frac{\\sqrt{3}}{4}$."
    },
    {
        id: 321825, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật $AB = 2a$, $BC = a\\sqrt{2}$, $SA = a$ và $SA \\perp (ABCD)$. Gọi $M$ là trung điểm $SD$. Khi đó, $\\tan\\alpha$ với $\\alpha$ là góc giữa hai đường thẳng $SA$ và $CM$ bằng",
        options: ["A. $3\\sqrt{2}$.", "B. $2\\sqrt{2}$.", "C. $\\frac{3}{2}$.", "D. $\\sqrt{6}$."],
        correctAnswer: "A",
        explanation: "Gọi $H$ là trung điểm $AD$, suy ra $MH \\parallel SA$ và $MH = \\frac{a}{2}$, $MH \\perp (ABCD)$. Góc $\\alpha = (SA, CM) = \\widehat{HMC}$. Ta có $HC = \\sqrt{HD^2 + CD^2} = \\sqrt{\\frac{a^2}{2} + 4a^2} = \\frac{3a}{\\sqrt{2}} \\Rightarrow \\tan\\alpha = \\frac{HC}{MH} = 3\\sqrt{2}$."
    },
    {
        id: 321826, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có tất cả các cạnh đều bằng $a$. Gọi $I$ và $J$ lần lượt là trung điểm của $SC$ và $BC$. Số đo của góc $(IJ, CD)$ bằng",
        options: ["A. $90^\\circ$.", "B. $45^\\circ$.", "C. $60^\\circ$.", "D. $30^\\circ$."],
        correctAnswer: "C",
        explanation: "Ta có $IJ \\parallel SB$ (đường trung bình $\\Delta SBC$) và $CD \\parallel AB \\Rightarrow (IJ, CD) = (SB, AB) = \\widehat{SBA} = 60^\\circ$ (vì $\\Delta SAB$ đều)."
    },
    {
        id: 321827, type: "multiple_choice",
        content: "Cho hình chóp $S.ABC$ có độ dài các cạnh $SA = SB = SC = AB = AC = a$ và $BC = a\\sqrt{2}$. Góc giữa hai đường thẳng $AB$ và $SC$ bằng",
        options: ["A. $60^\\circ$.", "B. $90^\\circ$.", "C. $30^\\circ$.", "D. $45^\\circ$."],
        correctAnswer: "A",
        explanation: "Ta có $\\Delta SBC$ vuông tại $S$ ($SB^2 + SC^2 = BC^2$) nên $\\overrightarrow{SB}\\cdot\\overrightarrow{SC} = 0$; $\\Delta SAC$ đều nên $\\overrightarrow{SA}\\cdot\\overrightarrow{SC} = \\frac{a^2}{2}$. Suy ra $\\overrightarrow{AB}\\cdot\\overrightarrow{SC} = (\\overrightarrow{SB} - \\overrightarrow{SA})\\cdot\\overrightarrow{SC} = -\\frac{a^2}{2} \\Rightarrow \\cos(AB, SC) = \\frac{1}{2} \\Rightarrow (AB, SC) = 60^\\circ$."
    },
    {
        id: 321828, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình vuông, tam giác $SAB$ vuông tại $S$ và $\\widehat{SBA} = 30^\\circ$. Mặt phẳng $(SAB)$ vuông góc với mặt phẳng đáy. Gọi $M$ là trung điểm của $AB$. Khi đó, cosin góc tạo bởi hai đường thẳng $SM$ và $BD$ bằng",
        options: ["A. $\\frac{1}{\\sqrt{3}}$.", "B. $\\frac{\\sqrt{2}}{\\sqrt{3}}$.", "C. $\\frac{\\sqrt{26}}{13}$.", "D. $\\frac{\\sqrt{2}}{4}$."],
        correctAnswer: "D",
        explanation: "Đặt $AB = 2$, $M$ là trung điểm $AB$ nên $\\Delta SAM$ đều cạnh $1$. Gắn hệ trục với $A(0;0;0), B(2;0;0), D(0;2;0), M(1;0;0), S\\left(\\frac{1}{2};0;\\frac{\\sqrt{3}}{2}\\right)$. Khi đó $\\overrightarrow{MS} = \\left(-\\frac{1}{2};0;\\frac{\\sqrt{3}}{2}\\right)$ ($|\\overrightarrow{MS}| = 1$) và $\\overrightarrow{BD} = (-2;2;0)$ ($|\\overrightarrow{BD}| = 2\\sqrt{2}$). Suy ra $\\cos(SM, BD) = \\frac{1}{2\\sqrt{2}} = \\frac{\\sqrt{2}}{4}$."
    },
    {
        id: 321829, type: "multiple_choice",
        content: "Cho tứ diện $ABCD$ có $AB = CD = a$. Gọi $M, N$ lần lượt là trung điểm của $AD$ và $BC$. Độ dài đoạn thẳng $MN$ bằng bao nhiêu để góc giữa hai đường thẳng $AB$ và $MN$ bằng $30^\\circ$?",
        options: ["A. $MN = \\frac{a}{4}$.", "B. $MN = \\frac{a\\sqrt{3}}{3}$.", "C. $MN = \\frac{a\\sqrt{3}}{2}$.", "D. $MN = \\frac{a}{2}$."],
        correctAnswer: "C",
        explanation: "Gọi $P$ là trung điểm $AC$, suy ra $PM = PN = \\frac{a}{2}$ và $PN \\parallel AB$. Tam giác $PMN$ cân tại $P$ có $(AB, MN) = \\widehat{PNM} = 30^\\circ \\Rightarrow MN = 2 \\cdot PN \\cos 30^\\circ = \\frac{a\\sqrt{3}}{2}$."
    },
    {
        id: 321830, type: "multiple_choice",
        content: "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác vuông tại $A$, $BA = 2AC = 2a$, cạnh bên $AA' = 2a$, $M$ là trung điểm $BC$. Cosin góc giữa hai đường thẳng $B'C$ và $AM$ bằng",
        options: ["A. $\\frac{1}{5}$.", "B. $\\frac{\\sqrt{5}}{5}$.", "C. $\\frac{\\sqrt{2}}{2}$.", "D. $\\frac{1}{2}$."],
        correctAnswer: "B",
        explanation: "Gắn hệ trục $A(0;0;0), B(2;0;0), C(0;1;0), B'(2;0;2), M\\left(1;\\frac{1}{2};0\\right)$. Ta có $\\overrightarrow{B'C} = (-2;1;-2)$ ($|\\overrightarrow{B'C}| = 3$) và $\\overrightarrow{AM} = \\left(1;\\frac{1}{2};0\\right)$ ($|\\overrightarrow{AM}| = \\frac{\\sqrt{5}}{2}$). Suy ra $\\cos(B'C, AM) = \\frac{|-3/2|}{3 \\cdot \\sqrt{5}/2} = \\frac{\\sqrt{5}}{5}$."
    },
    {
        id: 321831, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình vuông $ABCD$ cạnh bằng $a$ và các cạnh bên đều bằng $a$. Gọi $M$ và $N$ lần lượt là trung điểm của $AD$ và $SD$. Số đo của góc $(MN, SC)$ bằng",
        options: ["A. $30^\\circ$.", "B. $45^\\circ$.", "C. $60^\\circ$.", "D. $90^\\circ$."],
        correctAnswer: "D",
        explanation: "Vì $MN \\parallel SA$ nên $(MN, SC) = (SA, SC)$. Trong $\\Delta SAC$ có $SA = SC = a$ và $AC = a\\sqrt{2} \\Rightarrow SA^2 + SC^2 = AC^2 \\Rightarrow SA \\perp SC \\Rightarrow (MN, SC) = 90^\\circ$."
    },
    {
        id: 321832, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang vuông tại $A$ và $D$, $SA$ vuông góc với mặt phẳng đáy. Biết $AD = DC = a$, $AB = 2a$, $SA = \\frac{2a\\sqrt{3}}{3}$, cosin góc giữa hai đường thẳng $SD$ và $BC$ bằng",
        options: ["A. $\\frac{1}{\\sqrt{42}}$.", "B. $\\frac{2}{\\sqrt{42}}$.", "C. $\\frac{3}{\\sqrt{42}}$.", "D. $\\frac{4}{\\sqrt{42}}$."],
        correctAnswer: "C",
        explanation: "Gắn hệ trục $A(0;0;0), D(0;1;0), C(1;1;0), B(2;0;0), S\\left(0;0;\\frac{2}{\\sqrt{3}}\\right)$. Ta có $\\overrightarrow{SD} = \\left(0;1;-\\frac{2}{\\sqrt{3}}\\right)$ ($|\\overrightarrow{SD}| = \\sqrt{\\frac{7}{3}}$) và $\\overrightarrow{BC} = (-1;1;0)$ ($|\\overrightarrow{BC}| = \\sqrt{2}$). Suy ra $\\cos(SD, BC) = \\frac{1}{\\sqrt{14/3}} = \\frac{3}{\\sqrt{42}}$."
    },
    {
        id: 321833, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, cạnh bên $SA$ vuông góc với mặt phẳng đáy, $SA = AB = a$. Gọi $M$ là trung điểm của $SB$. Góc giữa $AM$ và $BD$ bằng",
        options: ["A. $45^\\circ$.", "B. $30^\\circ$.", "C. $90^\\circ$.", "D. $60^\\circ$."],
        correctAnswer: "D",
        explanation: "Gắn hệ trục $A(0;0;0), B(1;0;0), D(0;1;0), S(0;0;1), M\\left(\\frac{1}{2};0;\\frac{1}{2}\\right)$. Khi đó $\\overrightarrow{AM} = \\left(\\frac{1}{2};0;\\frac{1}{2}\\right)$ ($|\\overrightarrow{AM}| = \\frac{\\sqrt{2}}{2}$) và $\\overrightarrow{BD} = (-1;1;0)$ ($|\\overrightarrow{BD}| = \\sqrt{2}$). Suy ra $\\cos(AM, BD) = \\frac{|-1/2|}{1} = \\frac{1}{2} \\Rightarrow (AM, BD) = 60^\\circ$."
    },
    {
        id: 321834, type: "drag_drop",
        content: "Cho tứ diện đều $ABCD$ có độ dài cạnh bằng $a$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, CD, AD, BC$.<br>- Góc giữa $MC$ và $MD$ bằng [1].<br>- Gọi $E$ là trung điểm của $AC$. Góc giữa $QE$ và $PE$ bằng [2].<br><i>(Các kết quả làm tròn đến hàng đơn vị nếu cần)</i>",
        choices: ["$71^\\circ$", "$30^\\circ$", "$65^\\circ$", "$45^\\circ$", "$90^\\circ$"],
        correctAnswer: ["$71^\\circ$", "$90^\\circ$"],
        explanation: "1) $MC = MD = \\frac{a\\sqrt{3}}{2}, CD = a \\Rightarrow \\cos\\widehat{CMD} = \\frac{MC^2 + MD^2 - CD^2}{2\\cdot MC\\cdot MD} = \\frac{1}{3} \\Rightarrow \\widehat{CMD} \\approx 71^\\circ$.\n2) $QE \\parallel AB$ và $PE \\parallel CD$, mà trong tứ diện đều $AB \\perp CD \\Rightarrow (QE, PE) = 90^\\circ$."
    },
    {
        id: 321835, type: "drag_drop",
        content: "Cho hình chóp $S.ABC$ có $SA = SB = SC = AB = a$; $AC = a\\sqrt{2}$ và $BC = a\\sqrt{3}$.<br>- $\\Delta SAC$ [1] tại $S$.<br>- $\\Delta ABC$ [2] tại $A$.<br>- Cosin góc giữa hai đường thẳng $SC$ và $AB$ bằng [3].",
        choices: ["$\\frac{1}{2}$", "vuông", "cân", "$\\frac{\\sqrt{3}}{3}$", "$\\frac{\\sqrt{3}}{2}$", "vuông cân"],
        correctAnswer: ["vuông cân", "vuông", "$\\frac{1}{2}$"],
        explanation: "1) $SA = SC = a, AC = a\\sqrt{2} \\Rightarrow \\Delta SAC$ vuông cân tại $S$.\n2) $AB^2 + AC^2 = a^2 + 2a^2 = 3a^2 = BC^2 \\Rightarrow \\Delta ABC$ vuông tại $A$.\n3) Trong $\\Delta SBC$ có $\\cos\\widehat{BSC} = \\frac{a^2 + a^2 - 3a^2}{2a^2} = -\\frac{1}{2}$. Khi đó $\\overrightarrow{SC}\\cdot\\overrightarrow{AB} = \\overrightarrow{SC}\\cdot(\\overrightarrow{SB} - \\overrightarrow{SA}) = -\\frac{a^2}{2} - 0 = -\\frac{a^2}{2} \\Rightarrow \\cos(SC, AB) = \\frac{1}{2}$."
    },
    {
        id: 321836, type: "drag_drop",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật có $AB = a$, $AD = a\\sqrt{2}$, $SA \\perp AB$, $SA \\perp AD$, $SA \\perp AC$ và $SA = 2a$. Gọi $I$ là trung điểm của $CD$.<br>- Cosin góc giữa hai đường thẳng $CD$ và $SD$ bằng [1].<br>- Cosin góc giữa hai đường thẳng $SB$ và $AI$ bằng [2].",
        choices: ["$\\frac{\\sqrt{3}}{5}$", "$\\frac{1}{2}$", "$0$", "$\\frac{1}{3\\sqrt{5}}$"],
        correctAnswer: ["$0$", "$\\frac{1}{3\\sqrt{5}}$"],
        explanation: "1) Vì $CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD) \\Rightarrow CD \\perp SD \\Rightarrow \\cos(CD, SD) = 0$.\n2) Gắn hệ trục $A(0;0;0), B(1;0;0), I\\left(\\frac{1}{2};\\sqrt{2};0\\right), S(0;0;2)$. Ta có $\\overrightarrow{SB} = (1;0;-2)$ ($|\\overrightarrow{SB}| = \\sqrt{5}$), $\\overrightarrow{AI} = \\left(\\frac{1}{2};\\sqrt{2};0\\right)$ ($|\\overrightarrow{AI}| = \\frac{3}{2}$) $\\Rightarrow \\cos(SB, AI) = \\frac{1/2}{\\frac{3\\sqrt{5}}{2}} = \\frac{1}{3\\sqrt{5}}$."
    },
    {
        id: 321837, type: "drag_drop",
        content: "Cho hình hộp thoi $ABCD.A'B'C'D'$ có tất cả các cạnh bằng $a$ và $\\widehat{ABC} = \\widehat{B'BA} = \\widehat{B'BC} = 60^\\circ$.<br>- Góc giữa đường thẳng $AB$ và $B'C$ bằng [1].<br>- Tứ giác $A'B'CD$ là [2]. <i>(Chọn ô vuông đúng nhất)</i>",
        choices: ["$120^\\circ$", "hình thoi", "$60^\\circ$", "$90^\\circ$", "hình chữ nhật", "hình vuông"],
        correctAnswer: ["$90^\\circ$", "hình vuông"],
        explanation: "1) $\\overrightarrow{BA}\\cdot\\overrightarrow{B'C} = \\overrightarrow{BA}\\cdot(\\overrightarrow{BC} - \\overrightarrow{BB'}) = a^2\\cos 60^\\circ - a^2\\cos 60^\\circ = 0 \\Rightarrow (AB, B'C) = 90^\\circ$.\n2) Tứ giác $A'B'CD$ là hình bình hành có $A'B' = B'C = a$ (do $\\Delta B'BC$ đều) và $B'C \\perp A'B'$ nên là hình vuông."
    },
    {
        id: 321838, type: "drag_drop",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, cạnh bằng $a$; $SA$ vuông góc với đáy và $SA = a\\sqrt{3}$.<br>- Sin góc giữa hai đường thẳng $SO$ và $CD$ bằng [1].<br>- Cosin góc giữa $SB$ và $AC$ bằng [2].",
        choices: ["$\\frac{\\sqrt{182}}{14}$", "$\\frac{\\sqrt{14}}{14}$", "$\\frac{\\sqrt{2}}{4}$", "$\\frac{\\sqrt{6}}{12}$", "$\\frac{\\sqrt{3}}{4}$"],
        correctAnswer: ["$\\frac{\\sqrt{182}}{14}$", "$\\frac{\\sqrt{2}}{4}$"],
        explanation: "Gắn hệ trục $A(0;0;0), B(1;0;0), C(1;1;0), D(0;1;0), O\\left(\\frac{1}{2};\\frac{1}{2};0\\right), S(0;0;\\sqrt{3})$.\n1) $\\cos(SO, CD) = \\frac{1/2}{\\sqrt{7/2}} = \\frac{1}{\\sqrt{14}} \\Rightarrow \\sin(SO, CD) = \\sqrt{\\frac{13}{14}} = \\frac{\\sqrt{182}}{14}$.\n2) $\\overrightarrow{SB} = (1;0;-\\sqrt{3})$ ($|\\overrightarrow{SB}| = 2$), $\\overrightarrow{AC} = (1;1;0)$ ($|\\overrightarrow{AC}| = \\sqrt{2}$) $\\Rightarrow \\cos(SB, AC) = \\frac{1}{2\\sqrt{2}} = \\frac{\\sqrt{2}}{4}$."
    },
    {
        id: 321839, type: "true_false",
        content: "Cho tứ diện đều $ABCD$, cạnh có độ dài bằng $a$. Gọi $O$ là tâm đường tròn ngoại tiếp $\\Delta BCD$. Gọi $M$ là trung điểm của $CD$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "$BO \\perp CD$.",
            "Góc giữa $AC$ và $BM$ không vượt quá $70^\\circ$."
        ],
        correctAnswer: { "0": "true", "1": "false" },
        explanation: "a) Trong tam giác đều $BCD$, tâm $O$ nằm trên đường cao $BM \\Rightarrow BO \\perp CD$ (Đúng).\nb) Gọi $N$ là trung điểm $AD$, ta có $MN \\parallel AC$, $MN = \\frac{a}{2}$, $BM = BN = \\frac{a\\sqrt{3}}{2}$. Khi đó $\\cos\\widehat{BMN} = \\frac{MN}{2\\cdot BM} = \\frac{\\sqrt{3}}{6} \\Rightarrow (AC, BM) \\approx 73,2^\\circ > 70^\\circ$ (Sai)."
    },
    {
        id: 321840, type: "true_false",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật có $AB = a$, $AD = a\\sqrt{2}$, $SA \\perp (ABCD)$ và $SA = 2a$. Gọi $I$ là trung điểm của $CD$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Cosin góc giữa hai đường thẳng $BC$ và $SD$ bằng $\\frac{1}{3\\sqrt{5}}$.",
            "Cosin góc giữa hai đường thẳng $SB$ và $AI$ bằng $\\frac{1}{\\sqrt{3}}$."
        ],
        correctAnswer: { "0": "false", "1": "false" },
        explanation: "a) $BC \\parallel AD \\Rightarrow \\cos(BC, SD) = \\cos\\widehat{SDA} = \\frac{AD}{SD} = \\frac{a\\sqrt{2}}{a\\sqrt{6}} = \\frac{1}{\\sqrt{3}}$ (Sai).\nb) Theo tính toán ở Câu 13, $\\cos(SB, AI) = \\frac{1}{3\\sqrt{5}}$ (Sai)."
    },
    {
        id: 321841, type: "true_false",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình thang vuông tại $A$ và $B$ có $AD = 2AB = 2BC = 2a$ và $SA \\perp (ABCD)$. Biết rằng $SC$ tạo với đáy một góc $60^\\circ$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Cosin góc giữa $BC$ và $SD$ bằng $\\frac{3}{5}$.",
            "Sin góc tạo bởi $AI$ và $SD$ (với $I$ là trung điểm $CD$) bằng $\\frac{4}{5}$."
        ],
        correctAnswer: { "0": "false", "1": "true" },
        explanation: "Ta có $AC = a\\sqrt{2} \\Rightarrow SA = AC\\tan 60^\\circ = a\\sqrt{6}$, $SD = \\sqrt{SA^2 + AD^2} = a\\sqrt{10}$.\na) $BC \\parallel AD \\Rightarrow \\cos(BC, SD) = \\frac{AD}{SD} = \\frac{2}{\\sqrt{10}} = \\frac{\\sqrt{10}}{5}$ (Sai).\nb) Gắn hệ trục $A(0;0;0), D(0;2;0), I\\left(\\frac{1}{2};\\frac{3}{2};0\\right), S(0;0;\\sqrt{6})$. Ta có $\\cos(AI, SD) = \\frac{3}{5} \\Rightarrow \\sin(AI, SD) = \\frac{4}{5}$ (Đúng)."
    },
    {
        id: 321842, type: "true_false",
        content: "Cho hình lăng trụ $ABC.A'B'C'$ có đáy là tam giác đều cạnh $a$, hình chiếu của điểm $A'$ xuống mặt đáy $(ABC)$ trùng với trung điểm của $BC$. Biết cạnh bên tạo với mặt đáy một góc $60^\\circ$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Tan góc tạo bởi $B'C'$ và $A'C$ bằng $3$.",
            "Cosin góc tạo bởi $CC'$ và $AB$ bằng $\\frac{\\sqrt{13}}{4}$."
        ],
        correctAnswer: { "0": "true", "1": "false" },
        explanation: "Gọi $H$ là trung điểm $BC$. Ta có $AH = \\frac{a\\sqrt{3}}{2}$, $\\widehat{A'AH} = 60^\\circ \\Rightarrow A'H = \\frac{3a}{2}$, $AA' = a\\sqrt{3}$.\na) $B'C' \\parallel BC \\Rightarrow \\tan(B'C', A'C) = \\tan\\widehat{A'CH} = \\frac{A'H}{HC} = \\frac{3a/2}{a/2} = 3$ (Đúng).\nb) $CC' \\parallel AA' \\Rightarrow \\cos(CC', AB) = \\cos\\widehat{A'AB} = \\frac{AA'^2 + AB^2 - A'B^2}{2\\cdot AA'\\cdot AB} = \\frac{\\sqrt{3}}{4}$ (Sai)."
    },
    {
        id: 321843, type: "true_false",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình thoi cạnh $a$, $\\widehat{ABC} = 60^\\circ$. Tam giác $SAB$ cân tại $S$ và thuộc mặt phẳng vuông góc với đáy. Biết rằng $SC$ tạo với đáy một góc $30^\\circ$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Cosin góc giữa $BC$ và $SD$ bằng $\\frac{5\\sqrt{2}}{8}$.",
            "Cosin góc tạo bởi $DH$ và $SC$ (với $H$ là chân đường cao hạ từ $S$ xuống mặt đáy $(ABCD)$) bằng $\\frac{3\\sqrt{17}}{14}$."
        ],
        correctAnswer: { "0": "true", "1": "false" },
        explanation: "$H$ là trung điểm $AB \\Rightarrow CH = \\frac{a\\sqrt{3}}{2}, SH = CH\\tan 30^\\circ = \\frac{a}{2}$. Gắn hệ trục gốc $H$: $B\\left(\\frac{1}{2};0;0\\right), C\\left(0;\\frac{\\sqrt{3}}{2};0\\right), D\\left(-1;\\frac{\\sqrt{3}}{2};0\\right), S\\left(0;0;\\frac{1}{2}\\right)$.\na) $\\cos(BC, SD) = \\frac{5/4}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{8}$ (Đúng).\nb) $\\cos(DH, SC) = \\frac{3/4}{\\frac{\\sqrt{7}}{2} \\cdot 1} = \\frac{3\\sqrt{7}}{14}$ (Sai)."
    },
    {
        id: 321844, type: "fill_blank",
        content: "Cho hình chóp $S.ABC$ có $SA = SB = SC = AB = a$, $AC = a\\sqrt{2}$ và $BC = a\\sqrt{3}$. Khi đó, cosin góc giữa hai đường thẳng $SC$ và $AB$ bằng ________. <i>(Điền phân số tối giản a/b)</i>",
        correctAnswer: "1/2",
        explanation: "Tương tự Câu 12: $\\overrightarrow{SC}\\cdot\\overrightarrow{SA} = 0$ và $\\overrightarrow{SC}\\cdot\\overrightarrow{SB} = -\\frac{a^2}{2} \\Rightarrow \\cos(SC, AB) = \\frac{|-a^2/2|}{a^2} = \\frac{1}{2}$."
    },
    {
        id: 321845, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình vuông $ABCD$ cạnh $2a$, $SA \\perp (ABCD)$ và $SB = a\\sqrt{5}$. Gọi $M$ là trung điểm $AB$ và $N$ là trung điểm $BC$. Khi đó, cosin góc giữa hai đường thẳng $SM$ và $DN$ bằng ________. <i>(Kết quả làm tròn đến hàng phần mười)</i>",
        correctAnswer: "0,6",
        explanation: "Ta có $SA = \\sqrt{SB^2 - AB^2} = a$. Gắn hệ trục $A(0;0;0), D(0;2;0), S(0;0;1), M(1;0;0), N(2;1;0)$. Khi đó $\\overrightarrow{SM} = (1;0;-1)$, $\\overrightarrow{DN} = (2;-1;0) \\Rightarrow \\cos(SM, DN) = \\frac{2}{\\sqrt{2}\\cdot\\sqrt{5}} = \\frac{\\sqrt{10}}{5} \\approx 0,6$."
    },
    {
        id: 321846, type: "fill_blank",
        content: "Cho tứ diện $ABCD$ có $AB$ vuông góc với mặt phẳng $(BCD)$. Biết tam giác $BCD$ vuông tại $C$ và $AB = \\frac{a\\sqrt{6}}{2}$, $AC = a\\sqrt{2}$, $CD = a$. Gọi $E$ là trung điểm của $AC$. Góc giữa hai đường thẳng $AB$ và $DE$ bằng ________ độ.",
        correctAnswer: "60",
        explanation: "Gọi $F$ là trung điểm $BC$, suy ra $EF \\parallel AB$, $EF = \\frac{a\\sqrt{6}}{4}$ và $EF \\perp (BCD)$. Ta có $BC = \\sqrt{AC^2 - AB^2} = \\frac{a\\sqrt{2}}{2} \\Rightarrow CF = \\frac{a\\sqrt{2}}{4} \\Rightarrow DF = \\sqrt{CD^2 + CF^2} = \\frac{3a\\sqrt{2}}{4}$. Suy ra $\\tan\\widehat{DEF} = \\frac{DF}{EF} = \\sqrt{3} \\Rightarrow (AB, DE) = 60^\\circ$."
    },
    {
        id: 321847, type: "fill_blank",
        content: "Cho tứ diện $ABCD$ có $AB$ vuông góc với mặt phẳng $(BCD)$. Biết tam giác $BCD$ vuông tại $C$ và $AB = \\frac{a\\sqrt{6}}{2}$, $AC = a\\sqrt{2}$, $CD = a$. Gọi $E$ là trung điểm của $AD$. Góc giữa hai đường thẳng $AB$ và $CE$ bằng ________ độ.",
        correctAnswer: "45",
        explanation: "Gọi $K$ là trung điểm $BD$, suy ra $EK \\parallel AB$, $EK = \\frac{a\\sqrt{6}}{4}$ và $EK \\perp (BCD)$. Ta có $BD = \\sqrt{BC^2 + CD^2} = \\frac{a\\sqrt{6}}{2} \\Rightarrow CK = \\frac{BD}{2} = \\frac{a\\sqrt{6}}{4} = EK \\Rightarrow \\Delta EKC$ vuông cân tại $K \\Rightarrow (AB, CE) = \\widehat{CEK} = 45^\\circ$."
    },
    {
        id: 321848, type: "fill_blank",
        content: "Cho hình lăng trụ tam giác đều $ABC.A'B'C'$ có $AB = a$ và $AA' = a\\sqrt{2}$. Góc giữa hai đường thẳng $AB'$ và $BC'$ bằng ________ độ.",
        correctAnswer: "60",
        explanation: "Ta có $AB' = BC' = \\sqrt{a^2 + 2a^2} = a\\sqrt{3}$. Tính tích vô hướng $\\overrightarrow{AB'}\\cdot\\overrightarrow{BC'} = (\\overrightarrow{AB} + \\overrightarrow{BB'})\\cdot(\\overrightarrow{BC} + \\overrightarrow{CC'}) = -\\frac{a^2}{2} + 2a^2 = \\frac{3a^2}{2}$. Suy ra $\\cos(AB', BC') = \\frac{3a^2/2}{3a^2} = \\frac{1}{2} \\Rightarrow (AB', BC') = 60^\\circ$."
    },
    {
        id: 321849, type: "fill_blank",
        content: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = AD = \\sqrt{2}$, $AA' = 2$. Khi đó, cosin góc giữa hai đường thẳng $AB'$ và $CD'$ bằng ________. <i>(Điền phân số tối giản a/b)</i>",
        correctAnswer: "1/3",
        explanation: "Ta có $AB' \\parallel DC' \\Rightarrow (AB', CD') = (DC', CD')$. Trong hình chữ nhật $CDD'C'$ có $CD = \\sqrt{2}, CC' = 2 \\Rightarrow DC' = CD' = \\sqrt{6}$. Gọi $O$ là tâm $CDD'C'$, áp dụng định lí cosin cho $\\Delta OCD$: $\\cos\\widehat{COD} = \\frac{3/2 + 3/2 - 2}{2 \\cdot 3/2} = \\frac{1}{3}$."
    },
    {
        id: 321850, type: "fill_blank",
        content: "Cho lăng trụ đều $ABC.A'B'C'$ có tất cả các cạnh bằng $a$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $AB, B'C'$. Gọi $\\alpha$ là góc giữa hai đường thẳng $AC$ và $MN$. Khi đó, $\\tan\\alpha$ bằng ________.",
        correctAnswer: "2",
        explanation: "Gắn hệ trục $A(0;0;0), B(1;0;0), C\\left(\\frac{1}{2};\\frac{\\sqrt{3}}{2};0\\right), M\\left(\\frac{1}{2};0;0\\right), N\\left(\\frac{3}{4};\\frac{\\sqrt{3}}{4};1\\right)$. Ta có $|\\overrightarrow{AC}| = 1$, $|\\overrightarrow{MN}| = \\frac{\\sqrt{5}}{2}$, $\\overrightarrow{AC}\\cdot\\overrightarrow{MN} = \\frac{1}{2} \\Rightarrow \\cos\\alpha = \\frac{1}{\\sqrt{5}} \\Rightarrow \\tan\\alpha = 2$."
    },
    {
        id: 321851, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{3}$. Gọi $G_1, G_2$ lần lượt là trọng tâm $\\Delta BCD$ và $\\Delta SCD$. Góc giữa hai đường thẳng $CD$ và $G_1G_2$ bằng ________ độ.",
        correctAnswer: "60",
        explanation: "Vì $G_1, G_2$ là trọng tâm $\\Delta BCD$ và $\\Delta SCD$ nên $G_1G_2 \\parallel BS$. Lại có $CD \\parallel AB \\Rightarrow (CD, G_1G_2) = (AB, BS) = \\widehat{SBA}$. Do $\\tan\\widehat{SBA} = \\frac{SA}{AB} = \\sqrt{3}$ nên góc cần tìm bằng $60^\\circ$."
    },
    {
        id: 321852, type: "fill_blank",
        content: "Cho hình lăng trụ tam giác đều $ABC.A'B'C'$ cạnh đáy bằng $a$, cạnh bên có độ dài $a\\sqrt{2}$. Góc giữa hai đường thẳng $AB'$ và $BC'$ bằng ________ độ.",
        correctAnswer: "60",
        explanation: "Ta có $\\overrightarrow{AB'}\\cdot\\overrightarrow{BC'} = (\\overrightarrow{AB} + \\overrightarrow{BB'})\\cdot(\\overrightarrow{BC} + \\overrightarrow{BB'}) = a^2\\cos 120^\\circ + 2a^2 = \\frac{3a^2}{2}$. Vì $AB' = BC' = a\\sqrt{3}$ nên $\\cos(AB', BC') = \\frac{1}{2} \\Rightarrow (AB', BC') = 60^\\circ$."
    },
    {
        id: 321853, type: "fill_blank",
        content: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông cân tại $C$. Tam giác $SAB$ vuông cân tại $S$ và $\\widehat{BSC} = 60^\\circ$. Gọi $M$ là trung điểm cạnh $SB$, $\\varphi$ là góc giữa đường thẳng $AB$ và $CM$. Biết $\\cos\\varphi = \\frac{\\sqrt{a}}{b}$ ($a, b \\in \\mathbb{N}^*$). Khi đó, $a - b =$ ________.",
        correctAnswer: "0",
        explanation: "Đặt $AB = 2 \\Rightarrow SA = SB = CA = CB = \\sqrt{2}$. Vì $\\widehat{BSC} = 60^\\circ$ nên $\\Delta SBC$ đều $\\Rightarrow SC = \\sqrt{2}$ và $CM = \\frac{\\sqrt{6}}{2}$, đồng thời $\\Delta SAC$ cũng đều. Ta có $\\overrightarrow{AB}\\cdot\\overrightarrow{CM} = (\\overrightarrow{SB} - \\overrightarrow{SA})\\cdot\\left(\\frac{1}{2}\\overrightarrow{SB} - \\overrightarrow{SC}\\right) = 1 - 1 - 0 + 1 = 1 \\Rightarrow \\cos\\varphi = \\frac{1}{2 \\cdot \\frac{\\sqrt{6}}{2}} = \\frac{\\sqrt{6}}{6}$. Vậy $a = 6, b = 6 \\Rightarrow a - b = 0$."
    }
],
    "bt_hhkg_02": [
    {
        id: 322061, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình vuông với $AC = 5\\sqrt{2}$. Biết $SA$ vuông góc với mặt phẳng $(ABCD)$ và $SA = 5$. Góc giữa $SD$ và mặt phẳng $(SAB)$ bằng",
        options: ["A. $45^\\circ$.", "B. $90^\\circ$.", "C. $30^\\circ$.", "D. $60^\\circ$."],
        correctAnswer: "A",
        explanation: "Vì $ABCD$ là hình vuông có $AC = 5\\sqrt{2}$ nên $AD = 5$. Do $AD \\perp AB$ và $AD \\perp SA$ nên $AD \\perp (SAB)$. Suy ra góc giữa $SD$ và $(SAB)$ là $\\widehat{DSA}$. Ta có $\\tan\\widehat{DSA} = \\frac{AD}{SA} = \\frac{5}{5} = 1 \\Rightarrow \\widehat{DSA} = 45^\\circ$."
    },
    {
        id: 322062, type: "multiple_choice",
        content: "Cho hình chóp $S.ABC$ có $SA = SB = CB = CA$, hình chiếu vuông góc của $S$ lên mặt phẳng $(ABC)$ trùng với trung điểm $I$ của cạnh $AB$. Góc giữa đường thẳng $SC$ và mặt phẳng $(ABC)$ bằng",
        options: ["A. $45^\\circ$.", "B. $30^\\circ$.", "C. $90^\\circ$.", "D. $60^\\circ$."],
        correctAnswer: "A",
        explanation: "Vì $SI \\perp (ABC)$ nên hình chiếu của $SC$ lên $(ABC)$ là $CI \\Rightarrow (SC, (ABC)) = \\widehat{SCI}$. Hai tam giác cân $SAB$ và $CAB$ có các cạnh bằng nhau nên $SI = CI$, do đó $\\Delta SIC$ vuông cân tại $I \\Rightarrow \\widehat{SCI} = 45^\\circ$."
    },
    {
        id: 322063, type: "multiple_choice",
        content: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = a\\sqrt{2}$, $BC = a$, $AA' = a\\sqrt{3}$. Góc giữa đường thẳng $AC'$ và mặt phẳng $(ABCD)$ bằng",
        options: ["A. $30^\\circ$.", "B. $60^\\circ$.", "C. $45^\\circ$.", "D. $90^\\circ$."],
        correctAnswer: "C",
        explanation: "Vì $C'C \\perp (ABCD)$ nên $(AC', (ABCD)) = \\widehat{C'AC}$. Ta có $AC = \\sqrt{AB^2 + BC^2} = a\\sqrt{3} = CC' \\Rightarrow \\tan\\widehat{C'AC} = 1 \\Rightarrow \\widehat{C'AC} = 45^\\circ$."
    },
    {
        id: 322064, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$, tam giác $ABD$ đều cạnh $a\\sqrt{2}$. Biết $SA$ vuông góc với mặt phẳng đáy và $SA = \\frac{3\\sqrt{2}}{2}a$. Góc giữa đường thẳng $SO$ và mặt phẳng $(ABCD)$ bằng",
        options: ["A. $45^\\circ$.", "B. $30^\\circ$.", "C. $60^\\circ$.", "D. $90^\\circ$."],
        correctAnswer: "C",
        explanation: "Hình chiếu của $SO$ lên $(ABCD)$ là $AO$. Vì $\\Delta ABD$ đều cạnh $a\\sqrt{2}$ nên $AO = \\frac{a\\sqrt{2} \\cdot \\sqrt{3}}{2} = \\frac{a\\sqrt{6}}{2}$. Suy ra $\\tan\\widehat{SOA} = \\frac{SA}{AO} = \\frac{3\\sqrt{2}}{\\sqrt{6}} = \\sqrt{3} \\Rightarrow (SO, (ABCD)) = 60^\\circ$."
    },
    {
        id: 322065, type: "multiple_choice",
        content: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông cân tại $C$, tam giác $SAB$ đều và nằm trong mặt phẳng vuông góc với mặt đáy. Cạnh $SC$ tạo với mặt phẳng $(ABC)$ một góc là $\\varphi$. Khẳng định nào sau đây là đúng?",
        options: ["A. $\\tan\\varphi = \\sqrt{2}$.", "B. $\\tan\\varphi = \\sqrt{3}$.", "C. $\\tan\\varphi = \\frac{\\sqrt{6}}{3}$.", "D. $\\tan\\varphi = \\frac{\\sqrt{3}}{3}$."],
        correctAnswer: "B",
        explanation: "Gọi $H$ là trung điểm $AB$. Vì $\\Delta SAB$ đều và $(SAB) \\perp (ABC)$ nên $SH \\perp (ABC) \\Rightarrow \\varphi = \\widehat{SCH}$. Đặt $AB = 2a \\Rightarrow SH = a\\sqrt{3}$ và $CH = \\frac{AB}{2} = a \\Rightarrow \\tan\\varphi = \\frac{SH}{CH} = \\sqrt{3}$."
    },
    {
        id: 322066, type: "multiple_choice",
        content: "Cho hình lập phương $ABCD.A'B'C'D'$. Gọi $M, N$ lần lượt là trung điểm của cạnh $AC$ và $B'C'$. Gọi $\\alpha$ là góc hợp giữa đường thẳng $MN$ và mặt phẳng $(A'B'C'D')$. Giá trị của $\\sin\\alpha$ bằng",
        options: ["A. $\\frac{1}{2\\sqrt{6}}$.", "B. $\\frac{\\sqrt{3}}{3}$.", "C. $\\frac{1}{\\sqrt{6}}$.", "D. $\\frac{2}{\\sqrt{5}}$."],
        correctAnswer: "D",
        explanation: "Đặt cạnh hình lập phương bằng $2$. Gọi $O'$ là tâm đáy trên $(A'B'C'D')$, suy ra $MO' \\perp (A'B'C'D')$ và $MO' = 2$, $O'N = 1$. Khi đó $MN = \\sqrt{2^2 + 1^2} = \\sqrt{5} \\Rightarrow \\sin\\alpha = \\frac{MO'}{MN} = \\frac{2}{\\sqrt{5}}$."
    },
    {
        id: 322067, type: "multiple_choice",
        content: "Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh bằng $a$. Gọi $M$ là trung điểm của $SD$. Tan của góc giữa đường thẳng $BM$ và mặt phẳng $(ABCD)$ bằng",
        options: ["A. $\\frac{\\sqrt{2}}{2}$.", "B. $\\frac{\\sqrt{3}}{3}$.", "C. $\\frac{2}{3}$.", "D. $\\frac{1}{3}$."],
        correctAnswer: "D",
        explanation: "Gọi $O$ là tâm đáy $ABCD$ và $H$ là trung điểm $OD$. Khi đó $MH \\parallel SO \\Rightarrow MH \\perp (ABCD)$ và $MH = \\frac{SO}{2} = \\frac{a\\sqrt{2}}{4}$. Lại có $BH = \\frac{3}{4}BD = \\frac{3a\\sqrt{2}}{4} \\Rightarrow \\tan(BM, (ABCD)) = \\frac{MH}{BH} = \\frac{1}{3}$."
    },
    {
        id: 322068, type: "multiple_choice",
        content: "Cho hình chóp $S.ABC$ có $SA$ vuông góc với mặt phẳng $(ABC)$, $SA = 2a$, tam giác $ABC$ vuông tại $B$, $AB = a$, $BC = a\\sqrt{3}$. Góc giữa đường thẳng $SC$ và mặt phẳng $(ABC)$ bằng",
        options: ["A. $90^\\circ$.", "B. $30^\\circ$.", "C. $60^\\circ$.", "D. $45^\\circ$."],
        correctAnswer: "D",
        explanation: "Ta có $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{a^2 + 3a^2} = 2a = SA$. Vì $SA \\perp (ABC)$ nên $(SC, (ABC)) = \\widehat{SCA} = 45^\\circ$."
    },
    {
        id: 322069, type: "multiple_choice",
        content: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, cạnh $SA$ vuông góc với mặt phẳng đáy và $SA = 2a$, gọi $M$ là trung điểm của $SC$. Côsin của góc $\\alpha$ là góc giữa đường thẳng $BM$ và $(ABC)$ bằng",
        options: ["A. $\\cos\\alpha = \\frac{\\sqrt{7}}{14}$.", "B. $\\cos\\alpha = \\frac{2\\sqrt{7}}{7}$.", "C. $\\cos\\alpha = \\frac{\\sqrt{21}}{7}$.", "D. $\\cos\\alpha = \\frac{\\sqrt{5}}{7}$."],
        correctAnswer: "C",
        explanation: "Gọi $H$ là trung điểm $AC$, suy ra $MH \\parallel SA \\Rightarrow MH \\perp (ABC)$ và $MH = a$. Ta có $BH = \\frac{a\\sqrt{3}}{2} \\Rightarrow BM = \\sqrt{MH^2 + BH^2} = \\frac{a\\sqrt{7}}{2} \\Rightarrow \\cos\\alpha = \\frac{BH}{BM} = \\frac{\\sqrt{21}}{7}$."
    },
    {
        id: 322070, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SD = a$ và $SD$ vuông góc với mặt phẳng đáy. Góc giữa đường thẳng $SA$ và mặt phẳng $(SBD)$ bằng",
        options: ["A. $60^\\circ$.", "B. $14^\\circ$.", "C. $45^\\circ$.", "D. $30^\\circ$."],
        correctAnswer: "D",
        explanation: "Gọi $O$ là tâm hình vuông $ABCD$. Ta có $AO \\perp BD$ và $AO \\perp SD \\Rightarrow AO \\perp (SBD)$. Suy ra $(SA, (SBD)) = \\widehat{ASO}$. Với $AO = \\frac{a\\sqrt{2}}{2}$ và $SA = a\\sqrt{2}$, ta có $\\sin\\widehat{ASO} = \\frac{AO}{SA} = \\frac{1}{2} \\Rightarrow \\widehat{ASO} = 30^\\circ$."
    },
    {
        id: 322071, type: "drag_drop",
        content: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Gọi $M, N$ là hai điểm thay đổi lần lượt trên các cạnh $AB, A'D'$ sao cho $MN = \\frac{2\\sqrt{3}a}{3}$.<br>- Cosin góc giữa đường thẳng $A'D$ và $CD'$ bằng [1].<br>- Sin góc giữa đường thẳng $MN$ và mặt phẳng $(ABCD)$ bằng [2].",
        choices: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{2}}{3}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{3}}{3}$"],
        correctAnswer: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$"],
        explanation: "1) Vì $A'D \\parallel B'C$ nên $(A'D, CD') = (B'C, CD') = 60^\\circ$ (do $\\Delta B'CD'$ đều) $\\Rightarrow \\cos = \\frac{1}{2}$.\n2) Khoảng cách từ $N$ xuống $(ABCD)$ bằng $a$, nên $\\sin(MN, (ABCD)) = \\frac{a}{MN} = \\frac{\\sqrt{3}}{2}$."
    },
    {
        id: 322072, type: "drag_drop",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi cạnh bằng $1$, $\\widehat{BAD} = 60^\\circ$, tam giác $SBD$ là tam giác đều, $SA = 2SC$.<br>- Chiều cao $SH$ của hình chóp $S.ABCD$ bằng [1].<br>- Cosin của góc hợp bởi đường thẳng $SB$ và mặt phẳng $(ABCD)$ bằng [2].",
        choices: ["$\\frac{2\\sqrt{15}}{5}$", "$\\frac{\\sqrt{13}}{5}$", "$\\frac{2\\sqrt{3}}{5}$"],
        correctAnswer: ["$\\frac{2\\sqrt{3}}{5}$", "$\\frac{\\sqrt{13}}{5}$"],
        explanation: "Vì $SB = SD = 1$ nên hình chiếu $H$ của $S$ nằm trên $AC$. Đặt $O(0;0;0), A\\left(\\frac{\\sqrt{3}}{2};0;0\\right), C\\left(-\\frac{\\sqrt{3}}{2};0;0\\right), B\\left(0;\\frac{1}{2};0\\right), S(x;0;z)$. Từ $SB = 1$ và $SA = 2SC$ giải được $x = -\\frac{3\\sqrt{3}}{10}$ và $SH = z = \\frac{2\\sqrt{3}}{5}$. Suy ra $\\sin(SB, (ABCD)) = \\frac{SH}{SB} = \\frac{2\\sqrt{3}}{5} \\Rightarrow \\cos = \\frac{\\sqrt{13}}{5}$."
    },
    {
        id: 322073, type: "drag_drop",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, hình chiếu vuông góc của $S$ lên mặt đáy là trung điểm $M$ của cạnh $AD$, $SM = \\frac{a\\sqrt{3}}{2}$. Gọi $N$ là trung điểm của cạnh $BC$.<br>- Tan góc giữa đường thẳng $SB$ và mặt phẳng đáy bằng [1].<br>- Sin của góc giữa $SN$ và mặt phẳng $(SBM)$ bằng [2].",
        choices: ["$\\frac{2}{\\sqrt{35}}$", "$\\frac{\\sqrt{3}}{15}$", "$\\frac{\\sqrt{15}}{5}$", "$\\frac{\\sqrt{5}}{13}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{3\\sqrt{35}}{35}$"],
        correctAnswer: ["$\\frac{\\sqrt{15}}{5}$", "$\\frac{2}{\\sqrt{35}}$"],
        explanation: "1) $BM = \\sqrt{AB^2 + AM^2} = \\frac{a\\sqrt{5}}{2} \\Rightarrow \\tan(SB, (ABCD)) = \\frac{SM}{BM} = \\frac{\\sqrt{3}}{\\sqrt{5}} = \\frac{\\sqrt{15}}{5}$.\n2) Do $(SBM) \\perp (ABCD)$ theo giao tuyến $BM$ nên $d(N, (SBM)) = d(N, BM) = \\frac{2 S_{\\Delta BMN}}{BM} = \\frac{a}{\\sqrt{5}}$. Lại có $SN = \\sqrt{SM^2 + MN^2} = \\frac{a\\sqrt{7}}{2} \\Rightarrow \\sin(SN, (SBM)) = \\frac{d(N, (SBM))}{SN} = \\frac{2}{\\sqrt{35}}$."
    },
    {
        id: 322074, type: "drag_drop",
        content: "Cho hình chóp $S.ABCD$ có $(SAB) \\perp (ABCD)$, đáy $ABCD$ là hình vuông, tam giác $SAB$ vuông tại $S$, $SA = 2$, $SB = 2\\sqrt{3}$.<br>- Chiều cao $SH$ của hình chóp $S.ABCD$ bằng [1].<br>- Giá trị tan của góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$ bằng [2].",
        choices: ["$\\frac{\\sqrt{6}}{3}$", "$\\frac{\\sqrt{3}}{5}$", "$\\frac{3}{2}$", "$\\frac{1}{\\sqrt{2}}$", "$\\frac{\\sqrt{3}}{2}$", "$\\sqrt{3}$"],
        correctAnswer: ["$\\sqrt{3}$", "$\\frac{\\sqrt{3}}{5}$"],
        explanation: "1) Ta có $AB = \\sqrt{SA^2 + SB^2} = 4 \\Rightarrow SH = \\frac{SA \\cdot SB}{AB} = \\sqrt{3}$.\n2) Có $BH = \\frac{SB^2}{AB} = 3 \\Rightarrow CH = \\sqrt{BH^2 + BC^2} = \\sqrt{3^2 + 4^2} = 5 \\Rightarrow \\tan(SC, (ABCD)) = \\frac{SH}{CH} = \\frac{\\sqrt{3}}{5}$."
    },
    {
        id: 322075, type: "drag_drop",
        content: "Cho hình chóp $S.ABCD$ có $ABCD$ là hình thoi tâm $I$, cạnh $a$, góc $\\widehat{BAD} = 60^\\circ$. Biết $SA = SB = SD = \\frac{a\\sqrt{3}}{2}$.<br>- Cosin góc giữa $SC$ và hình chiếu của $SC$ trên mặt phẳng đáy bằng [1].<br>- Gọi $\\alpha$ là góc giữa đường thẳng $SD$ với $(SBC)$. Khi đó, $\\sin\\alpha$ bằng [2].",
        choices: ["$\\frac{1}{3}$", "$\\frac{4}{\\sqrt{21}}$", "$\\frac{1}{\\sqrt{2}}$", "$\\frac{2}{3}$", "$\\frac{4}{\\sqrt{5}}$", "$\\frac{\\sqrt{5}}{3}$"],
        correctAnswer: ["$\\frac{4}{\\sqrt{21}}$", "$\\frac{\\sqrt{5}}{3}$"],
        explanation: "Vì $SA = SB = SD$ nên hình chiếu $H$ của $S$ trùng trọng tâm $\\Delta ABD$ đều cạnh $a$. Ta có $AH = \\frac{a\\sqrt{3}}{3} \\Rightarrow SH = \\frac{a\\sqrt{15}}{6}$ và $HC = AC - AH = \\frac{2a\\sqrt{3}}{3}$.\n1) $SC = \\sqrt{SH^2 + HC^2} = \\frac{a\\sqrt{7}}{2} \\Rightarrow \\cos(SC, HC) = \\frac{HC}{SC} = \\frac{4}{\\sqrt{21}}$.\n2) Gắn hệ trục tính trực tiếp được $\\sin(SD, (SBC)) = \\frac{\\sqrt{5}}{3}$."
    },
    {
        id: 322076, type: "true_false",
        content: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, có $AB = a$, $BC = a\\sqrt{3}$. Biết $SA \\perp (ABC)$, $SB$ tạo với đáy một góc $60^\\circ$ và $M$ là trung điểm của $BC$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Cosin góc giữa $SC$ và mặt phẳng $(ABC)$ bằng $\\frac{2}{\\sqrt{7}}$.",
            "Cosin góc giữa $SM$ và mặt phẳng $(ABC)$ bằng $\\frac{\\sqrt{133}}{19}$."
        ],
        correctAnswer: { "0": "true", "1": "true" },
        explanation: "Ta có $SA = AB\\tan 60^\\circ = a\\sqrt{3}$ và $AC = 2a$.\na) $SC = \\sqrt{SA^2 + AC^2} = a\\sqrt{7} \\Rightarrow \\cos(SC, (ABC)) = \\frac{AC}{SC} = \\frac{2}{\\sqrt{7}}$ (Đúng).\nb) $AM = \\sqrt{a^2 + \\frac{3a^2}{4}} = \\frac{a\\sqrt{7}}{2}$, $SM = \\frac{a\\sqrt{19}}{2} \\Rightarrow \\cos(SM, (ABC)) = \\frac{AM}{SM} = \\frac{\\sqrt{7}}{\\sqrt{19}} = \\frac{\\sqrt{133}}{19}$ (Đúng)."
    },
    {
        id: 322077, type: "true_false",
        content: "Cho hình chóp $S.ABCD$, có đáy là nửa lục giác đều cạnh $a$, $AD = 2a$. Biết $SA \\perp (ABCD)$ và đường thẳng $SB$ tạo với đáy một góc $45^\\circ$. Gọi $I$ là trung điểm của $CD$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Tích cosin góc tạo bởi các cạnh $SC, SD$ và mặt đáy $(ABCD)$ bằng $\\frac{\\sqrt{15}}{5}$.",
            "Tan góc tạo bởi $SI$ và mặt phẳng $(ABCD)$ bằng $\\frac{2}{\\sqrt{5}}$."
        ],
        correctAnswer: { "0": "true", "1": "false" },
        explanation: "Vì $SA \\perp (ABCD)$ và $\\widehat{SBA} = 45^\\circ$ nên $SA = AB = a$. Trong nửa lục giác đều: $AC = a\\sqrt{3}$, $AD = 2a$, $AI = \\frac{a\\sqrt{13}}{2}$.\na) $\\cos(SC, (ABCD)) \\cdot \\cos(SD, (ABCD)) = \\frac{\\sqrt{3}}{2} \\cdot \\frac{2}{\\sqrt{5}} = \\frac{\\sqrt{15}}{5}$ (Đúng).\nb) $\\tan(SI, (ABCD)) = \\frac{SA}{AI} = \\frac{2}{\\sqrt{13}} \\ne \\frac{2}{\\sqrt{5}}$ (Sai)."
    },
    {
        id: 322078, type: "true_false",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$ cạnh $a$, $BD = a\\sqrt{3}$, $SA \\perp (ABCD)$. Biết $SC$ tạo với đáy một góc $60^\\circ$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Cosin góc tạo bởi $SC$ và $BD$ bằng $0$.",
            "Tan góc tạo bởi $SC$ và mặt phẳng $(SAB)$ bằng $\\frac{\\sqrt{39}}{13}$.",
            "Sin góc tạo bởi $SD$ và mặt phẳng $(SAC)$ bằng $\\frac{\\sqrt{39}}{13}$."
        ],
        correctAnswer: { "0": "true", "1": "true", "2": "false" },
        explanation: "Vì $BD = a\\sqrt{3}$ nên $AC = a$ và $SA = AC\\tan 60^\\circ = a\\sqrt{3}$.\na) $BD \\perp AC$ và $BD \\perp SA \\Rightarrow BD \\perp (SAC) \\Rightarrow BD \\perp SC \\Rightarrow \\cos = 0$ (Đúng).\nb) $d(C, (SAB)) = d(C, AB) = \\frac{a\\sqrt{3}}{2}$, $SC = 2a \\Rightarrow \\sin(SC, (SAB)) = \\frac{\\sqrt{3}}{4} \\Rightarrow \\tan = \\frac{\\sqrt{3}}{\\sqrt{13}} = \\frac{\\sqrt{39}}{13}$ (Đúng).\nc) $DO \\perp (SAC) \\Rightarrow \\sin(SD, (SAC)) = \\frac{DO}{SD} = \\frac{a\\sqrt{3}/2}{2a} = \\frac{\\sqrt{3}}{4}$ (Sai)."
    },
    {
        id: 322079, type: "true_false",
        content: "Cho hình lăng trụ $ABCD.A'B'C'D'$ có đáy $ABCD$ là hình chữ nhật có $AB = 2a$, $AD = 2a\\sqrt{3}$, hình chiếu vuông góc của $A'$ lên mặt phẳng $(ABCD)$ trùng với tâm $O$ của hình chữ nhật $ABCD$, biết cạnh bên $AA'$ tạo với đáy một góc $60^\\circ$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Góc tạo bởi $AA'$ và mặt phẳng đáy là $\\widehat{A'AO}$.",
            "Cosin góc tạo bởi $A'C$ và mặt phẳng $(A'BD)$ bằng $\\frac{\\sqrt{13}}{4}$."
        ],
        correctAnswer: { "0": "true", "1": "true" },
        explanation: "a) Hình chiếu của $AA'$ lên $(ABCD)$ là $AO$ nên góc giữa $AA'$ và đáy là $\\widehat{A'AO}$ (Đúng).\nb) Ta có $OA = OC = 2a$, $A'O = 2a\\sqrt{3}$, $A'C = 4a$. Vì $(A'BD) \\perp (ABCD)$ theo giao tuyến $BD$ nên $d(C, (A'BD)) = d(C, BD) = \\frac{2a \\cdot 2a\\sqrt{3}}{4a} = a\\sqrt{3}$. Suy ra $\\sin(A'C, (A'BD)) = \\frac{\\sqrt{3}}{4} \\Rightarrow \\cos = \\frac{\\sqrt{13}}{4}$ (Đúng)."
    },
    {
        id: 322080, type: "true_false",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật $ABCD$, hình chiếu vuông góc của đỉnh $S$ lên mặt đáy là điểm $H$ thuộc cạnh $AB$ sao cho $\\overrightarrow{HB} = -2\\overrightarrow{HA}$. Biết $AB = 3$, $AD = 6$ và $SH = 2$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Tan góc tạo bởi $SA$ và mặt phẳng $(SHD)$ bằng $\\frac{3\\sqrt{5}}{10}$.",
            "Tan góc tạo bởi $SB$ và mặt phẳng $(SHC)$ bằng $\\frac{6}{\\sqrt{185}}$.",
            "Cosin góc tạo bởi hai đường thẳng $SD$ và $HC$ bằng $\\frac{17}{\\sqrt{410}}$."
        ],
        correctAnswer: { "0": "false", "1": "false", "2": "true" },
        explanation: "Ta có $HA = 1, HB = 2, SH = 2$.\na) $d(A, (SHD)) = d(A, HD) = \\frac{6}{\\sqrt{37}}$, $SA = \\sqrt{5} \\Rightarrow \\sin(SA, (SHD)) = \\frac{6}{\\sqrt{185}} \\Rightarrow \\tan = \\frac{6}{\\sqrt{149}}$ (Sai).\nb) $d(B, (SHC)) = d(B, HC) = \\frac{6}{\\sqrt{10}}$, $SB = 2\\sqrt{2} \\Rightarrow \\sin(SB, (SHC)) = \\frac{3\\sqrt{5}}{10} \\Rightarrow \\tan = \\frac{3}{\\sqrt{11}}$ (Sai).\nc) Gắn hệ trục $A(0;0;0), H(1;0;0), S(1;0;2), D(0;6;0), C(3;6;0)$: $\\overrightarrow{SD} = (-1;6;-2)$, $\\overrightarrow{HC} = (2;6;0) \\Rightarrow \\cos(SD, HC) = \\frac{34}{\\sqrt{41}\\cdot\\sqrt{40}} = \\frac{17}{\\sqrt{410}}$ (Đúng)."
    },
    {
        id: 322081, type: "fill_blank",
        content: "Cho hình chóp $S.ABC$ có $SA$ vuông góc với mặt phẳng $(ABC)$, $SA = \\sqrt{2}a$, tam giác $ABC$ vuông cân tại $B$ và $AC = 2a$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABC)$ bằng ________ độ.",
        correctAnswer: "45",
        explanation: "Vì $\\Delta ABC$ vuông cân tại $B$ có $AC = 2a$ nên $AB = \\frac{AC}{\\sqrt{2}} = a\\sqrt{2} = SA$. Do $SA \\perp (ABC)$ nên $(SB, (ABC)) = \\widehat{SBA} = 45^\\circ$."
    },
    {
        id: 322082, type: "fill_blank",
        content: "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $B$ có cạnh $AB = \\sqrt{2}$, $BC = \\sqrt{3}$ và cạnh $AA' = \\sqrt{15}$. Góc giữa đường thẳng $A'C$ và mặt phẳng $(ABC)$ bằng ________ độ.",
        correctAnswer: "60",
        explanation: "Ta có $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{5}$. Do $A'A \\perp (ABC)$ nên $\\tan(A'C, (ABC)) = \\frac{AA'}{AC} = \\frac{\\sqrt{15}}{\\sqrt{5}} = \\sqrt{3} \\Rightarrow (A'C, (ABC)) = 60^\\circ$."
    },
    {
        id: 322083, type: "fill_blank",
        content: "Cho hình lăng trụ đứng $ABC.A'B'C'$ biết tam giác $ABC$ vuông tại $B$, $AB = a$, $BC = a\\sqrt{2}$, $AA' = \\frac{a\\sqrt{3}}{2}$. Gọi $I$ là trung điểm của $A'B'$. Sin góc giữa đường thẳng $CI$ và mặt phẳng $(ABC)$ bằng ________. <i>(Điền phân số tối giản a/b)</i>",
        correctAnswer: "1/2",
        explanation: "Gọi $H$ là trung điểm $AB$, suy ra $IH \\perp (ABC)$ và $IH = \\frac{a\\sqrt{3}}{2}$. Ta có $CH = \\sqrt{BC^2 + BH^2} = \\frac{3a}{2} \\Rightarrow CI = \\sqrt{IH^2 + CH^2} = a\\sqrt{3}$. Suy ra $\\sin(CI, (ABC)) = \\frac{IH}{CI} = \\frac{1}{2}$."
    },
    {
        id: 322084, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA = a\\sqrt{2}$ và $SA$ vuông góc với mặt đáy $(ABCD)$. Gọi $M, N$ lần lượt là hình chiếu vuông góc của đỉnh $A$ lên các cạnh $SB$ và $SD$. Khi đó góc giữa đường thẳng $SB$ và mặt phẳng $(AMN)$ bằng ________ độ.",
        correctAnswer: "60",
        explanation: "Ta có $BC \\perp (SAB) \\Rightarrow BC \\perp AM$, lại có $AM \\perp SB \\Rightarrow AM \\perp (SBC) \\Rightarrow AM \\perp SC$. Tương tự $AN \\perp SC$, suy ra $SC \\perp (AMN)$. Do đó $\\sin(SB, (AMN)) = \\cos(SB, SC) = \\frac{SB}{SC} = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2} \\Rightarrow (SB, (AMN)) = 60^\\circ$."
    },
    {
        id: 322085, type: "fill_blank",
        content: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và $SA = a\\sqrt{5}$, đáy là tam giác vuông tại $A$ với $AB = a$, $AC = 2a$. Gọi $\\alpha$ là góc giữa đường thẳng $SA$ và mặt phẳng $(SBC)$. Giá trị của $\\tan\\alpha$ bằng ________. <i>(Điền phân số tối giản a/b)</i>",
        correctAnswer: "2/5",
        explanation: "Kẻ $AH \\perp BC$ ($H \\in BC$) và $AK \\perp SH$ ($K \\in SH$), suy ra $AK \\perp (SBC) \\Rightarrow \\alpha = \\widehat{ASH}$. Ta có $AH = \\frac{AB \\cdot AC}{\\sqrt{AB^2 + AC^2}} = \\frac{2a}{\\sqrt{5}} \\Rightarrow \\tan\\alpha = \\frac{AH}{SA} = \\frac{2}{5}$."
    },
    {
        id: 322086, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, cạnh bên $SA$ vuông góc với đáy. Biết rằng $AB = a$, $SD = a\\sqrt{5}$. Góc giữa đường thẳng $AC$ và mặt phẳng $(SCD)$ bằng ________ độ. <i>(Làm tròn đến hàng phần trăm)</i>",
        correctAnswer: "39,23",
        explanation: "Ta có $SA = \\sqrt{SD^2 - AD^2} = 2a$. Kẻ $AH \\perp SD \\Rightarrow AH \\perp (SCD)$, suy ra $AH = \\frac{SA \\cdot AD}{SD} = \\frac{2a}{\\sqrt{5}}$. Với $AC = a\\sqrt{2}$, ta có $\\sin(AC, (SCD)) = \\frac{AH}{AC} = \\frac{\\sqrt{10}}{5} \\Rightarrow (AC, (SCD)) \\approx 39,23^\\circ$."
    },
    {
        id: 322087, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình thoi cạnh $2a$, $\\widehat{ABC} = 60^\\circ$, $SA = a\\sqrt{3}$ và $SA \\perp (ABCD)$. Sin góc giữa $SA$ và mặt phẳng $(SBD)$ bằng ________. <i>(Điền phân số tối giản a/b)</i>",
        correctAnswer: "1/2",
        explanation: "Gọi $O$ là tâm hình thoi. Vì $\\Delta ABC$ đều cạnh $2a$ nên $AC = 2a \\Rightarrow AO = a$. Do $BD \\perp (SAC)$ nên hình chiếu của $SA$ lên $(SBD)$ là $SO \\Rightarrow (SA, (SBD)) = \\widehat{ASO}$. Có $SO = \\sqrt{SA^2 + AO^2} = 2a \\Rightarrow \\sin\\widehat{ASO} = \\frac{AO}{SO} = \\frac{1}{2}$."
    },
    {
        id: 322088, type: "fill_blank",
        content: "Cho hình lập phương $ABCD.A'B'C'D'$. Gọi $\\alpha$ là góc giữa đường thẳng $AC'$ và $(A'BCD')$. Khi đó giá trị của $\\tan\\alpha = \\sqrt{k}$. Giá trị của $k$ bằng ________.",
        correctAnswer: "2",
        explanation: "Gắn hệ trục đơn vị $A(0;0;0), C'(1;1;1)$ và mặt phẳng $(A'BCD'): x + z - 1 = 0$ có pháp tuyến $\\vec{n} = (1;0;1)$. Ta có $\\sin\\alpha = \\frac{|1 + 0 + 1|}{\\sqrt{3}\\cdot\\sqrt{2}} = \\sqrt{\\frac{2}{3}} \\Rightarrow \\tan\\alpha = \\sqrt{2} \\Rightarrow k = 2$."
    },
    {
        id: 322089, type: "fill_blank",
        content: "Cho hình lăng trụ đứng $ABCD.A'B'C'D'$ có đáy $ABCD$ là hình bình hành và tam giác $ACD$ vuông cân tại $A$, $AC = 2a$. Biết $A'C$ tạo với đáy một góc $\\alpha$ thỏa mãn $\\tan\\alpha = \\frac{\\sqrt{2}}{2}$. Gọi $I$ là trung điểm $CD$. Sin góc giữa đường thẳng $AC$ và mặt phẳng $(A'CD)$ bằng ________. <i>(Điền phân số tối giản a/b)</i>",
        correctAnswer: "1/2",
        explanation: "Ta có $AA' = AC\\tan\\alpha = a\\sqrt{2}$, $AI = \\frac{CD}{2} = a\\sqrt{2}$. Kẻ $AH \\perp A'I \\Rightarrow AH \\perp (A'CD)$. Vì $\\Delta A'AI$ vuông cân tại $A$ nên $AH = a$. Suy ra $\\sin(AC, (A'CD)) = \\frac{AH}{AC} = \\frac{a}{2a} = \\frac{1}{2}$."
    },
    {
        id: 322090, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi cạnh $a$, $\\widehat{ABC} = 60^\\circ$ và $SB = a$. Hình chiếu vuông góc của điểm $S$ lên mặt phẳng $(ABC)$ trùng với trọng tâm tam giác $ABC$. Gọi $\\varphi$ là góc giữa đường thẳng $SB$ và mặt phẳng $(SCD)$. Khi đó, $\\tan\\varphi$ bằng ________.",
        correctAnswer: "1",
        explanation: "Đặt $a = 1$, $\\Delta ABC$ đều cạnh $1$ có trọng tâm $G$, suy ra $BG = \\frac{1}{\\sqrt{3}}$ và $SG = \\sqrt{1 - \\frac{1}{3}} = \\frac{\\sqrt{6}}{3}$. Gắn hệ trục tâm $O$: $A\\left(\\frac{1}{2};0;0\\right), C\\left(-\\frac{1}{2};0;0\\right), B\\left(0;\\frac{\\sqrt{3}}{2};0\\right), D\\left(0;-\\frac{\\sqrt{3}}{2};0\\right), S\\left(0;\\frac{\\sqrt{3}}{6};\\frac{\\sqrt{6}}{3}\\right)$. Tính được $\\sin\\varphi = \\frac{\\sqrt{2}}{2} \\Rightarrow \\tan\\varphi = 1$."
    }
],
    "bt_hhkg_03": [
    {
        id: 325051, type: "multiple_choice",
        content: "Cho tam giác $ACD$ và tam giác $BCD$ nằm trên hai mặt phẳng vuông góc nhau và $AC = AD = BC = BD = a$, $CD = 2x$. Với giá trị nào của $x$ thì $(ABC) \\perp (ABD)$?",
        options: ["A. $a\\sqrt{2}$.", "B. $\\frac{a\\sqrt{2}}{2}$.", "C. $\\frac{a\\sqrt{3}}{3}$.", "D. $a\\sqrt{3}$."],
        correctAnswer: "C",
        explanation: "Gọi $M$ là trung điểm $CD$, đặt $a = 1$. Ta có $MA = MB = \\sqrt{1 - x^2}$ và $MA \\perp MB$. Gắn hệ trục gốc $M$ với $C(x;0;0), D(-x;0;0), A(0;\\sqrt{1-x^2};0), B(0;0;\\sqrt{1-x^2})$. Điều kiện $(ABC) \\perp (ABD)$ tương đương $\\vec{n}_{(ABC)} \\cdot \\vec{n}_{(ABD)} = 0 \\Leftrightarrow 1 - 3x^2 = 0 \\Rightarrow x = \\frac{a\\sqrt{3}}{3}$."
    },
    {
        id: 325052, type: "multiple_choice",
        content: "Cho hình chóp đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Gọi $\\alpha$ là góc giữa hai mặt phẳng $(SBD)$ và $(SCD)$. Mệnh đề nào sau đây đúng?",
        options: ["A. $\\tan\\alpha = \\sqrt{6}$.", "B. $\\tan\\alpha = \\frac{\\sqrt{2}}{2}$.", "C. $\\tan\\alpha = \\frac{\\sqrt{3}}{2}$.", "D. $\\tan\\alpha = \\sqrt{2}$."],
        correctAnswer: "D",
        explanation: "Gọi $O$ là tâm đáy và $M$ là trung điểm $SD$. Do $\\Delta SBD$ vuông cân tại $S$ và $\\Delta SCD$ đều cạnh $a$ nên $OM \\perp SD, CM \\perp SD \\Rightarrow \\alpha = \\widehat{OMC}$. Ta có $CO \\perp (SBD)$ với $CO = \\frac{a\\sqrt{2}}{2}$ và $OM = \\frac{a}{2} \\Rightarrow \\tan\\alpha = \\frac{CO}{OM} = \\sqrt{2}$."
    },
    {
        id: 325053, type: "multiple_choice",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, tam giác đều $SAB$ nằm trong mặt phẳng vuông góc với đáy. Khi đó, $\\tan$ của góc tạo bởi hai mặt phẳng $(SAB)$ và $(SCD)$ bằng",
        options: ["A. $\\frac{2\\sqrt{3}}{3}$.", "B. $\\sqrt{2}$.", "C. $\\frac{\\sqrt{2}}{3}$.", "D. $\\frac{\\sqrt{3}}{3}$."],
        correctAnswer: "A",
        explanation: "Gọi $H, K$ lần lượt là trung điểm $AB, CD$. Ta có $SH \\perp (ABCD)$ và $SH = \\frac{a\\sqrt{3}}{2}$, $HK = a$. Giao tuyến hai mặt phẳng là đường thẳng qua $S$ song song $AB$ nên góc giữa $(SAB)$ và $(SCD)$ là $\\widehat{HSK}$. Suy ra $\\tan\\widehat{HSK} = \\frac{HK}{SH} = \\frac{a}{a\\sqrt{3}/2} = \\frac{2\\sqrt{3}}{3}$."
    },
    {
        id: 325054, type: "multiple_choice",
        content: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = 3a$, $BC = a$, tam giác $ABC$ vuông tại $B$. Gọi $G$ là trọng tâm tam giác $SAB$, $(\\alpha)$ là mặt phẳng chứa $CG$ và song song với $AB$. Giá trị của cosin góc tạo bởi hai mặt phẳng $(\\alpha)$ và $(SAB)$ là",
        options: ["A. $\\frac{\\sqrt{5}}{5}$.", "B. $\\frac{\\sqrt{5}}{3}$.", "C. $\\frac{\\sqrt{2}}{2}$.", "D. $\\frac{\\sqrt{3}}{2}$."],
        correctAnswer: "C",
        explanation: "Qua $G$ kẻ đường thẳng song song $AB$ cắt $SB$ tại $E$, suy ra $E$ thuộc $(\\alpha)$ và $EB = \\frac{1}{3}SB$. Do $CB \\perp (SAB)$ nên góc giữa $(\\alpha)$ và $(SAB)$ bằng $\\widehat{CEB}$ trong mặt phẳng vuông góc với $AB$ qua $B$, tức là mặt phẳng chứa đường cao từ $G$ tới $AB$. Khoảng cách từ $G$ đến $AB$ là $h = \\frac{1}{3}SA = a = BC$, suy ra góc bằng $45^\\circ \\Rightarrow \\cos = \\frac{\\sqrt{2}}{2}$."
    },
    {
        id: 325055, type: "multiple_choice",
        content: "Cho hình chóp tứ giác đều $S.ABCD$ có $M, N, P, Q$ lần lượt là trung điểm $SA, SB, SC, SD$. Tỉ số độ dài $\\frac{SA}{AB}$ bằng bao nhiêu để hai mặt phẳng $(ABPQ)$ và $(CDMN)$ vuông góc với nhau?",
        options: ["A. $\\frac{SA}{AB} = \\frac{\\sqrt{11}}{2}$.", "B. $\\frac{SA}{AB} = \\frac{\\sqrt{15}}{4}$.", "C. $\\frac{SA}{AB} = \\frac{\\sqrt{23}}{4}$.", "D. $\\frac{SA}{AB} = \\frac{\\sqrt{29}}{4}$."],
        correctAnswer: "A",
        explanation: "Đặt $AB = 2$ và đường cao $SO = h$. Gắn hệ trục tâm $O$: $A(-1;-1;0), B(1;-1;0), C(1;1;0), D(-1;1;0), S(0;0;h)$. Hai mặt phẳng đối xứng qua mặt phẳng trung trực của $BC$ nên vuông góc khi góc giữa $(ABPQ)$ và đáy bằng $45^\\circ$. Khoảng cách từ trung điểm $PQ$ tới $(ABCD)$ là $\\frac{h}{2}$ và khoảng cách hình chiếu của nó tới $AB$ là $\\frac{3}{2} \\Rightarrow \\frac{h}{2} = \\frac{3}{2} \\Rightarrow h = 3$. Khi đó $SA = \\sqrt{h^2 + OA^2} = \\sqrt{9 + 2} = \\sqrt{11} \\Rightarrow \\frac{SA}{AB} = \\frac{\\sqrt{11}}{2}$."
    },
    {
        id: 325056, type: "multiple_choice",
        content: "Cho hình chóp $S.ABC$ có $SA = \\frac{2\\sqrt{3}a}{3}$ và $SA$ vuông góc với mặt phẳng $(ABC)$. Đáy $ABC$ có $BC = a$ và $\\widehat{BAC} = 150^\\circ$. Gọi $M, N$ lần lượt là hình chiếu vuông góc của $A$ lên $SB, SC$. Góc giữa hai mặt phẳng $(AMN)$ và $(ABC)$ là",
        options: ["A. $60^\\circ$.", "B. $45^\\circ$.", "C. $30^\\circ$.", "D. $90^\\circ$."],
        correctAnswer: "A",
        explanation: "Bán kính đường tròn ngoại tiếp $\\Delta ABC$ là $R = \\frac{BC}{2\\sin 150^\\circ} = a$. Gọi $AD$ là đường kính đường tròn ngoại tiếp $(ABC)$ ($AD = 2a$), suy ra $DB \\perp (SAB) \\Rightarrow DB \\perp AM$ và $DC \\perp AN$, do đó $SD \\perp (AMN)$. Khi đó $((AMN), (ABC)) = (SD, SA) = \\widehat{ASD}$. Ta có $\\tan\\widehat{ASD} = \\frac{AD}{SA} = \\frac{2a}{2\\sqrt{3}a/3} = \\sqrt{3} \\Rightarrow \\widehat{ASD} = 60^\\circ$."
    },
    {
        id: 325057, type: "multiple_choice",
        content: "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác đều. Gọi $\\alpha$ là góc tạo bởi $A'B$ với mặt phẳng $(ACC'A')$ và $\\beta$ là góc giữa mặt phẳng $(A'BC')$ với mặt phẳng $(ACC'A')$. Biết $\\cot^2\\alpha - \\cot^2\\beta = \\frac{m}{n}$ (với $m, n \\in \\mathbb{N}^*$ và phân số $\\frac{m}{n}$ tối giản). Khi đó giá trị của biểu thức $T = m + 2n$ bằng",
        options: ["A. $T = 3$.", "B. $T = 5$.", "C. $T = 7$.", "D. $T = 9$."],
        correctAnswer: "C",
        explanation: "Đặt cạnh đáy bằng $1$, chiều cao $h$. Gọi $M$ là trung điểm $AC$, suy ra $BM \\perp (ACC'A')$ với $BM = \\frac{\\sqrt{3}}{2}$. Ta có $A'M^2 = h^2 + \\frac{1}{4} \\Rightarrow \\cot^2\\alpha = \\frac{A'M^2}{BM^2} = \\frac{4h^2 + 1}{3}$. Mặt khác $d(M, A'C') = h \\Rightarrow \\cot^2\\beta = \\frac{h^2}{BM^2} = \\frac{4h^2}{3}$. Suy ra $\\cot^2\\alpha - \\cot^2\\beta = \\frac{1}{3} \\Rightarrow m = 1, n = 3 \\Rightarrow T = 1 + 2\\cdot 3 = 7$."
    },
    {
        id: 325058, type: "multiple_choice",
        content: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Gọi $\\alpha$ là góc phẳng của góc nhị diện $[D, AC, D']$. Giá trị của $\\sin\\alpha$ bằng",
        options: ["A. $\\frac{1}{\\sqrt{2}}$.", "B. $\\frac{1}{\\sqrt{3}}$.", "C. $\\frac{\\sqrt{6}}{3}$.", "D. $\\sqrt{2}$."],
        correctAnswer: "C",
        explanation: "Gọi $O$ là tâm đáy $ABCD$. Ta có $DO \\perp AC$ và $D'O \\perp AC \\Rightarrow \\alpha = \\widehat{DOD'}$. Trong tam giác vuông $D'DO$ có $DD' = a$, $DO = \\frac{a\\sqrt{2}}{2} \\Rightarrow D'O = \\frac{a\\sqrt{6}}{2} \\Rightarrow \\sin\\alpha = \\frac{DD'}{D'O} = \\frac{\\sqrt{6}}{3}$."
    },
    {
        id: 325059, type: "multiple_choice",
        content: "Cho hình lăng trụ xiên $ABC.A'B'C'$ có đáy là tam giác đều $ABC$. Hình chiếu của $A'$ lên mặt phẳng $(ABC)$ là trọng tâm $G$, hình lăng trụ có cạnh đáy bằng $6a$ và cạnh bên bằng $a\\sqrt{21}$. Số đo của góc phẳng nhị diện $[A', BC, A]$ bằng",
        options: ["A. $60^\\circ$.", "B. $30^\\circ$.", "C. $90^\\circ$.", "D. $45^\\circ$."],
        correctAnswer: "A",
        explanation: "Gọi $M$ là trung điểm $BC$. Ta có $AM = 3a\\sqrt{3}$, $AG = 2a\\sqrt{3}$, $GM = a\\sqrt{3}$. Suy ra $A'G = \\sqrt{AA'^2 - AG^2} = \\sqrt{21a^2 - 12a^2} = 3a$. Vì $BC \\perp (A'GM)$ nên $[A', BC, A] = \\widehat{A'MG}$ với $\\tan\\widehat{A'MG} = \\frac{A'G}{GM} = \\frac{3a}{a\\sqrt{3}} = \\sqrt{3} \\Rightarrow \\widehat{A'MG} = 60^\\circ$."
    },
    {
        id: 325060, type: "multiple_choice",
        content: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $\\sqrt{3}$. Mặt phẳng $(\\alpha)$ song song với $AB$ và cắt tất cả các cạnh bên của hình lập phương. Diện tích thiết diện tạo bởi mặt phẳng $(\\alpha)$ và hình lập phương bằng bao nhiêu biết $(\\alpha)$ tạo với mặt phẳng $(ABB'A')$ một góc $60^\\circ$?",
        options: ["A. $2\\sqrt{3}$.", "B. $\\frac{3}{2}$.", "C. $6$.", "D. $\\frac{3\\sqrt{3}}{2}$."],
        correctAnswer: "A",
        explanation: "Vì $(\\alpha) \\parallel AB$ và $(ABB'A') \\perp (ABCD)$ nên góc giữa $(\\alpha)$ và $(ABCD)$ bằng $90^\\circ - 60^\\circ = 30^\\circ$. Hình chiếu của thiết diện lên $(ABCD)$ là hình vuông $ABCD$ có diện tích $S_{\\text{đáy}} = (\\sqrt{3})^2 = 3$. Do đó diện tích thiết diện là $S = \\frac{S_{\\text{đáy}}}{\\cos 30^\\circ} = \\frac{3}{\\sqrt{3}/2} = 2\\sqrt{3}$."
    },
    {
        id: 325061, type: "drag_drop",
        content: "Cho hình chóp $S.ABCD$ có $SA \\perp (ABCD)$, đáy là hình chữ nhật $ABCD$ với $AB = a$, $AD = a\\sqrt{3}$. Biết rằng mặt phẳng $(SCD)$ tạo với đáy một góc $60^\\circ$.<br>- Cosin góc tạo bởi mặt phẳng $(SBC)$ và mặt đáy $(ABCD)$ bằng [1].<br>- Tan góc phẳng của góc nhị diện $[S, BD, C]$ bằng [2].",
        choices: ["$\\frac{\\sqrt{3}}{2}$", "$-2\\sqrt{3}$", "$2\\sqrt{3}$", "$\\frac{1}{\\sqrt{10}}$"],
        correctAnswer: ["$\\frac{1}{\\sqrt{10}}$", "$-2\\sqrt{3}$"],
        explanation: "Vì $((SCD), (ABCD)) = \\widehat{SDA} = 60^\\circ$ nên $SA = AD\\tan 60^\\circ = 3a$.\n1) $((SBC), (ABCD)) = \\widehat{SBA}$ với $SB = \\sqrt{SA^2 + AB^2} = a\\sqrt{10} \\Rightarrow \\cos\\widehat{SBA} = \\frac{AB}{SB} = \\frac{1}{\\sqrt{10}}$.\n2) Kẻ $AH \\perp BD \\Rightarrow AH = \\frac{AB\\cdot AD}{BD} = \\frac{a\\sqrt{3}}{2}$. Vì $A$ và $C$ nằm về hai phía của $BD$ nên $[S, BD, C]$ bù với $\\widehat{SHA}$. Ta có $\\tan\\widehat{SHA} = \\frac{SA}{AH} = 2\\sqrt{3} \\Rightarrow \\tan[S, BD, C] = -2\\sqrt{3}$."
    },
    {
        id: 325062, type: "drag_drop",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật tâm $O$, $AB = 2a$, $AD = a$, $SA = 3a$ và $SA$ vuông góc với đáy.<br>- Tan góc tạo bởi hai mặt phẳng $(SBC)$ và $(ABCD)$ bằng [1].<br>- Tan góc phẳng của góc nhị diện $[S, BD, C]$ bằng [2].<br>- Sin góc tạo bởi hai mặt phẳng $(SBC)$ và $(SAC)$ bằng [3].",
        choices: ["$-\\frac{3\\sqrt{5}}{2}$", "$\\frac{3}{2}$", "$\\frac{3\\sqrt{5}}{2}$", "$\\frac{3}{4}$", "$\\frac{2\\sqrt{910}}{65}$", "$-\\frac{2}{3}$"],
        correctAnswer: ["$\\frac{3}{2}$", "$-\\frac{3\\sqrt{5}}{2}$", "$\\frac{2\\sqrt{910}}{65}$"],
        explanation: "1) $((SBC), (ABCD)) = \\widehat{SBA} \\Rightarrow \\tan = \\frac{SA}{AB} = \\frac{3}{2}$.\n2) Kẻ $AH \\perp BD \\Rightarrow AH = \\frac{2a}{\\sqrt{5}}$. Vì $[S, BD, C]$ là góc tù bù với $\\widehat{SHA}$ nên $\\tan[S, BD, C] = -\\frac{SA}{AH} = -\\frac{3\\sqrt{5}}{2}$.\n3) Gắn hệ trục $A(0;0;0), B(2;0;0), C(2;1;0), S(0;0;3)$: $\\vec{n}_{(SBC)} = (3;0;2)$, $\\vec{n}_{(SAC)} = (1;-2;0) \\Rightarrow \\cos = \\frac{3}{\\sqrt{65}} \\Rightarrow \\sin = \\frac{\\sqrt{56}}{\\sqrt{65}} = \\frac{2\\sqrt{910}}{65}$."
    },
    {
        id: 325063, type: "drag_drop",
        content: "Cho hình chóp $S.ABCD$ đáy là hình vuông cạnh $a$, $SAB$ là tam giác đều và $(SAB) \\perp (ABCD)$.<br>- Tan góc tạo bởi hai mặt phẳng $(SCD)$ và $(ABCD)$ bằng [1].<br>- Cosin góc phẳng của góc nhị diện $[A, SD, C]$ bằng [2].",
        choices: ["$-\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{3}$", "$\\frac{1}{\\sqrt{7}}$", "$\\frac{\\sqrt{7}}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{1}{\\sqrt{7}}$"],
        correctAnswer: ["$\\frac{\\sqrt{3}}{2}$", "$-\\frac{1}{\\sqrt{7}}$"],
        explanation: "1) Gọi $H, K$ là trung điểm $AB, CD$. Ta có $SH = \\frac{a\\sqrt{3}}{2}, HK = a \\Rightarrow \\tan((SCD), (ABCD)) = \\frac{SH}{HK} = \\frac{\\sqrt{3}}{2}$.\n2) Gắn hệ trục $A(0;0;0), B(1;0;0), C(1;1;0), D(0;1;0), S\\left(\\frac{1}{2};0;\\frac{\\sqrt{3}}{2}\\right)$. Tính được góc nhị diện $[A, SD, C]$ tù với $\\cos[A, SD, C] = -\\frac{1}{\\sqrt{7}}$."
    },
    {
        id: 325064, type: "drag_drop",
        content: "Cho lăng trụ tam giác đều $ABC.A'B'C'$ có các cạnh bằng $2a$. Gọi $M$ là trung điểm của $CC'$.<br>- Cosin góc tạo bởi hai đường thẳng $BM$ và $A'B'$ bằng [1].<br>- Cosin góc giữa hai mặt phẳng $(MAB)$ và $(ABC)$ bằng [2].",
        choices: ["$\\frac{1}{\\sqrt{3}}$", "$\\frac{2}{\\sqrt{5}}$", "$\\frac{1}{\\sqrt{5}}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{15}}{5}$"],
        correctAnswer: ["$\\frac{1}{\\sqrt{5}}$", "$\\frac{\\sqrt{3}}{2}$"],
        explanation: "1) $A'B' \\parallel AB \\Rightarrow (BM, A'B') = \\widehat{MBA}$. Có $MB = MA = \\sqrt{(2a)^2 + a^2} = a\\sqrt{5}$, $AB = 2a \\Rightarrow \\cos\\widehat{MBA} = \\frac{AB/2}{MB} = \\frac{1}{\\sqrt{5}}$.\n2) Gọi $I$ là trung điểm $AB$, suy ra $CI = a\\sqrt{3}, MC = a \\Rightarrow MI = 2a \\Rightarrow \\cos((MAB), (ABC)) = \\frac{CI}{MI} = \\frac{\\sqrt{3}}{2}$."
    },
    {
        id: 325065, type: "drag_drop",
        content: "Cho lăng trụ $ABCD.A'B'C'D'$ có đáy $ABCD$ là hình vuông tâm $O$, cạnh $a$, $A'A = a$ và $A'O \\perp (ABCD)$.<br>- Tan góc tạo bởi cạnh bên và mặt đáy bằng [1].<br>- Sin góc giữa cạnh bên và mặt đáy bằng [2].<br>- Cosin góc phẳng của góc nhị diện $[B', BD, A]$ bằng [3].",
        choices: ["$-\\frac{\\sqrt{3}}{3}$", "$\\sqrt{3}$", "$1$", "$-\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{2}}{2}$"],
        correctAnswer: ["$1$", "$\\frac{\\sqrt{2}}{2}$", "$-\\frac{\\sqrt{2}}{2}$"],
        explanation: "Ta có $AO = \\frac{a\\sqrt{2}}{2} \\Rightarrow A'O = \\sqrt{a^2 - \\frac{a^2}{2}} = \\frac{a\\sqrt{2}}{2} = AO$.\n1) $\\tan(A'A, (ABCD)) = \\frac{A'O}{AO} = 1$.\n2) $\\sin(A'A, (ABCD)) = \\frac{A'O}{A'A} = \\frac{\\sqrt{2}}{2}$.\n3) Hình chiếu của $B'$ lên $(ABCD)$ là điểm đối xứng với $A$ qua $O$ là $C$ (nằm khác phía với $A$ qua $BD$), nên góc nhị diện $[B', BD, A]$ bù với góc $45^\\circ$, suy ra $\\cos[B', BD, A] = -\\frac{\\sqrt{2}}{2}$."
    },
    {
        id: 325066, type: "true_false",
        content: "Cho mặt phẳng $(P)$ và điểm $M$ nằm ngoài $(P)$. Kẻ $MA$ vuông góc với mặt phẳng $(P)$ và $MB, MC$ là hai đường xiên đối với mặt phẳng $(P)$. Cho biết $MA = a$, $MB, MC$ cùng tạo với mặt phẳng $(P)$ các góc $30^\\circ$ và $MB \\perp MC$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "$BC = a\\sqrt{2}$.",
            "Số đo góc phẳng nhị diện $[M, BC, A]$ bằng $45^\\circ$."
        ],
        correctAnswer: { "0": "false", "1": "true" },
        explanation: "a) Vì $(MB, (P)) = (MC, (P)) = 30^\\circ$ nên $MB = MC = \\frac{MA}{\\sin 30^\\circ} = 2a$. Do $MB \\perp MC$ nên $BC = 2a\\sqrt{2} \\ne a\\sqrt{2}$ (Sai).\nb) Gọi $H$ là trung điểm $BC$, ta có $MH = \\frac{BC}{2} = a\\sqrt{2} \\Rightarrow AH = \\sqrt{MH^2 - MA^2} = a$. Suy ra $\\tan[M, BC, A] = \\frac{MA}{AH} = 1 \\Rightarrow [M, BC, A] = 45^\\circ$ (Đúng)."
    },
    {
        id: 325067, type: "true_false",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình thang vuông tại $A$ và $D$ có $AB = 2a$, $AD = DC = a$, có $SA \\perp (ABCD)$ và $SA = a$. Gọi $\\varphi$ là góc giữa hai mặt phẳng $(SBC)$ và $(ABCD)$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "$(SAC) \\perp (SCB)$.",
            "$\\tan\\varphi = \\frac{\\sqrt{3}}{2}$."
        ],
        correctAnswer: { "0": "true", "1": "false" },
        explanation: "a) Ta có $AC = BC = a\\sqrt{2}$ và $AB = 2a \\Rightarrow BC \\perp AC$. Lại có $BC \\perp SA \\Rightarrow BC \\perp (SAC) \\Rightarrow (SAC) \\perp (SCB)$ (Đúng).\nb) Vì $BC \\perp (SAC)$ nên $\\varphi = \\widehat{SCA} \\Rightarrow \\tan\\varphi = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\ne \\frac{\\sqrt{3}}{2}$ (Sai)."
    },
    {
        id: 325068, type: "true_false",
        content: "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, tâm của đáy là $O$ với $SO = \\frac{a\\sqrt{3}}{2}$. Gọi $M, N$ lần lượt là trung điểm cạnh $AD$ và $BC$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "$(SMN) \\perp (ABCD)$.",
            "$(SAD) \\perp (SMN)$.",
            "$((SBC), (ABCD)) = 30^\\circ$.",
            "Tan góc tạo bởi hai mặt phẳng $(SBC)$ và $(SCD)$ bằng $\\sqrt{15}$."
        ],
        correctAnswer: { "0": "true", "1": "true", "2": "false", "3": "true" },
        explanation: "a) $SO \\subset (SMN)$ và $SO \\perp (ABCD) \\Rightarrow (SMN) \\perp (ABCD)$ (Đúng).\nb) $AD \\perp MN$ và $AD \\perp SO \\Rightarrow AD \\perp (SMN) \\Rightarrow (SAD) \\perp (SMN)$ (Đúng).\nc) $\\tan((SBC), (ABCD)) = \\frac{SO}{ON} = \\frac{a\\sqrt{3}/2}{a/2} = \\sqrt{3} \\Rightarrow$ góc bằng $60^\\circ$ (Sai).\nd) Gắn hệ trục tính trực tiếp được $\\cos((SBC), (SCD)) = \\frac{1}{4} \\Rightarrow \\tan = \\sqrt{15}$ (Đúng)."
    },
    {
        id: 325069, type: "true_false",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình vuông $ABCD$ cạnh $a$, $SA \\perp (ABCD)$, $SA = a$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "Góc giữa hai mặt phẳng $(SBC)$ và $(SAD)$ bằng $45^\\circ$.",
            "Cosin góc giữa hai mặt phẳng $(SAB)$ và $(SBD)$ bằng $\\frac{\\sqrt{2}}{3}$.",
            "Góc giữa hai mặt phẳng $(SBC)$ và $(SAC)$ bằng $30^\\circ$."
        ],
        correctAnswer: { "0": "true", "1": "false", "2": "false" },
        explanation: "a) Giao tuyến qua $S$ song song $AD, BC$ nên $((SBC), (SAD)) = \\widehat{ASB} = 45^\\circ$ (Đúng).\nb) $\\vec{n}_{(SAB)} = (0;1;0)$, $\\vec{n}_{(SBD)} = (1;1;1) \\Rightarrow \\cos = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$ (Sai).\nc) $\\vec{n}_{(SBC)} = (1;0;1)$, $\\vec{n}_{(SAC)} = (1;-1;0) \\Rightarrow \\cos = \\frac{1}{2} \\Rightarrow$ góc bằng $60^\\circ$ (Sai)."
    },
    {
        id: 325070, type: "true_false",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình thoi cạnh $a$, $\\widehat{A} = 60^\\circ$, $SA = SB = SD = \\frac{a\\sqrt{3}}{2}$. Mỗi phát biểu sau đây là đúng hay sai?",
        propositions: [
            "$(SAC) \\perp (ABCD)$.",
            "$SB \\perp BC$.",
            "Tan góc phẳng của góc nhị diện $[S, BD, A]$ bằng $\\frac{2}{\\sqrt{5}}$."
        ],
        correctAnswer: { "0": "true", "1": "true", "2": "false" },
        explanation: "Vì $SA = SB = SD$ nên hình chiếu $H$ của $S$ trùng trọng tâm $\\Delta ABD$ đều (nằm trên $AC$), $SH = \\frac{a\\sqrt{15}}{6}$.\na) $SH \\subset (SAC)$ và $SH \\perp (ABCD) \\Rightarrow (SAC) \\perp (ABCD)$ (Đúng).\nb) $SC = \\sqrt{SH^2 + HC^2} = \\frac{a\\sqrt{7}}{2}$, kiểm tra $SB^2 + BC^2 = \\frac{3a^2}{4} + a^2 = \\frac{7a^2}{4} = SC^2 \\Rightarrow SB \\perp BC$ (Đúng).\nc) Gọi $O$ là tâm đáy, $HO = \\frac{a\\sqrt{3}}{6} \\Rightarrow \\tan[S, BD, A] = \\frac{SH}{HO} = \\sqrt{5}$ (Sai)."
    },
    {
        id: 325071, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang vuông tại $A$ và $B$, cạnh bên $SA$ vuông góc với mặt đáy và $SA = a\\sqrt{2}$, $AD = 2AB = 2BC = 2a$. Cosin của góc giữa hai mặt phẳng $(SAD)$ và $(SCD)$ bằng ________. <i>(Điền phân số tối giản a/b)</i>",
        correctAnswer: "1/2",
        explanation: "Gắn hệ trục $A(0;0;0), B(1;0;0), C(1;1;0), D(0;2;0), S(0;0;\\sqrt{2})$. Ta có $\\vec{n}_{(SAD)} = (1;0;0)$ và $\\vec{n}_{(SCD)} = (\\sqrt{2};\\sqrt{2};2) \\Rightarrow \\cos((SAD), (SCD)) = \\frac{\\sqrt{2}}{\\sqrt{8}} = \\frac{1}{2}$."
    },
    {
        id: 325072, type: "fill_blank",
        content: "Cho hình lăng trụ $ABC.A'B'C'$ có $ABC$ là tam giác vuông tại $A$, $AB = a\\sqrt{3}$, $AC = 2a$ và $BB' = a\\sqrt{2}$. Hình chiếu của $B'$ trên mặt phẳng $(ABC)$ là trọng tâm $G$ của tam giác $ABC$. Biết $\\tan$ góc giữa hai mặt phẳng $(ACC'A')$ và $(ABC)$ bằng $\\frac{m}{\\sqrt{n}}$ tối giản ($m, n \\in \\mathbb{N}^*$). Khi đó, $mn$ bằng ________.",
        correctAnswer: "6",
        explanation: "Gắn hệ trục $A(0;0;0), B(\\sqrt{3};0;0), C(0;2;0) \\Rightarrow G\\left(\\frac{\\sqrt{3}}{3};\\frac{2}{3};0\\right)$. Ta có $BG^2 = \\frac{16}{9} \\Rightarrow B'G = \\sqrt{2 - \\frac{16}{9}} = \\frac{\\sqrt{2}}{3}$. Vì $\\overrightarrow{AA'} = \\overrightarrow{BB'}$ nên khoảng cách từ hình chiếu của $A'$ tới $AC$ bằng $\\frac{2\\sqrt{3}}{3}$, suy ra $\\tan = \\frac{\\sqrt{2}/3}{2\\sqrt{3}/3} = \\frac{1}{\\sqrt{6}} \\Rightarrow m = 1, n = 6 \\Rightarrow mn = 6$."
    },
    {
        id: 325073, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi, có $AB = 2a$ và góc $\\widehat{BAD} = 120^\\circ$. Hình chiếu vuông góc của $S$ xuống mặt phẳng đáy $(ABCD)$ trùng với giao điểm $I$ của hai đường chéo và $SI = \\frac{a}{2}$. Góc tạo bởi mặt phẳng $(SAB)$ và mặt phẳng $(ABCD)$ bằng ________ độ.",
        correctAnswer: "30",
        explanation: "Kẻ $IH \\perp AB$. Trong hình thoi cạnh $2a$ có góc $120^\\circ$, chiều cao hình thoi là $2a\\sin 60^\\circ = a\\sqrt{3} \\Rightarrow IH = \\frac{a\\sqrt{3}}{2}$. Do đó $\\tan((SAB), (ABCD)) = \\frac{SI}{IH} = \\frac{a/2}{a\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} \\Rightarrow$ góc bằng $30^\\circ$."
    },
    {
        id: 325074, type: "fill_blank",
        content: "Cho hình chóp $S.ABC$ có $SA$ vuông góc với mặt phẳng $(ABC)$, đáy $ABC$ là tam giác vuông tại $B$ có $AB = a$, $BC = a\\sqrt{3}$ và $SB = \\frac{a\\sqrt{6}}{2}$. Số đo góc phẳng của góc nhị diện $[A, SC, B]$ bằng ________ độ.",
        correctAnswer: "60",
        explanation: "Ta có $SA = \\sqrt{SB^2 - AB^2} = \\frac{a\\sqrt{2}}{2}$. Gắn hệ trục $A(0;0;0), B(1;0;0), C(1;\\sqrt{3};0), S\\left(0;0;\\frac{\\sqrt{2}}{2}\\right)$. Tính được $\\cos[A, SC, B] = \\frac{1}{2} \\Rightarrow [A, SC, B] = 60^\\circ$."
    },
    {
        id: 325075, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy là hình vuông tâm $O$, cạnh bằng $1$. Biết $SA \\perp (ABCD)$, độ dài đoạn thẳng $SA$ bằng ________ để góc giữa hai mặt phẳng $(SBC)$ và $(SCD)$ bằng $60^\\circ$.",
        correctAnswer: "1",
        explanation: "Đặt $SA = h > 0$. Gắn hệ trục $A(0;0;0), B(1;0;0), C(1;1;0), D(0;1;0), S(0;0;h)$. Ta có $\\vec{n}_{(SBC)} = (h;0;1)$, $\\vec{n}_{(SCD)} = (0;h;1) \\Rightarrow \\cos 60^\\circ = \\frac{1}{h^2 + 1} = \\frac{1}{2} \\Rightarrow h = 1$."
    },
    {
        id: 325076, type: "fill_blank",
        content: "Cho tứ diện $S.ABC$ có các cạnh $SA, SB, SC$ đôi một vuông góc và $SA = SB = SC = 1$. Gọi $\\alpha$ là góc phẳng nhị diện $[S, BC, A]$. Biết $\\cos\\alpha = \\frac{a}{\\sqrt{b}}$ tối giản ($a, b \\in \\mathbb{Z}$). Khi đó, $a$ bằng [1] và $b$ bằng [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu \"; \")</i>",
        correctAnswer: "1; 3",
        explanation: "Gọi $M$ là trung điểm $BC$, ta có $SM \\perp BC$ và $AM \\perp BC \\Rightarrow \\alpha = \\widehat{SMA}$. Với $SM = \\frac{\\sqrt{2}}{2}$ và $SA = 1$, ta có $AM = \\sqrt{SA^2 + SM^2} = \\frac{\\sqrt{6}}{2} \\Rightarrow \\cos\\alpha = \\frac{SM}{AM} = \\frac{1}{\\sqrt{3}}$. Vậy $a = 1, b = 3$."
    },
    {
        id: 325077, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang vuông tại $A$ và $B$, biết $AD = 2a$, $AB = BC = a$, cạnh bên $SA$ vuông góc với mặt đáy và $SA = \\frac{a\\sqrt{6}}{2}$. Gọi $E$ là trung điểm của $AD$. Số đo của góc phẳng nhị diện $[S, BE, A]$ bằng ________ độ.",
        correctAnswer: "60",
        explanation: "Vì $AE = AB = a$ và $\\widehat{BAE} = 90^\\circ$ nên khoảng cách từ $A$ đến $BE$ là $AH = \\frac{a\\sqrt{2}}{2}$. Khi đó $\\tan[S, BE, A] = \\frac{SA}{AH} = \\frac{a\\sqrt{6}/2}{a\\sqrt{2}/2} = \\sqrt{3} \\Rightarrow [S, BE, A] = 60^\\circ$."
    },
    {
        id: 325078, type: "fill_blank",
        content: "Cho hình lăng trụ đứng $ABC.A'B'C'$ có tất cả các cạnh bằng nhau. Gọi $\\varphi$ là số đo của góc phẳng nhị diện $[A', B'C', A]$. Biết $\\tan\\varphi = \\frac{m}{\\sqrt{n}}$ tối giản ($m, n \\in \\mathbb{N}^*$). Khi đó, $n - m$ bằng ________.",
        correctAnswer: "1",
        explanation: "Đặt cạnh lăng trụ bằng $a$, gọi $M$ là trung điểm $B'C'$. Ta có $A'M \\perp B'C'$ và $AM \\perp B'C' \\Rightarrow \\varphi = \\widehat{A'MA}$. Với $AA' = a$ và $A'M = \\frac{a\\sqrt{3}}{2}$, ta có $\\tan\\varphi = \\frac{AA'}{A'M} = \\frac{2}{\\sqrt{3}} \\Rightarrow m = 2, n = 3 \\Rightarrow n - m = 1$."
    },
    {
        id: 325079, type: "fill_blank",
        content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Mặt bên $(SAB)$ là tam giác đều và nằm trong mặt phẳng vuông góc với mặt phẳng đáy. Gọi $\\varphi$ là góc giữa hai mặt phẳng $(SAB)$ và $(SCD)$. Khi đó, $\\tan\\varphi$ bằng ________. <i>(Kết quả làm tròn đến hàng phần mười)</i>",
        correctAnswer: "1,2",
        explanation: "Tương tự Câu 3: $\\tan\\varphi = \\frac{a}{a\\sqrt{3}/2} = \\frac{2\\sqrt{3}}{3} \\approx 1,155 \\approx 1,2$."
    },
    {
        id: 325080, type: "fill_blank",
        content: "Cho hình chóp $S.ABC$ có tam giác $ABC$ vuông tại $B$ và $\\widehat{ACB} = 30^\\circ$. Tam giác $SAC$ là tam giác đều và thuộc mặt phẳng vuông góc với $(ABC)$. Xét điểm $M$ thuộc cạnh $SC$ sao cho mặt phẳng $(MAB)$ tạo với hai mặt phẳng $(SAB)$ và $(ABC)$ góc bằng nhau. Tỉ số $\\frac{MS}{MC}$ bằng ________. <i>(Làm tròn đến hàng phần trăm)</i>",
        correctAnswer: "1,12",
        explanation: "Vì $(MAB)$ là mặt phẳng phân giác của góc nhị diện tạo bởi $(SAB)$ và $(ABC)$ nên $d(M, (SAB)) = d(M, (ABC))$. Do đó $\\frac{MS}{MC} = \\frac{d(S, (ABC))}{d(C, (SAB))} = \\frac{S_{\\Delta SAB}}{S_{\\Delta ABC}}$. Đặt $AC = 2 \\Rightarrow AB = 1, BC = \\sqrt{3}, S_{\\Delta ABC} = \\frac{\\sqrt{3}}{2}$. Lại có $SA = SB = 2, AB = 1 \\Rightarrow S_{\\Delta SAB} = \\frac{\\sqrt{15}}{4}$. Suy ra $\\frac{MS}{MC} = \\frac{\\sqrt{5}}{2} \\approx 1,12$."
    }
],
    // 1. Thêm vào mảng examsMeta


// 2. Thêm vào object allExamsData
"hsa_van_02": [

  {
    id: 271810,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Một người tù cổ đeo gông, chân vướng xiềng, đang dậm tô nét chữ trên tấm lụa trắng tinh căng phẳng trên mảnh ván. Người tù viết xong một chữ, viên quản ngục lại vội khúm núm cất những đồng tiền kẽm đánh dấu ô chữ đặt trên phiến lụa óng. Và cái thầy thơ lại gầy gò, thì run run bưng chậu mực. Thay bút con, đề xong lạc khoản, ông Huấn Cao thở dài, buồn bã đỡ viên quản ngục đứng thẳng người dậy và đĩnh đạc bảo:\n- Ở đây lẫn lộn. Ta khuyên thầy Quản nên thay chốn ở đi. Chỗ này không phải là nơi để treo một bức lụa trắng trẻo với những nét chữ vuông vắn tươi tắn nó nói lên những cái hoài bão tung hoành của một đời con người. Thoi mực, thầy mua ở đâu tốt và thơm quá. Thầy có thấy mùi thơm ở chậu mực bốc lên không?... Tôi bảo thực đấy: thầy Quản nên tìm về nhà quê mà ở đã, thầy hãy thoát khỏi cái nghề này đi đã, rồi hãy nghĩ đến chuyện chơi chữ. Ở đây, khó giữ thiên lương cho lành vững và rồi cũng đến nhem nhuốc mất cái đời lương thiện đi.”\n(Nguyễn Tuân, Chữ người tử tù)\n\nCâu 1: Xét trong văn bản, từ nào sau đây được sử dụng với nghĩa chuyển?`,
    image: null,
    options: [
      "A. Khúm núm.",
      "B. Đĩnh đạc.",
      "C. Buồn bã.",
      "D. Nhem nhuốc."
    ],
    correctAnswer: "D",
    explanation: "Nghĩa chuyển là nghĩa được hình thành dựa trên cơ sở của nghĩa gốc. Từ “nhem nhuốc” có nghĩa gốc là (người, quần áo) bị dây bẩn nhiều chỗ; trong đoạn trích được dùng với nghĩa chuyển chỉ con người (quản ngục) sẽ đánh mất sự lương thiện, trở nên thấp hèn, xấu xa do ở lâu trong nơi tù ngục."
  },
  {
    id: 271811,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Một người tù cổ đeo gông, chân vướng xiềng, đang dậm tô nét chữ trên tấm lụa trắng tinh căng phẳng trên mảnh ván. Người tù viết xong một chữ, viên quản ngục lại vội khúm núm cất những đồng tiền kẽm đánh dấu ô chữ đặt trên phiến lụa óng. Và cái thầy thơ lại gầy gò, thì run run bưng chậu mực. Thay bút con, đề xong lạc khoản, ông Huấn Cao thở dài, buồn bã đỡ viên quản ngục đứng thẳng người dậy và đĩnh đạc bảo:\n- Ở đây lẫn lộn. Ta khuyên thầy Quản nên thay chốn ở đi. Chỗ này không phải là nơi để treo một bức lụa trắng trẻo với những nét chữ vuông vắn tươi tắn nó nói lên những cái hoài bão tung hoành của một đời con người. Thoi mực, thầy mua ở đâu tốt và thơm quá. Thầy có thấy mùi thơm ở chậu mực bốc lên không?... Tôi bảo thực đấy: thầy Quản nên tìm về nhà quê mà ở đã, thầy hãy thoát khỏi cái nghề này đi đã, rồi hãy nghĩ đến chuyện chơi chữ. Ở đây, khó giữ thiên lương cho lành vững và rồi cũng đến nhem nhuốc mất cái đời lương thiện đi.”\n(Nguyễn Tuân, Chữ người tử tù)\n\nCâu 2: Dòng nào sau đây giải thích đúng nghĩa của từ “thiên lương” trong đoạn trích trên?`,
    image: null,
    options: [
      "A. Sự tốt bụng của con người được hình thành trong quá trình sống.",
      "B. Lòng yêu và ham thích cái đẹp, cái cao quý của con người.",
      "C. Bản tính tốt đẹp của con người do trời phú mà có được.",
      "D. Đức tính hi sinh và sự nhẫn nhịn của con người trong cuộc sống."
    ],
    correctAnswer: "C",
    explanation: "“Thiên lương” là phần bản tính tốt đẹp sẵn có trong một con người mà trời ban cho (thiên là trời). Lời thoại của Huấn Cao khuyên quản ngục chuyển công việc để giữ được sự tốt đẹp vốn có trong nhân cách."
  },
  {
    id: 271813,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Một người tù cổ đeo gông, chân vướng xiềng, đang dậm tô nét chữ trên tấm lụa trắng tinh căng phẳng trên mảnh ván. Người tù viết xong một chữ, viên quản ngục lại vội khúm núm cất những đồng tiền kẽm đánh dấu ô chữ đặt trên phiến lụa óng. Và cái thầy thơ lại gầy gò, thì run run bưng chậu mực. Thay bút con, đề xong lạc khoản, ông Huấn Cao thở dài, buồn bã đỡ viên quản ngục đứng thẳng người dậy và đĩnh đạc bảo:\n- Ở đây lẫn lộn. Ta khuyên thầy Quản nên thay chốn ở đi. Chỗ này không phải là nơi để treo một bức lụa trắng trẻo với những nét chữ vuông vắn tươi tắn nó nói lên những cái hoài bão tung hoành của một đời con người. Thoi mực, thầy mua ở đâu tốt và thơm quá. Thầy có thấy mùi thơm ở chậu mực bốc lên không?... Tôi bảo thực đấy: thầy Quản nên tìm về nhà quê mà ở đã, thầy hãy thoát khỏi cái nghề này đi đã, rồi hãy nghĩ đến chuyện chơi chữ. Ở đây, khó giữ thiên lương cho lành vững và rồi cũng đến nhem nhuốc mất cái đời lương thiện đi.”\n(Nguyễn Tuân, Chữ người tử tù)\n\nCâu 3: Trong đoạn văn trên, tác giả đã miêu tả nhân vật Huấn Cao gắn liền với`,
    image: null,
    options: [
      "A. khí phách hiên ngang.",
      "B. tinh thần bất khuất.",
      "C. nhân cách cao đẹp.",
      "D. tài năng siêu việt."
    ],
    correctAnswer: "C",
    explanation: "Qua lời khuyên chân thành dành cho viên quản ngục, Huấn Cao hiện lên là con người có cách ứng xử rõ ràng, không chấp nhận sự lẫn lộn giữa cái xấu xa và tốt đẹp, mong muốn người đối diện giữ gìn được sự lương thiện vốn có (nhân cách cao đẹp)."
  },
  {
    id: 271812,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Một người tù cổ đeo gông, chân vướng xiềng, đang dậm tô nét chữ trên tấm lụa trắng tinh căng phẳng trên mảnh ván. Người tù viết xong một chữ, viên quản ngục lại vội khúm núm cất những đồng tiền kẽm đánh dấu ô chữ đặt trên phiến lụa óng. Và cái thầy thơ lại gầy gò, thì run run bưng chậu mực. Thay bút con, đề xong lạc khoản, ông Huấn Cao thở dài, buồn bã đỡ viên quản ngục đứng thẳng người dậy và đĩnh đạc bảo:\n- Ở đây lẫn lộn. Ta khuyên thầy Quản nên thay chốn ở đi. Chỗ này không phải là nơi để treo một bức lụa trắng trẻo với những nét chữ vuông vắn tươi tắn nó nói lên những cái hoài bão tung hoành của một đời con người. Thoi mực, thầy mua ở đâu tốt và thơm quá. Thầy có thấy mùi thơm ở chậu mực bốc lên không?... Tôi bảo thực đấy: thầy Quản nên tìm về nhà quê mà ở đã, thầy hãy thoát khỏi cái nghề này đi đã, rồi hãy nghĩ đến chuyện chơi chữ. Ở đây, khó giữ thiên lương cho lành vững và rồi cũng đến nhem nhuốc mất cái đời lương thiện đi.”\n(Nguyễn Tuân, Chữ người tử tù)\n\nCâu 4: Bối cảnh giao tiếp hẹp xuất hiện trong văn bản là`,
    image: null,
    options: [
      "A. nơi cung cấp nhiều quan lại nhũng nhiễu.",
      "B. nơi pháp trường khi kẻ tử tù vừa bị hành hình.",
      "C. đêm cuối cùng của kẻ tử tù ở trong nhà ngục.",
      "D. ngày đầu tiên của kẻ tử tù khi chuyển nhà ngục mới."
    ],
    correctAnswer: "C",
    explanation: "Bối cảnh giao tiếp hẹp là hoàn cảnh được mô tả trực tiếp trong tác phẩm: cảnh cho chữ diễn ra từ tốn, cẩn trọng trong đêm cuối cùng trước khi Huấn Cao bị giải ra pháp trường chịu án chém."
  },
  {
    id: 271814,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Một người tù cổ đeo gông, chân vướng xiềng, đang dậm tô nét chữ trên tấm lụa trắng tinh căng phẳng trên mảnh ván. Người tù viết xong một chữ, viên quản ngục lại vội khúm núm cất những đồng tiền kẽm đánh dấu ô chữ đặt trên phiến lụa óng. Và cái thầy thơ lại gầy gò, thì run run bưng chậu mực. Thay bút con, đề xong lạc khoản, ông Huấn Cao thở dài, buồn bã đỡ viên quản ngục đứng thẳng người dậy và đĩnh đạc bảo:\n- Ở đây lẫn lộn. Ta khuyên thầy Quản nên thay chốn ở đi. Chỗ này không phải là nơi để treo một bức lụa trắng trẻo với những nét chữ vuông vắn tươi tắn nó nói lên những cái hoài bão tung hoành của một đời con người. Thoi mực, thầy mua ở đâu tốt và thơm quá. Thầy có thấy mùi thơm ở chậu mực bốc lên không?... Tôi bảo thực đấy: thầy Quản nên tìm về nhà quê mà ở đã, thầy hãy thoát khỏi cái nghề này đi đã, rồi hãy nghĩ đến chuyện chơi chữ. Ở đây, khó giữ thiên lương cho lành vững và rồi cũng đến nhem nhuốc mất cái đời lương thiện đi.”\n(Nguyễn Tuân, Chữ người tử tù)\n\nCâu 5: Dòng nào sau đây nói KHÔNG đúng về đặc sắc nghệ thuật trong đoạn văn trên?`,
    image: null,
    options: [
      "A. Thủ pháp nhân hóa.",
      "B. Nghệ thuật tương phản.",
      "C. Bút pháp lãng mạn.",
      "D. Nghệ thuật miêu tả."
    ],
    correctAnswer: "A",
    explanation: "Đoạn trích sử dụng nghệ thuật tương phản (bóng tối chốn ngục tù – tấm lụa trắng tinh), bút pháp lãng mạn (ca ngợi vẻ đẹp nhân cách con người) và nghệ thuật miêu tả không gian, hành động nhân vật; không sử dụng thủ pháp nhân hóa."
  },
  {
    id: 271815,
    type: "multiple_choice",
    content: `Đọc đoạn trích sau và trả lời câu hỏi:\n“Gió theo lối gió, mây đường mây,\nDòng nước buồn thiu, hoa bắp lay...\nThuyền ai đậu bến sông Trăng đó,\nCó chở trăng về kịp tối nay?\n\nMơ khách đường xa, khách đường xa\nÁo em trắng quá nhìn không ra...\nỞ đây sương khói mờ nhân ảnh\nAi biết tình ai có đậm đà?”\n(Hàn Mặc Tử, Đây thôn Vĩ Dạ, Ngữ văn 11, tập hai, NXB Giáo dục Việt Nam, 2017)\n\nCâu 6: Phương thức biểu đạt chính được sử dụng trong văn bản là`,
    image: null,
    options: [
      "A. tự sự.",
      "B. biểu cảm.",
      "C. nghị luận.",
      "D. thuyết minh."
    ],
    correctAnswer: "B",
    explanation: "Các từ ngữ “buồn thiu”, “mơ”, “áo em trắng quá”, “ai biết tình ai” đều bộc lộ trực tiếp cảm xúc, tâm trạng của chủ thể trữ tình nên phương thức biểu đạt chính là biểu cảm."
  },
  {
    id: 271817,
    type: "multiple_choice",
    content: `Đọc đoạn trích sau và trả lời câu hỏi:\n“Gió theo lối gió, mây đường mây,\nDòng nước buồn thiu, hoa bắp lay...\nThuyền ai đậu bến sông Trăng đó,\nCó chở trăng về kịp tối nay?\n\nMơ khách đường xa, khách đường xa\nÁo em trắng quá nhìn không ra...\nỞ đây sương khói mờ nhân ảnh\nAi biết tình ai có đậm đà?”\n(Hàn Mặc Tử, Đây thôn Vĩ Dạ, Ngữ văn 11, tập hai, NXB Giáo dục Việt Nam, 2017)\n\nCâu 7: Đâu là cách hiểu đúng của câu thơ: “Gió theo lối gió, mây đường mây”?`,
    image: null,
    options: [
      "A. Thiên nhiên liên tục vận động theo quy luật của vũ trụ.",
      "B. Thiên nhiên quấn quýt, gắn bó không thể tách rời.",
      "C. Hình ảnh thiên nhiên gắn với sự tan tác, chia lìa.",
      "D. Sự thanh nhã, lãng mạn của đời sống thiên nhiên."
    ],
    correctAnswer: "C",
    explanation: "“Gió” và “mây” vốn luôn đi liền nhau (gió thổi mây bay), nhưng tác giả lại miêu tả gió mây chia đôi ngả, gợi liên tưởng tới sự tan tác, chia lìa của con người."
  },
  {
    id: 271818,
    type: "multiple_choice",
    content: `Đọc đoạn trích sau và trả lời câu hỏi:\n“Gió theo lối gió, mây đường mây,\nDòng nước buồn thiu, hoa bắp lay...\nThuyền ai đậu bến sông Trăng đó,\nCó chở trăng về kịp tối nay?\n\nMơ khách đường xa, khách đường xa\nÁo em trắng quá nhìn không ra...\nỞ đây sương khói mờ nhân ảnh\nAi biết tình ai có đậm đà?”\n(Hàn Mặc Tử, Đây thôn Vĩ Dạ, Ngữ văn 11, tập hai, NXB Giáo dục Việt Nam, 2017)\n\nCâu 8: Từ “sông Trăng” trong đoạn trích được hiểu là`,
    image: null,
    options: [
      "A. dòng sông được người dân đặt tên là “Trăng” vì vẻ đẹp thuần khiết.",
      "B. con sông ở tỉnh Sóc Trăng – nơi tác giả sinh sống và chữa bệnh.",
      "C. ánh sáng của mặt trăng chiếu xuống dòng sông vô cùng lấp lánh.",
      "D. tác giả thấy mặt trăng xuất hiện nhiều như thể có cả một dòng sông."
    ],
    correctAnswer: "C",
    explanation: "“Sông Trăng” là hình ảnh thơ lãng mạn gợi tả ánh trăng vàng chiếu rọi ngập tràn xuống dòng sông khiến cả dòng sông như được dát ánh trăng lấp lánh."
  },
  {
    id: 271816,
    type: "multiple_choice",
    content: `Đọc đoạn trích sau và trả lời câu hỏi:\n“Gió theo lối gió, mây đường mây,\nDòng nước buồn thiu, hoa bắp lay...\nThuyền ai đậu bến sông Trăng đó,\nCó chở trăng về kịp tối nay?\n\nMơ khách đường xa, khách đường xa\nÁo em trắng quá nhìn không ra...\nỞ đây sương khói mờ nhân ảnh\nAi biết tình ai có đậm đà?”\n(Hàn Mặc Tử, Đây thôn Vĩ Dạ, Ngữ văn 11, tập hai, NXB Giáo dục Việt Nam, 2017)\n\nCâu 9: Việc sử dụng đại từ “ai” trong đoạn thơ trên có ý nghĩa:`,
    image: null,
    options: [
      "A. thể hiện sự mơ hồ.",
      "B. thể hiện sự hoài nghi.",
      "C. thể hiện sự chán nản.",
      "D. thể hiện sự lãng quên."
    ],
    correctAnswer: "A",
    explanation: "“Ai” là đại từ phiếm chỉ, không xác định một đối tượng cụ thể nào nên tạo sắc thái mơ hồ, xa xôi."
  },
  {
    id: 271819,
    type: "multiple_choice",
    content: `Đọc đoạn trích sau và trả lời câu hỏi:\n“Gió theo lối gió, mây đường mây,\nDòng nước buồn thiu, hoa bắp lay...\nThuyền ai đậu bến sông Trăng đó,\nCó chở trăng về kịp tối nay?\n\nMơ khách đường xa, khách đường xa\nÁo em trắng quá nhìn không ra...\nỞ đây sương khói mờ nhân ảnh\nAi biết tình ai có đậm đà?”\n(Hàn Mặc Tử, Đây thôn Vĩ Dạ, Ngữ văn 11, tập hai, NXB Giáo dục Việt Nam, 2017)\n\nCâu 10: Biện pháp tu từ nào được sử dụng trong câu thơ “Mơ khách đường xa, khách đường xa”?`,
    image: null,
    options: [
      "A. Điệp từ.",
      "B. Điệp ngữ.",
      "C. Nhân hóa.",
      "D. Hoán dụ."
    ],
    correctAnswer: "B",
    explanation: "Cụm từ “khách đường xa” được lặp lại 2 lần liên tiếp trong câu thơ tạo nhịp điệu da diết, nên đây là biện pháp điệp ngữ."
  },
  {
    id: 271820,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n(1) “Văn hóa ứng xử từ lâu đã trở thành chuẩn mực trong việc đánh giá nhân cách con người. Cảm ơn là một trong các biểu hiện của ứng xử có văn hóa. Ở ta, từ cảm ơn được nghe rất nhiều trong các cuộc họp: cảm ơn sự có mặt của quý vị đại biểu, cảm ơn sự chú ý của mọi người... Nhưng đó chỉ là những lời khô cứng, ít cảm xúc. Chỉ có lời cảm ơn chân thành, xuất phát từ đáy lòng, từ sự tôn trọng nhau bất kể trên dưới mới thực sự là điều cần có cho một xã hội văn minh. Người ta có thể cảm ơn vì những chuyện rất nhỏ như được nhường vào cửa trước, được chỉ đường khi hỏi... Ấy là chưa kể đến những chuyện lớn lao như cảm ơn người đã cứu mạng mình, người đã chìa tay giúp đỡ mình trong cơn hoạn nạn... Những lúc đó, lời cảm ơn còn có nghĩa là đội ơn.\n(2) Còn một từ nữa cũng thông dụng không kém ở các xứ sở văn minh là "Xin lỗi". Ở những nơi công cộng, người ta hết sức tránh chen lấn, va chạm nhau. Nếu có ai đó vô ý khẽ chạm vào người khác, lập tức từ xin lỗi được bật ra hết sức tự nhiên. Từ xin lỗi còn được dùng cả khi không có lỗi. Xin lỗi khi xin phép nhường đường, xin lỗi trước khi dừng ai đó lại hỏi đường hay nhờ bấm hộ một kiểu ảnh. Tóm lại, khi biết mình có thể làm phiền đến người khác dù rất nhỏ, người ta cũng đều xin lỗi. Hiển nhiên, xin lỗi còn được thốt ra trong những lúc người nói cảm thấy mình thực sự có lỗi. Từ xin lỗi ở đây đi kèm với một tâm trạng hối lỗi, mong được tha thứ hơn là một cử chỉ văn minh thông thường. Đôi khi, lời xin lỗi được nói ra đúng nơi, đúng lúc còn có thể xóa bỏ biết bao mặc cảm, thù hận, đau khổ... Người có lỗi mà không biết nhận lỗi là có lỗi lớn nhất. Xem ra sức mạnh của từ xin lỗi còn lớn hơn cảm ơn.\n(3) Nếu toa thuốc cảm ơn có thể trị bệnh khiếm nhã, vô ơn, ích kỷ thì toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác. Vì thế, hãy để cảm ơn và xin lỗi trở thành hai từ thông dụng trong ngôn ngữ hàng ngày của chúng ta.”\n(Sưu tầm)\n\nCâu 11: Chủ đề của đoạn trích trên là gì?`,
    image: null,
    options: [
      "A. Ý nghĩa của lời cảm ơn trong cuộc sống thường ngày.",
      "B. Văn hóa nước ta trong sự so sánh với thế giới.",
      "C. Lời xin lỗi và cách hành xử văn minh của con người.",
      "D. Văn hóa ứng xử của con người trong đời sống."
    ],
    correctAnswer: "D",
    explanation: "Đoạn trích bàn về vai trò và ý nghĩa của cả hai lời nói “cảm ơn” và “xin lỗi” như những chuẩn mực của văn hóa ứng xử trong đời sống."
  },
  {
    id: 271821,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n(1) “Văn hóa ứng xử từ lâu đã trở thành chuẩn mực trong việc đánh giá nhân cách con người. Cảm ơn là một trong các biểu hiện của ứng xử có văn hóa. Ở ta, từ cảm ơn được nghe rất nhiều trong các cuộc họp: cảm ơn sự có mặt của quý vị đại biểu, cảm ơn sự chú ý của mọi người... Nhưng đó chỉ là những lời khô cứng, ít cảm xúc. Chỉ có lời cảm ơn chân thành, xuất phát từ đáy lòng, từ sự tôn trọng nhau bất kể trên dưới mới thực sự là điều cần có cho một xã hội văn minh. Người ta có thể cảm ơn vì những chuyện rất nhỏ như được nhường vào cửa trước, được chỉ đường khi hỏi... Ấy là chưa kể đến những chuyện lớn lao như cảm ơn người đã cứu mạng mình, người đã chìa tay giúp đỡ mình trong cơn hoạn nạn... Những lúc đó, lời cảm ơn còn có nghĩa là đội ơn.\n(2) Còn một từ nữa cũng thông dụng không kém ở các xứ sở văn minh là "Xin lỗi". Ở những nơi công cộng, người ta hết sức tránh chen lấn, va chạm nhau. Nếu có ai đó vô ý khẽ chạm vào người khác, lập tức từ xin lỗi được bật ra hết sức tự nhiên. Từ xin lỗi còn được dùng cả khi không có lỗi. Xin lỗi khi xin phép nhường đường, xin lỗi trước khi dừng ai đó lại hỏi đường hay nhờ bấm hộ một kiểu ảnh. Tóm lại, khi biết mình có thể làm phiền đến người khác dù rất nhỏ, người ta cũng đều xin lỗi. Hiển nhiên, xin lỗi còn được thốt ra trong những lúc người nói cảm thấy mình thực sự có lỗi. Từ xin lỗi ở đây đi kèm với một tâm trạng hối lỗi, mong được tha thứ hơn là một cử chỉ văn minh thông thường. Đôi khi, lời xin lỗi được nói ra đúng nơi, đúng lúc còn có thể xóa bỏ biết bao mặc cảm, thù hận, đau khổ... Người có lỗi mà không biết nhận lỗi là có lỗi lớn nhất. Xem ra sức mạnh của từ xin lỗi còn lớn hơn cảm ơn.\n(3) Nếu toa thuốc cảm ơn có thể trị bệnh khiếm nhã, vô ơn, ích kỷ thì toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác. Vì thế, hãy để cảm ơn và xin lỗi trở thành hai từ thông dụng trong ngôn ngữ hàng ngày của chúng ta.”\n(Sưu tầm)\n\nCâu 12: Theo đoạn trích trên, lời cảm ơn nên được dùng khi nào?`,
    image: null,
    options: [
      "A. Trong các cuộc họp có nhiều người quan trọng.",
      "B. Trong những tình huống nghiêm trọng.",
      "C. Trong những chuyện nhỏ nhặt hàng ngày.",
      "D. Trong mọi tình huống cần thiết của cuộc sống."
    ],
    correctAnswer: "D",
    explanation: "Tác giả nêu rõ người ta có thể cảm ơn từ “những chuyện rất nhỏ” đến “những chuyện lớn lao”, và khuyên hãy để cảm ơn trở thành từ thông dụng hàng ngày."
  },
  {
    id: 271824,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n(1) “Văn hóa ứng xử từ lâu đã trở thành chuẩn mực trong việc đánh giá nhân cách con người. Cảm ơn là một trong các biểu hiện của ứng xử có văn hóa. Ở ta, từ cảm ơn được nghe rất nhiều trong các cuộc họp: cảm ơn sự có mặt của quý vị đại biểu, cảm ơn sự chú ý của mọi người... Nhưng đó chỉ là những lời khô cứng, ít cảm xúc. Chỉ có lời cảm ơn chân thành, xuất phát từ đáy lòng, từ sự tôn trọng nhau bất kể trên dưới mới thực sự là điều cần có cho một xã hội văn minh. Người ta có thể cảm ơn vì những chuyện rất nhỏ như được nhường vào cửa trước, được chỉ đường khi hỏi... Ấy là chưa kể đến những chuyện lớn lao như cảm ơn người đã cứu mạng mình, người đã chìa tay giúp đỡ mình trong cơn hoạn nạn... Những lúc đó, lời cảm ơn còn có nghĩa là đội ơn.\n(2) Còn một từ nữa cũng thông dụng không kém ở các xứ sở văn minh là "Xin lỗi". Ở những nơi công cộng, người ta hết sức tránh chen lấn, va chạm nhau. Nếu có ai đó vô ý khẽ chạm vào người khác, lập tức từ xin lỗi được bật ra hết sức tự nhiên. Từ xin lỗi còn được dùng cả khi không có lỗi. Xin lỗi khi xin phép nhường đường, xin lỗi trước khi dừng ai đó lại hỏi đường hay nhờ bấm hộ một kiểu ảnh. Tóm lại, khi biết mình có thể làm phiền đến người khác dù rất nhỏ, người ta cũng đều xin lỗi. Hiển nhiên, xin lỗi còn được thốt ra trong những lúc người nói cảm thấy mình thực sự có lỗi. Từ xin lỗi ở đây đi kèm với một tâm trạng hối lỗi, mong được tha thứ hơn là một cử chỉ văn minh thông thường. Đôi khi, lời xin lỗi được nói ra đúng nơi, đúng lúc còn có thể xóa bỏ biết bao mặc cảm, thù hận, đau khổ... Người có lỗi mà không biết nhận lỗi là có lỗi lớn nhất. Xem ra sức mạnh của từ xin lỗi còn lớn hơn cảm ơn.\n(3) Nếu toa thuốc cảm ơn có thể trị bệnh khiếm nhã, vô ơn, ích kỷ thì toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác. Vì thế, hãy để cảm ơn và xin lỗi trở thành hai từ thông dụng trong ngôn ngữ hàng ngày của chúng ta.”\n(Sưu tầm)\n\nCâu 13: Đoạn văn trên sử dụng phương thức biểu đạt chính nào?`,
    image: null,
    options: [
      "A. Tự sự.",
      "B. Thuyết minh.",
      "C. Giải thích.",
      "D. Nghị luận."
    ],
    correctAnswer: "D",
    explanation: "Văn bản trình bày quan điểm, lập luận và đánh giá của tác giả về việc sử dụng lời cảm ơn và xin lỗi trong giao tiếp xã hội nên phương thức biểu đạt chính là nghị luận."
  },
  {
    id: 271822,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n(1) “Văn hóa ứng xử từ lâu đã trở thành chuẩn mực trong việc đánh giá nhân cách con người. Cảm ơn là một trong các biểu hiện của ứng xử có văn hóa. Ở ta, từ cảm ơn được nghe rất nhiều trong các cuộc họp: cảm ơn sự có mặt của quý vị đại biểu, cảm ơn sự chú ý của mọi người... Nhưng đó chỉ là những lời khô cứng, ít cảm xúc. Chỉ có lời cảm ơn chân thành, xuất phát từ đáy lòng, từ sự tôn trọng nhau bất kể trên dưới mới thực sự là điều cần có cho một xã hội văn minh. Người ta có thể cảm ơn vì những chuyện rất nhỏ như được nhường vào cửa trước, được chỉ đường khi hỏi... Ấy là chưa kể đến những chuyện lớn lao như cảm ơn người đã cứu mạng mình, người đã chìa tay giúp đỡ mình trong cơn hoạn nạn... Những lúc đó, lời cảm ơn còn có nghĩa là đội ơn.\n(2) Còn một từ nữa cũng thông dụng không kém ở các xứ sở văn minh là "Xin lỗi". Ở những nơi công cộng, người ta hết sức tránh chen lấn, va chạm nhau. Nếu có ai đó vô ý khẽ chạm vào người khác, lập tức từ xin lỗi được bật ra hết sức tự nhiên. Từ xin lỗi còn được dùng cả khi không có lỗi. Xin lỗi khi xin phép nhường đường, xin lỗi trước khi dừng ai đó lại hỏi đường hay nhờ bấm hộ một kiểu ảnh. Tóm lại, khi biết mình có thể làm phiền đến người khác dù rất nhỏ, người ta cũng đều xin lỗi. Hiển nhiên, xin lỗi còn được thốt ra trong những lúc người nói cảm thấy mình thực sự có lỗi. Từ xin lỗi ở đây đi kèm với một tâm trạng hối lỗi, mong được tha thứ hơn là một cử chỉ văn minh thông thường. Đôi khi, lời xin lỗi được nói ra đúng nơi, đúng lúc còn có thể xóa bỏ biết bao mặc cảm, thù hận, đau khổ... Người có lỗi mà không biết nhận lỗi là có lỗi lớn nhất. Xem ra sức mạnh của từ xin lỗi còn lớn hơn cảm ơn.\n(3) Nếu toa thuốc cảm ơn có thể trị bệnh khiếm nhã, vô ơn, ích kỷ thì toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác. Vì thế, hãy để cảm ơn và xin lỗi trở thành hai từ thông dụng trong ngôn ngữ hàng ngày của chúng ta.”\n(Sưu tầm)\n\nCâu 14: Tác giả khẳng định: “toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác.” vì sao?`,
    image: null,
    options: [
      "A. Vì lời xin lỗi sẽ giúp ta biết nhận ra khuyết điểm, sửa lỗi để hoàn thiện bản thân.",
      "B. Vì khi nói lời xin lỗi sẽ khiến cuộc giao tiếp diễn ra suôn sẻ, bớt căng thẳng hơn.",
      "C. Vì nói lời xin lỗi sẽ giúp cho chúng ta nhận ra được những hạn chế của bản thân.",
      "D. Vì lời xin lỗi sẽ làm cho đối phương cảm thấy mình được kính nể và tôn trọng."
    ],
    correctAnswer: "A",
    explanation: "Lời xin lỗi chân thành đi kèm sự hối lỗi giúp con người nhận ra khiếm khuyết, biết hạ cái tôi để sửa sai và hoàn thiện nhân cách."
  },
  {
    id: 271823,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n(1) “Văn hóa ứng xử từ lâu đã trở thành chuẩn mực trong việc đánh giá nhân cách con người. Cảm ơn là một trong các biểu hiện của ứng xử có văn hóa. Ở ta, từ cảm ơn được nghe rất nhiều trong các cuộc họp: cảm ơn sự có mặt của quý vị đại biểu, cảm ơn sự chú ý của mọi người... Nhưng đó chỉ là những lời khô cứng, ít cảm xúc. Chỉ có lời cảm ơn chân thành, xuất phát từ đáy lòng, từ sự tôn trọng nhau bất kể trên dưới mới thực sự là điều cần có cho một xã hội văn minh. Người ta có thể cảm ơn vì những chuyện rất nhỏ như được nhường vào cửa trước, được chỉ đường khi hỏi... Ấy là chưa kể đến những chuyện lớn lao như cảm ơn người đã cứu mạng mình, người đã chìa tay giúp đỡ mình trong cơn hoạn nạn... Những lúc đó, lời cảm ơn còn có nghĩa là đội ơn.\n(2) Còn một từ nữa cũng thông dụng không kém ở các xứ sở văn minh là "Xin lỗi". Ở những nơi công cộng, người ta hết sức tránh chen lấn, va chạm nhau. Nếu có ai đó vô ý khẽ chạm vào người khác, lập tức từ xin lỗi được bật ra hết sức tự nhiên. Từ xin lỗi còn được dùng cả khi không có lỗi. Xin lỗi khi xin phép nhường đường, xin lỗi trước khi dừng ai đó lại hỏi đường hay nhờ bấm hộ một kiểu ảnh. Tóm lại, khi biết mình có thể làm phiền đến người khác dù rất nhỏ, người ta cũng đều xin lỗi. Hiển nhiên, xin lỗi còn được thốt ra trong những lúc người nói cảm thấy mình thực sự có lỗi. Từ xin lỗi ở đây đi kèm với một tâm trạng hối lỗi, mong được tha thứ hơn là một cử chỉ văn minh thông thường. Đôi khi, lời xin lỗi được nói ra đúng nơi, đúng lúc còn có thể xóa bỏ biết bao mặc cảm, thù hận, đau khổ... Người có lỗi mà không biết nhận lỗi là có lỗi lớn nhất. Xem ra sức mạnh của từ xin lỗi còn lớn hơn cảm ơn.\n(3) Nếu toa thuốc cảm ơn có thể trị bệnh khiếm nhã, vô ơn, ích kỷ thì toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác. Vì thế, hãy để cảm ơn và xin lỗi trở thành hai từ thông dụng trong ngôn ngữ hàng ngày của chúng ta.”\n(Sưu tầm)\n\nCâu 15: Từ “chân thành” trong đoạn trích gần nghĩa hơn cả với từ nào sau đây?`,
    image: null,
    options: [
      "A. Thành thục.",
      "B. Thân thiết.",
      "C. Thành tâm.",
      "D. Thiết thực."
    ],
    correctAnswer: "C",
    explanation: "“Chân thành” là rất thành thật, xuất phát từ đáy lòng; gần nghĩa nhất với “thành tâm” (có tình cảm chân thật, không giả dối)."
  },
  {
    id: 271829,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Sự ngưng tụ hơi nước là quá trình hơi nước trong không khí được chuyển sang thể nước lỏng. Ngưng tụ hơi nước rất quan trọng đối với chu trình tuần hoàn nước bởi vì nó hình thành nên các đám mây. Những đám mây này có thể tạo ra mưa, nó là cách chính để nước quay trở lại Trái Đất. Ngưng tụ hơi nước là quá trình ngược với bốc hơi nước. Sự ngưng tụ hơi nước cũng là nguyên nhân của hiện tượng sương, hoặc nước trên mắt kính của bạn khi bạn từ một phòng lạnh đi ra ngoài trong một ngày nóng, ẩm ướt, còn trong một ngày lạnh nước có thể nhỏ giọt bên ngoài cốc uống nước của bạn hay có nước ở phía bên trong cửa sổ ngôi nhà bạn.\nThậm chí trên những bầu trời trong xanh không một gợn mây, thì nước vẫn tồn tại dưới hình thức hơi nước và những giọt nước li ti không thể nhìn thấy được. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi, muối, khói trong khí quyển để hình thành nên các hạt nhân mây (giọt mây nhỏ, đám mây nhỏ), nó gia tăng khối lượng và phát triển thành những đám mây. Khi những giọt nước kết hợp với nhau, gia tăng về kích thước, những đám mây có thể phát triển và mưa có thể xảy ra. Các đám mây hình thành trong khí quyển do không khí chứa hơi nước bốc lên cao và lạnh đi. Phần quan trọng của quá trình này là không khí sát mặt đất ấm lên do bức xạ mặt trời. Nguyên nhân lớp khí quyển phía bên trên mặt đất lạnh đi là do áp lực không khí. Không khí có trọng lượng và tại mực nước biển trọng lượng của một cột không khí nén xuống trên đầu bạn khoảng 32kg trên mỗi inch vuông, áp lực này, được gọi là khí áp, nó là kết quả của mật độ không khí trong cột không khí phía trên. Càng lên cao càng ít không khí phía bên trên, và vì thế càng ít áp lực. Khí áp thấp hơn và mật độ không khí giảm theo độ cao. Điều này làm cho không khí trở nên lạnh hơn.”\n(Theo Gleick, Tài nguyên nước, Bách khoa từ điển về khí hậu và thời tiết, Nhà xuất bản Đại học Oxford, New York, quyển 2, trang 817-823)\n\nCâu 16: Xác định phong cách ngôn ngữ của đoạn.`,
    image: null,
    options: [
      "A. Khoa học.",
      "B. Nghệ thuật.",
      "C. Chính luận.",
      "D. Sinh hoạt."
    ],
    correctAnswer: "A",
    explanation: "Văn bản cung cấp tri thức khách quan, chính xác về hiện tượng tự nhiên (sự ngưng tụ hơi nước, khí áp) với hệ thống thuật ngữ chuyên ngành nên thuộc phong cách ngôn ngữ khoa học."
  },
  {
    id: 271825,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Sự ngưng tụ hơi nước là quá trình hơi nước trong không khí được chuyển sang thể nước lỏng. Ngưng tụ hơi nước rất quan trọng đối với chu trình tuần hoàn nước bởi vì nó hình thành nên các đám mây. Những đám mây này có thể tạo ra mưa, nó là cách chính để nước quay trở lại Trái Đất. Ngưng tụ hơi nước là quá trình ngược với bốc hơi nước. Sự ngưng tụ hơi nước cũng là nguyên nhân của hiện tượng sương, hoặc nước trên mắt kính của bạn khi bạn từ một phòng lạnh đi ra ngoài trong một ngày nóng, ẩm ướt, còn trong một ngày lạnh nước có thể nhỏ giọt bên ngoài cốc uống nước của bạn hay có nước ở phía bên trong cửa sổ ngôi nhà bạn.\nThậm chí trên những bầu trời trong xanh không một gợn mây, thì nước vẫn tồn tại dưới hình thức hơi nước và những giọt nước li ti không thể nhìn thấy được. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi, muối, khói trong khí quyển để hình thành nên các hạt nhân mây (giọt mây nhỏ, đám mây nhỏ), nó gia tăng khối lượng và phát triển thành những đám mây. Khi những giọt nước kết hợp với nhau, gia tăng về kích thước, những đám mây có thể phát triển và mưa có thể xảy ra. Các đám mây hình thành trong khí quyển do không khí chứa hơi nước bốc lên cao và lạnh đi. Phần quan trọng của quá trình này là không khí sát mặt đất ấm lên do bức xạ mặt trời. Nguyên nhân lớp khí quyển phía bên trên mặt đất lạnh đi là do áp lực không khí. Không khí có trọng lượng và tại mực nước biển trọng lượng của một cột không khí nén xuống trên đầu bạn khoảng 32kg trên mỗi inch vuông, áp lực này, được gọi là khí áp, nó là kết quả của mật độ không khí trong cột không khí phía trên. Càng lên cao càng ít không khí phía bên trên, và vì thế càng ít áp lực. Khí áp thấp hơn và mật độ không khí giảm theo độ cao. Điều này làm cho không khí trở nên lạnh hơn.”\n(Theo Gleick, Tài nguyên nước, Bách khoa từ điển về khí hậu và thời tiết, Nhà xuất bản Đại học Oxford, New York, quyển 2, trang 817-823)\n\nCâu 17: Theo tác giả, quá trình hơi nước trong không khí được chuyển sang thể nước lỏng được gọi là gì?`,
    image: null,
    options: [
      "A. Bản chất của hạt mưa rơi.",
      "B. Nguyên nhân nước bốc hơi.",
      "C. Hiện tượng xuất hiện sương.",
      "D. Sự ngưng tụ hơi nước."
    ],
    correctAnswer: "D",
    explanation: "Câu mở đầu đoạn 1 nêu rõ: “Sự ngưng tụ hơi nước là quá trình hơi nước trong không khí được chuyển sang thể nước lỏng.”"
  },
  {
    id: 271828,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Sự ngưng tụ hơi nước là quá trình hơi nước trong không khí được chuyển sang thể nước lỏng. Ngưng tụ hơi nước rất quan trọng đối với chu trình tuần hoàn nước bởi vì nó hình thành nên các đám mây. Những đám mây này có thể tạo ra mưa, nó là cách chính để nước quay trở lại Trái Đất. Ngưng tụ hơi nước là quá trình ngược với bốc hơi nước. Sự ngưng tụ hơi nước cũng là nguyên nhân của hiện tượng sương, hoặc nước trên mắt kính của bạn khi bạn từ một phòng lạnh đi ra ngoài trong một ngày nóng, ẩm ướt, còn trong một ngày lạnh nước có thể nhỏ giọt bên ngoài cốc uống nước của bạn hay có nước ở phía bên trong cửa sổ ngôi nhà bạn.\nThậm chí trên những bầu trời trong xanh không một gợn mây, thì nước vẫn tồn tại dưới hình thức hơi nước và những giọt nước li ti không thể nhìn thấy được. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi, muối, khói trong khí quyển để hình thành nên các hạt nhân mây (giọt mây nhỏ, đám mây nhỏ), nó gia tăng khối lượng và phát triển thành những đám mây. Khi những giọt nước kết hợp với nhau, gia tăng về kích thước, những đám mây có thể phát triển và mưa có thể xảy ra. Các đám mây hình thành trong khí quyển do không khí chứa hơi nước bốc lên cao và lạnh đi. Phần quan trọng của quá trình này là không khí sát mặt đất ấm lên do bức xạ mặt trời. Nguyên nhân lớp khí quyển phía bên trên mặt đất lạnh đi là do áp lực không khí. Không khí có trọng lượng và tại mực nước biển trọng lượng của một cột không khí nén xuống trên đầu bạn khoảng 32kg trên mỗi inch vuông, áp lực này, được gọi là khí áp, nó là kết quả của mật độ không khí trong cột không khí phía trên. Càng lên cao càng ít không khí phía bên trên, và vì thế càng ít áp lực. Khí áp thấp hơn và mật độ không khí giảm theo độ cao. Điều này làm cho không khí trở nên lạnh hơn.”\n(Theo Gleick, Tài nguyên nước, Bách khoa từ điển về khí hậu và thời tiết, Nhà xuất bản Đại học Oxford, New York, quyển 2, trang 817-823)\n\nCâu 18: Theo đoạn trích, khi có áp lực không khí sẽ dẫn tới điều gì sau đây?`,
    image: null,
    options: [
      "A. Những giọt nước li ti không nhìn thấy được.",
      "B. Những đám mây mỏng có thể tạo ra mưa.",
      "C. Lớp khí quyển phía bên trên mặt đất lạnh đi.",
      "D. Xuất hiện sương mù dày đặc trên mặt đất."
    ],
    correctAnswer: "C",
    explanation: "Đoạn 2 nêu trực tiếp: “Nguyên nhân lớp khí quyển phía bên trên mặt đất lạnh đi là do áp lực không khí.”"
  },
  {
    id: 271826,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Sự ngưng tụ hơi nước là quá trình hơi nước trong không khí được chuyển sang thể nước lỏng. Ngưng tụ hơi nước rất quan trọng đối với chu trình tuần hoàn nước bởi vì nó hình thành nên các đám mây. Những đám mây này có thể tạo ra mưa, nó là cách chính để nước quay trở lại Trái Đất. Ngưng tụ hơi nước là quá trình ngược với bốc hơi nước. Sự ngưng tụ hơi nước cũng là nguyên nhân của hiện tượng sương, hoặc nước trên mắt kính của bạn khi bạn từ một phòng lạnh đi ra ngoài trong một ngày nóng, ẩm ướt, còn trong một ngày lạnh nước có thể nhỏ giọt bên ngoài cốc uống nước của bạn hay có nước ở phía bên trong cửa sổ ngôi nhà bạn.\nThậm chí trên những bầu trời trong xanh không một gợn mây, thì nước vẫn tồn tại dưới hình thức hơi nước và những giọt nước li ti không thể nhìn thấy được. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi, muối, khói trong khí quyển để hình thành nên các hạt nhân mây (giọt mây nhỏ, đám mây nhỏ), nó gia tăng khối lượng và phát triển thành những đám mây. Khi những giọt nước kết hợp với nhau, gia tăng về kích thước, những đám mây có thể phát triển và mưa có thể xảy ra. Các đám mây hình thành trong khí quyển do không khí chứa hơi nước bốc lên cao và lạnh đi. Phần quan trọng của quá trình này là không khí sát mặt đất ấm lên do bức xạ mặt trời. Nguyên nhân lớp khí quyển phía bên trên mặt đất lạnh đi là do áp lực không khí. Không khí có trọng lượng và tại mực nước biển trọng lượng của một cột không khí nén xuống trên đầu bạn khoảng 32kg trên mỗi inch vuông, áp lực này, được gọi là khí áp, nó là kết quả của mật độ không khí trong cột không khí phía trên. Càng lên cao càng ít không khí phía bên trên, và vì thế càng ít áp lực. Khí áp thấp hơn và mật độ không khí giảm theo độ cao. Điều này làm cho không khí trở nên lạnh hơn.”\n(Theo Gleick, Tài nguyên nước, Bách khoa từ điển về khí hậu và thời tiết, Nhà xuất bản Đại học Oxford, New York, quyển 2, trang 817-823)\n\nCâu 19: Thông tin nào KHÔNG được nhắc tới trong đoạn văn thứ hai?`,
    image: null,
    options: [
      "A. Lớp khí quyển phía bên trên mặt đất lạnh đi và tác động bức xạ đến mặt trời.",
      "B. Khi các hạt nhân mây (giọt mây nhỏ và đám mây nhỏ) gia tăng khối lượng.",
      "C. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi trong khí quyển.",
      "D. Những phân tử nhỏ bé của khói trong khí quyển kết hợp với các phân tử nước."
    ],
    correctAnswer: "A",
    explanation: "Đoạn 2 chỉ nói không khí sát mặt đất ấm lên do bức xạ mặt trời, không nói lớp khí quyển lạnh đi và “tác động bức xạ đến mặt trời”."
  },
  {
    id: 271827,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Sự ngưng tụ hơi nước là quá trình hơi nước trong không khí được chuyển sang thể nước lỏng. Ngưng tụ hơi nước rất quan trọng đối với chu trình tuần hoàn nước bởi vì nó hình thành nên các đám mây. Những đám mây này có thể tạo ra mưa, nó là cách chính để nước quay trở lại Trái Đất. Ngưng tụ hơi nước là quá trình ngược với bốc hơi nước. Sự ngưng tụ hơi nước cũng là nguyên nhân của hiện tượng sương, hoặc nước trên mắt kính của bạn khi bạn từ một phòng lạnh đi ra ngoài trong một ngày nóng, ẩm ướt, còn trong một ngày lạnh nước có thể nhỏ giọt bên ngoài cốc uống nước của bạn hay có nước ở phía bên trong cửa sổ ngôi nhà bạn.\nThậm chí trên những bầu trời trong xanh không một gợn mây, thì nước vẫn tồn tại dưới hình thức hơi nước và những giọt nước li ti không thể nhìn thấy được. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi, muối, khói trong khí quyển để hình thành nên các hạt nhân mây (giọt mây nhỏ, đám mây nhỏ), nó gia tăng khối lượng và phát triển thành những đám mây. Khi những giọt nước kết hợp với nhau, gia tăng về kích thước, những đám mây có thể phát triển và mưa có thể xảy ra. Các đám mây hình thành trong khí quyển do không khí chứa hơi nước bốc lên cao và lạnh đi. Phần quan trọng của quá trình này là không khí sát mặt đất ấm lên do bức xạ mặt trời. Nguyên nhân lớp khí quyển phía bên trên mặt đất lạnh đi là do áp lực không khí. Không khí có trọng lượng và tại mực nước biển trọng lượng của một cột không khí nén xuống trên đầu bạn khoảng 32kg trên mỗi inch vuông, áp lực này, được gọi là khí áp, nó là kết quả của mật độ không khí trong cột không khí phía trên. Càng lên cao càng ít không khí phía bên trên, và vì thế càng ít áp lực. Khí áp thấp hơn và mật độ không khí giảm theo độ cao. Điều này làm cho không khí trở nên lạnh hơn.”\n(Theo Gleick, Tài nguyên nước, Bách khoa từ điển về khí hậu và thời tiết, Nhà xuất bản Đại học Oxford, New York, quyển 2, trang 817-823)\n\nCâu 20: Đoạn trích trên bàn về vấn đề gì?`,
    image: null,
    options: [
      "A. Nguyên nhân xuất hiện lớp khí quyển.",
      "B. Sự vận động của những giọt nước li ti.",
      "C. Nguyên nhân xuất hiện hạt phân tử nước.",
      "D. Sự ngưng tụ hơi nước trong không khí."
    ],
    correctAnswer: "D",
    explanation: "Toàn bộ văn bản giải thích khái niệm, vai trò, biểu hiện và cơ chế hình thành của sự ngưng tụ hơi nước trong khí quyển."
  },
  {
    id: 183816,
    type: "multiple_choice",
    content: "Câu 21: Xác định một từ/cụm từ SAI về ngữ pháp/ ngữ nghĩa/ logic/ phong cách.\nĐang trên ghế giảng đường, song nhiều bạn trẻ đã rất năng động, tự tìm tòi việc làm, mang về thu nhập hàng chục triệu đồng.",
    image: null,
    options: [
      "A. Đang.",
      "B. song.",
      "C. tìm tòi.",
      "D. thu nhập."
    ],
    correctAnswer: "C",
    explanation: "“Tìm tòi” là tìm một cách công phu, kiên nhẫn để phát hiện, sáng tạo ra cái mới; không kết hợp với “việc làm”. Cần sửa thành “tìm kiếm”."
  },
  {
    id: 183817,
    type: "multiple_choice",
    content: "Câu 22: Xác định một từ/cụm từ SAI về ngữ pháp/ ngữ nghĩa/ logic/ phong cách.\nVới tỉ lệ 92,79% đại biểu có mặt tán thành, Quốc hội thông qua Nghị quyết thí điểm một số cơ chế, chính sách đặc thù phát triển thành phố Cần Thơ, với nhiều chính sách được ban hành ngay lập tức.",
    image: null,
    options: [
      "A. tán thành.",
      "B. thí điểm.",
      "C. đặc thù.",
      "D. ngay lập tức."
    ],
    correctAnswer: "D",
    explanation: "Cụm từ “ngay lập tức” mang sắc thái khẩu ngữ, không phù hợp với phong cách ngôn ngữ hành chính – chính luận của văn bản nghị quyết Quốc hội."
  },
  {
    id: 183818,
    type: "multiple_choice",
    content: "Câu 23: Xác định một từ/cụm từ SAI về ngữ pháp/ ngữ nghĩa/ logic/ phong cách.\nTrong sự chuyển mình của Hà Nội, có những cái tưởng như được thêm vào, và thực chất lại là mất đi một cách rất đáng tiếc.",
    image: null,
    options: [
      "A. chuyển mình.",
      "B. cái.",
      "C. và.",
      "D. rất đáng tiếc."
    ],
    correctAnswer: "C",
    explanation: "Hai vế câu có quan hệ nghĩa tương phản (“tưởng như được thêm vào” >< “thực chất lại là mất đi”) nên phải dùng quan hệ từ “nhưng” thay cho “và”."
  },
  {
    id: 183819,
    type: "multiple_choice",
    content: "Câu 24: Xác định một từ/cụm từ SAI về ngữ pháp/ ngữ nghĩa/ logic/ phong cách.\nBài thơ “Từ ấy” là lời tâm nguyện của người thanh niên yêu nước giác ngộ lý tưởng cách mạng. Sự vận động của tâm trạng nhà thơ được thể hiện linh động bằng những hình ảnh tươi sáng, các biện pháp tu từ và ngôn ngữ giàu nhạc điệu.",
    image: null,
    options: [
      "A. tâm nguyện.",
      "B. giác ngộ.",
      "C. linh động.",
      "D. ngôn ngữ."
    ],
    correctAnswer: "C",
    explanation: "“Linh động” nghĩa là xử lý mềm dẻo, không cứng nhắc theo hoàn cảnh. Để miêu tả hình ảnh nghệ thuật giàu sức sống, gợi cảm cần dùng từ “sinh động”."
  },
  {
    id: 183820,
    type: "multiple_choice",
    content: "Câu 25: Xác định một từ/cụm từ SAI về ngữ pháp/ hoặc ngữ nghĩa/ logic/ phong cách.\nTrong thời đại khoa học công nghệ phát triển làm mưa làm gió và sự xuất hiện của cuộc cách mạng công nghiệp lần thứ tư thì đổi mới giáo dục đào tạo không chỉ trở nên quan trọng mà còn bức thiết hơn bao giờ hết, có ý nghĩa quyết định tương lai của mỗi dân tộc, mỗi quốc gia.",
    image: null,
    options: [
      "A. khoa học công nghệ.",
      "B. làm mưa làm gió.",
      "C. cách mạng công nghiệp.",
      "D. quyết định tương lai."
    ],
    correctAnswer: "B",
    explanation: "Thành ngữ “làm mưa làm gió” mang sắc thái khẩu ngữ và thường hàm ý tiêu cực (tác oai tác quái), không phù hợp với câu văn chính luận; nên thay bằng “mạnh mẽ” hoặc “nhanh chóng”."
  },
  {
    id: 183821,
    type: "multiple_choice",
    content: "Câu 26: Chọn một từ mà cấu tạo của nó KHÔNG cùng nhóm với các từ còn lại.",
    image: null,
    options: [
      "A. xanh xao.",
      "B. trắng bệch.",
      "C. vàng vọt.",
      "D. đỏ rực."
    ],
    correctAnswer: "D",
    explanation: "“Xanh xao”, “trắng bệch”, “vàng vọt” đều chỉ sắc thái nhợt nhạt, thiếu sức sống (thường dùng tả sắc mặt con người); còn “đỏ rực” chỉ màu sắc tươi sáng, rực rỡ của sự vật."
  },
  {
    id: 183822,
    type: "multiple_choice",
    content: "Câu 27: Chọn một từ mà cấu tạo của nó KHÔNG cùng nhóm với các từ còn lại.",
    image: null,
    options: [
      "A. đùm bọc.",
      "B. cứu trợ.",
      "C. cứu giúp.",
      "D. ủng hộ."
    ],
    correctAnswer: "D",
    explanation: "“Đùm bọc”, “cứu trợ”, “cứu giúp” đều trực tiếp chỉ hành động giúp đỡ người gặp khó khăn, hoạn nạn; riêng “ủng hộ” còn dùng để chỉ thái độ đồng tình, tán thành bằng tinh thần hoặc lời nói."
  },
  {
    id: 183823,
    type: "multiple_choice",
    content: "Câu 28: Chọn một từ mà cấu tạo của nó KHÔNG cùng nhóm với các từ còn lại.",
    image: null,
    options: [
      "A. cao.",
      "B. thấp.",
      "C. nông.",
      "D. dài."
    ],
    correctAnswer: "C",
    explanation: "“Cao”, “thấp”, “dài” miêu tả kích thước theo chiều thẳng đứng so với mặt đất hoặc chiều nằm ngang; còn “nông” chỉ khoảng cách ngắn từ bề mặt/miệng xuống đáy của vật."
  },
  {
    id: 183826,
    type: "multiple_choice",
    content: "Câu 29: Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:\nMặt Trời điều khiển vòng tuần hoàn nước _______ việc làm nóng nước trên những đại dương, làm bốc hơi nước _______ trong không khí.",
    image: null,
    options: [
      "A. bằng/ lên.",
      "B. bằng/ vào.",
      "C. từ/ lên.",
      "D. bằng/ trên."
    ],
    correctAnswer: "B",
    explanation: "Chỗ trống thứ nhất cần quan hệ từ chỉ phương tiện (“bằng việc...”); chỗ trống thứ hai kết hợp với cụm từ “trong không khí” nên dùng “vào” (“làm bốc hơi nước vào trong không khí”)."
  },
  {
    id: 183827,
    type: "multiple_choice",
    content: "Câu 30: Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:\nNếu học sinh được phép học trực tiếp, các nhà trường _______ làm tốt công tác phòng chống dịch, tận dụng tối đa thời gian để ôn tập, củng cố nội dung còn khiếm khuyết _______ học sinh học trực tuyến.",
    image: null,
    options: [
      "A. cần/ khi.",
      "B. đã/ khi.",
      "C. đã/ lúc.",
      "D. cần/ nhưng."
    ],
    correctAnswer: "A",
    explanation: "Vế đầu là câu điều kiện giả định (“Nếu...”) nên vế sau dùng “cần” để nêu yêu cầu; vế cuối chỉ mốc thời gian đã diễn ra việc học trực tuyến nên dùng “khi”."
  },
  {
    id: 183828,
    type: "multiple_choice",
    content: "Câu 31: Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:\nĐô thị hóa _______ sự phát triển riêng của một đô thị về quy mô và số lượng dân số, mà còn gắn liền với những biến đổi về kinh tế - xã hội _______ môi trường thiên nhiên của một hệ thống đô thị.",
    image: null,
    options: [
      "A. không chỉ là/ và.",
      "B. không chỉ/ cùng.",
      "C. chính là/ và.",
      "D. chính là/ cùng."
    ],
    correctAnswer: "A",
    explanation: "Cấu trúc tương ứng với “mà còn” ở vế sau là “không chỉ”, đi kèm danh từ “sự phát triển...” nên cần hệ từ “là”; giữa “kinh tế - xã hội” và “môi trường thiên nhiên” dùng quan hệ từ đẳng lập “và”."
  },
  {
    id: 183829,
    type: "multiple_choice",
    content: "Câu 32: Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:\nTheo báo cáo được UNICEF _______ ngày 11/12/2006, trong vòng nhiều năm qua, Việt Nam luôn dẫn đầu khu vực châu Á – Thái Bình Dương về các chỉ số bình đẳng giới.",
    image: null,
    options: [
      "A. giới thiệu.",
      "B. truyền ra.",
      "C. tiết lộ.",
      "D. công bố."
    ],
    correctAnswer: "D",
    explanation: "“Công bố” nghĩa là thông báo công khai cho mọi người biết, phù hợp nhất với đối tượng là một bản báo cáo chính thức của tổ chức quốc tế."
  },
  {
    id: 183830,
    type: "multiple_choice",
    content: "Câu 33: Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:\n_______ văn học biểu hiện trước hết ở cách nhìn, cách cảm thụ có tính chất khám phá, ở giọng điệu riêng biệt của tác giả.",
    image: null,
    options: [
      "A. Quá trình.",
      "B. Giai đoạn.",
      "C. Phong cách.",
      "D. Trào lưu."
    ],
    correctAnswer: "C",
    explanation: "Những dấu hiệu như “cách nhìn, cách cảm thụ có tính chất khám phá” và “giọng điệu riêng biệt” chính là biểu hiện đặc trưng của “phong cách” văn học."
  },
  {
    id: 183831,
    type: "multiple_choice",
    content: `Câu 34: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Thấy hắn toan làm dữ, cụ đành dịu giọng:\n– Thôi, cầm lấy vậy, tôi không còn hơn.\nHắn vênh cái mặt lên, rất là kiêu ngạo:\n– Tao đã bảo tao không đòi tiền.\n– Giỏi! Hôm nay mới thấy anh không đòi tiền. Thế thì anh cần gì?\nHắn dõng dạc:\n– Tao muốn làm người lương thiện.\nBá Kiến cười ha hả:\n– Ô tưởng gì! Tôi chỉ cần anh lương thiện cho thiên hạ nhờ.”\n(Nam Cao, Chí Phèo, Ngữ văn 11, tập một, NXB Giáo dục Việt Nam, 2014)\n\nNét nổi bật nhất về nghệ thuật của đoạn trích là gì?`,
    image: null,
    options: [
      "A. Từ ngữ giàu tính tạo hình.",
      "B. Lựa chọn chi tiết đặc sắc.",
      "C. Phân tích tâm lí nhân vật.",
      "D. Ngôn ngữ đối thoại sinh động."
    ],
    correctAnswer: "D",
    explanation: "Đoạn trích chủ yếu là màn đối đáp trực tiếp giữa Chí Phèo và Bá Kiến, khắc họa rõ nét tính cách và vị thế đối lập qua giọng điệu của từng nhân vật (ngôn ngữ đối thoại sinh động)."
  },
  {
    id: 183832,
    type: "multiple_choice",
    content: `Câu 35: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Theo các nhà nghiên cứu, Omicron gắn chặt hơn vào các tế bào và chống lại được một số kháng thể. Mô hình cấu trúc về cách thức Omicron gắn vào tế bào và kháng thể giúp làm rõ phương thức hoạt động của biến thể này, cũng như tạo ra được các kháng thể trung hòa. Các nhà nghiên cứu ví von biến thể Omicron có cấu tạo giống như “hai đôi bàn tay đan vào nhau”. Bằng cách sử dụng các mô hình máy tính để tìm hiểu về protein đột biến trên bề mặt biến thể Omicron, các nhà nghiên cứu tiến hành phân tích được các tương tác phân tử diễn ra khi một đột biến này bám vào một protein bề mặt tế bào được gọi là thụ thể ACE2 - vốn được coi là “cửa ngõ” để virus xâm nhập vào tế bào, nhằm giúp hiểu rõ cách thức các đột biến của Omicron liên kết với nhau để làm lây nhiễm sang các tế bào.”\n(Cổng thông tin điện tử Bộ Y Tế (MOH))\n\nPhong cách ngôn ngữ của đoạn trích là gì?`,
    image: null,
    options: [
      "A. Khoa học.",
      "B. Chính luận.",
      "C. Nghệ thuật.",
      "D. Sinh hoạt."
    ],
    correctAnswer: "A",
    explanation: "Đoạn trích trình bày kết quả nghiên cứu y sinh học về cơ chế xâm nhập của biến thể Omicron với nhiều thuật ngữ chuyên môn (“tế bào”, “kháng thể”, “protein đột biến”, “thụ thể ACE2”) nên thuộc phong cách ngôn ngữ khoa học."
  },
  {
    id: 183833,
    type: "multiple_choice",
    content: `Câu 36: Đọc đoạn trích sau đây và trả lời câu hỏi:\n(1) “Tràn trề trên mặt bàn, chạm cả vào cành quất Lí cố tình để sát vào mâm cỗ cho bữa ăn thêm đẹp, thêm sang, là la liệt bát đĩa ngồn ngộn các món ăn. (2) Ngoài các món thường thấy ở cỗ Tết như gà luộc, giò, chả, nem, măng hầm chân giò, miến nấu lòng gà, xúp lơ xào thịt bò... – món nào cũng mang dấu ấn tài hoa của người chế biến – là các món khác thường như gà quay ướp húng lìu, vịt tần hạt sen, chả chìa, mọc, vây...”\n(Ma Văn Kháng, Mùa lá rụng trong vườn, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2008)\n\nXác định tác dụng của dấu “–” trong câu (2).`,
    image: null,
    options: [
      "A. Đánh dấu lời nói trực tiếp của nhân vật.",
      "B. Để chỉ sự ngang hàng trong quan hệ.",
      "C. Đánh dấu bộ phận chú thích, giải thích.",
      "D. Nối các từ nằm trong một liên danh."
    ],
    correctAnswer: "C",
    explanation: "Cụm từ đặt giữa hai dấu gạch ngang (“món nào cũng mang dấu ấn tài hoa của người chế biến”) bổ sung nhận xét, giải thích cho giá trị của các món ăn ngày Tết."
  },
  {
    id: 183834,
    type: "multiple_choice",
    content: `Câu 37: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Con gặp lại nhân dân như nai về suối cũ\nCỏ đón giêng hai, chim én gặp mùa,\nNhư đứa trẻ thơ đói lòng gặp sữa\nChiếc nôi ngừng bỗng gặp cánh tay đưa.”\n(Chế Lan Viên, Tiếng hát con tàu, Ngữ văn 12, tập một, NXB Giáo dục Việt Nam, 2021)\n\nBiện pháp tu từ nghệ thuật nào được sử dụng trong câu thơ sau: “Con gặp lại nhân dân như nai về suối cũ”?`,
    image: null,
    options: [
      "A. So sánh.",
      "B. Nhân hóa.",
      "C. Đảo ngữ.",
      "D. Hoán dụ."
    ],
    correctAnswer: "A",
    explanation: "Câu thơ sử dụng từ so sánh “như” để đối chiếu niềm vui của nhà thơ khi trở về với nhân dân với hình ảnh “nai về suối cũ”."
  },
  {
    id: 183835,
    type: "multiple_choice",
    content: `Câu 38: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Cô Hiền bên ngoại, chị Đại bên nội là những người đàn bà có đầu óc rất thực tế. Mọi sự mọi việc đều được các bà tính toán trước cả. Và luôn luôn tính đúng vì không có lòng tự ái, sự ganh đua, thói thời thượng chen vô. Không có cả sự lãng mạn hay mộng mơ vớ vẩn. Đã tính là làm, đã làm là không thèm để ý đến những đàm tiếu của thiên hạ. Cô tuyên bố thẳng thừng với tôi: “Một đời tao chưa từng bị ai cám dỗ, kể cả chế độ.”\n(Nguyễn Khải, Một người Hà Nội, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)\n\nĐoạn trích thể hiện tính cách nổi bật nào của nhân vật cô Hiền?`,
    image: null,
    options: [
      "A. Kín đáo, tế nhị.",
      "B. Chăm chỉ, chịu khó.",
      "C. Ngay thẳng, thật thà.",
      "D. Giỏi giang, bản lĩnh."
    ],
    correctAnswer: "D",
    explanation: "Chi tiết “tính toán trước cả” và “luôn luôn tính đúng” cho thấy sự giỏi giang, sắc sảo; còn thái độ bất chấp đàm tiếu và câu tuyên bố không bị ai cám dỗ thể hiện bản lĩnh vững vàng."
  },
  {
    id: 183836,
    type: "multiple_choice",
    content: `Câu 39: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Bà lão khẽ dặng hắng một tiếng, nhẹ nhàng nói với “nàng dâu mới”:\n– Ừ, thôi thì các con đã phải duyên phải kiếp với nhau, u cũng mừng lòng...\nTràng thở đánh phào một cái, ngực nhẹ hẳn đi. Hắn ho khẽ một tiếng, bước từng bước dài ra sân.”\n(Kim Lân, Vợ nhặt, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2014)\n\nCụm từ “thở đánh phào một cái” trong đoạn trích trên thể hiện tâm trạng gì của nhân vật Tràng?`,
    image: null,
    options: [
      "A. Chán nản vì người mẹ đã nói quá nhiều về mình.",
      "B. Buồn bã vì người vợ mới không được như ý mình.",
      "C. Vui mừng vì mẹ đã chấp nhận người vợ của mình.",
      "D. Sợ hãi khi mẹ nói về hoàn cảnh gia đình của mình."
    ],
    correctAnswer: "C",
    explanation: "Sau lời đồng ý và tác thành của bà cụ Tứ, Tràng trút bỏ được nỗi lo âu căng thẳng trước đó và cảm thấy nhẹ nhõm, vui mừng."
  },
  {
    id: 183837,
    type: "multiple_choice",
    content: `Câu 40: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Con sóng dưới lòng sâu\nCon sóng trên mặt nước\nÔi con sóng nhớ bờ\nNgày đêm không ngủ được\nLòng em nhớ đến anh\nCả trong mơ còn thức”\n(Xuân Quỳnh, Sóng, Ngữ văn 12, tập một, NXB Giáo dục Việt Nam, 2021)\n\nNhững trạng thái của “sóng” trong đoạn trích trên thể hiện điều gì dưới đây?`,
    image: null,
    options: [
      "A. Một trái tim rạo rực, khao khát được yêu thương.",
      "B. Nỗi trăn trở của người phụ nữ trong tình yêu.",
      "C. Khát vọng muốn bất tử hóa tình yêu của tác giả.",
      "D. Nỗi nhớ trong tình yêu của người phụ nữ."
    ],
    correctAnswer: "D",
    explanation: "Hình tượng con sóng thao thức ở mọi chiều không gian (“dưới lòng sâu”, “trên mặt nước”) và thời gian (“ngày đêm không ngủ được”) là ẩn dụ cho nỗi nhớ da diết, thường trực của người phụ nữ đang yêu."
  },
  {
    id: 183838,
    type: "multiple_choice",
    content: `Câu 41: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Nhưng bây giờ thì hắn tỉnh. Hắn bâng khuâng như tỉnh dậy sau một cơn say rất dài. Cũng như những người say tỉnh dậy, hắn thấy miệng đắng, lòng mơ hồ buồn. Người thì bủn rủn, chân tay không buồn nhấc. Hay là đói rượu? Nghĩ đến rượu, hắn hơi rùng mình. Ruột gan lại nôn nao lên một tí. Hắn sợ rượu cũng như những người ốm thường sợ cơm. Tiếng chim hót ngoài kia vui vẻ quá! Có tiếng cười nói của những người đi chợ. Anh thuyền chài gõ mái chèo đuổi cá. Những tiếng quen thuộc ấy hôm nào chả có. Nhưng hôm nay hắn mới nghe thấy... Chao ôi là buồn!”\n(Nam Cao, Chí Phèo, Ngữ văn 11, tập một, NXB Giáo dục Việt Nam, 2014)\n\nCâu “Nghĩ đến rượu, hắn hơi rùng mình.” trong đoạn trích đã diễn tả điều gì?`,
    image: null,
    options: [
      "A. “Hắn” bỗng nhiên cảm thấy rượu hôm qua không ngon như mọi khi.",
      "B. Nhân vật “hắn” lo sợ về bệnh tật kéo đến ở tuổi già.",
      "C. Báo hiệu một chuyển biến trong con người nhân vật.",
      "D. Cơn say trước kéo dài khiến “hắn” cảm thấy mệt."
    ],
    correctAnswer: "C",
    explanation: "Từ một kẻ triền miên trong men say, Chí Phèo bỗng rùng mình sợ rượu và bắt đầu lắng nghe được âm thanh cuộc sống đời thường, báo hiệu sự thức tỉnh về nhân tính."
  },
  {
    id: 183839,
    type: "multiple_choice",
    content: `Câu 42: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Bác nhớ miền Nam, nỗi nhớ nhà\nMiền Nam mong Bác, nỗi mong cha.”\n(Tố Hữu, Bác ơi!, Ngữ văn 12, tập một, NXB Giáo dục Việt Nam, 2019)\n\nBiện pháp tu từ nào được sử dụng trong câu thơ trên?`,
    image: null,
    options: [
      "A. Nhân hóa.",
      "B. Hoán dụ.",
      "C. Nói quá.",
      "D. Liệt kê."
    ],
    correctAnswer: "B",
    explanation: "Từ “miền Nam” được dùng để chỉ đồng bào, chiến sĩ đang sống ở miền Nam — đây là biện pháp hoán dụ (lấy vật chứa đựng để gọi vật bị chứa đựng)."
  },
  {
    id: 183840,
    type: "multiple_choice",
    content: `Câu 43: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Em ơi em Đất Nước là máu xương của mình\nPhải biết gắn bó san sẻ\nPhải biết hóa thân cho dáng hình xứ sở\nLàm nên Đất Nước muôn đời...”\n(Nguyễn Khoa Điềm, Đất Nước (trích trường ca Mặt đường khát vọng), Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2014)\n\nGiọng điệu chủ đạo của toàn bộ đoạn trích trên là gì?`,
    image: null,
    options: [
      "A. Ngọt ngào, say đắm.",
      "B. Thiết tha, bồi hồi.",
      "C. Hạnh phúc, tự hào.",
      "D. Lưu luyến, bịn rịn."
    ],
    correctAnswer: "A",
    explanation: "Mở đầu bằng tiếng gọi tâm tình “Em ơi em”, nhà thơ thủ thỉ trò chuyện, giãi bày suy nghĩ sâu sắc về trách nhiệm gắn bó, cống hiến cho Đất Nước bằng giọng thơ ngọt ngào, say đắm."
  },
  {
    id: 82775,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Người đàn bà nhận ra được tôi ngay. Mụ nhấp nhổm xoay mình trên chiếc ghế như bị kiến đốt, và về sau tôi mới sực nghĩ ra, mụ nghĩ rằng tòa án đã bố trí sẵn tôi ngồi phía sau để chuẩn bị làm nhân chứng.\nChị cứ ngồi nguyên đấy! – Đẩu nói với vẻ mặt đầy hào hứng của một con người bảo vệ công lí vừa có thêm người đến tiếp viện, anh chạy sang phòng bên xách một chiếc ghế cho tôi. Bấy giờ, dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi, với mấy vết thương đã lên da non nhưng vẫn để lại dấu vết trên mặt.\nTùy bà! – Đẩu thay đổi cách xưng hô, khoác lên mình cái cung cách bề ngoài của một vị chánh án – chủ trương nguyên tắc của chúng tôi là kêu gọi hòa thuận...\nĐang ngồi cúi gục xuống, người đàn bà bỗng ngẩng lên nhìn thẳng vào chúng tôi, lần lượt từng người một, với một vẻ ban đầu hơi ngơ ngác.\nChị cảm ơn các chú! – Người đàn bà đột nhiên thốt lên bằng một giọng khẩn thiết – Đây là chị nói thành thực, chị cám ơn các chú. Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn... cho nên các chú đâu có hiểu được cái việc của các người làm ăn lam lũ, khó nhọc...\nChỉ mấy lời mào đầu ấy, người đàn bà đã mất hết cái vẻ ngoài khúm núm, sợ sệt. Điệu bộ khác, ngôn ngữ khác.\nCũng phải nói thật, những lời ấy, nhất là đấy lại là lời một người đàn bà khốn khổ, không phải dễ nghe đối với chúng tôi. Dầu mặt hãy còn trẻ, Đẩu cũng là một chánh án huyện. Còn tôi, một người đáng lẽ mụ phải biết ơn...”\n(Nguyễn Minh Châu, Chiếc thuyền ngoài xa, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)\n\nCâu 44: Vì sao tác giả lại nói “dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi”?`,
    image: null,
    options: [
      "A. Đẩu là chánh án của huyện nhưng người kể chuyện ở đây (nhân vật xưng “tôi”) mới thực sự tham gia xét xử vụ án này.",
      "B. Người đàn bà sợ cái uy của nhân vật xưng “tôi” hơn là sự kiểu cách trong lời lẽ của Đẩu – vị chánh án huyện.",
      "C. Người kể chuyện (nhân vật xưng “tôi”) đã chứng kiến và biết rõ sự thật mà người đàn bà đang cố tình muốn giấu.",
      "D. Người đàn bà thấy được phiên tòa đã có đầy đủ các thành viên và đặc biệt là sự xuất hiện của nhân chứng."
    ],
    correctAnswer: "C",
    explanation: "Nhân vật “tôi” là người đã trực tiếp chứng kiến cảnh bạo hành trên bãi biển và bị thương khi can ngăn, nắm giữ sự thật mà người đàn bà vốn cố giấu kín."
  },
  {
    id: 82771,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Người đàn bà nhận ra được tôi ngay. Mụ nhấp nhổm xoay mình trên chiếc ghế như bị kiến đốt, và về sau tôi mới sực nghĩ ra, mụ nghĩ rằng tòa án đã bố trí sẵn tôi ngồi phía sau để chuẩn bị làm nhân chứng.\nChị cứ ngồi nguyên đấy! – Đẩu nói với vẻ mặt đầy hào hứng của một con người bảo vệ công lí vừa có thêm người đến tiếp viện, anh chạy sang phòng bên xách một chiếc ghế cho tôi. Bấy giờ, dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi, với mấy vết thương đã lên da non nhưng vẫn để lại dấu vết trên mặt.\nTùy bà! – Đẩu thay đổi cách xưng hô, khoác lên mình cái cung cách bề ngoài của một vị chánh án – chủ trương nguyên tắc của chúng tôi là kêu gọi hòa thuận...\nĐang ngồi cúi gục xuống, người đàn bà bỗng ngẩng lên nhìn thẳng vào chúng tôi, lần lượt từng người một, với một vẻ ban đầu hơi ngơ ngác.\nChị cảm ơn các chú! – Người đàn bà đột nhiên thốt lên bằng một giọng khẩn thiết – Đây là chị nói thành thực, chị cám ơn các chú. Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn... cho nên các chú đâu có hiểu được cái việc của các người làm ăn lam lũ, khó nhọc...\nChỉ mấy lời mào đầu ấy, người đàn bà đã mất hết cái vẻ ngoài khúm núm, sợ sệt. Điệu bộ khác, ngôn ngữ khác.\nCũng phải nói thật, những lời ấy, nhất là đấy lại là lời một người đàn bà khốn khổ, không phải dễ nghe đối với chúng tôi. Dầu mặt hãy còn trẻ, Đẩu cũng là một chánh án huyện. Còn tôi, một người đáng lẽ mụ phải biết ơn...”\n(Nguyễn Minh Châu, Chiếc thuyền ngoài xa, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)\n\nCâu 45: Đâu là nhận định đúng về hoàn cảnh của “người đàn bà” trong đoạn trích trên?`,
    image: null,
    options: [
      "A. Người phụ nữ vô cùng bất hạnh vì liên tục bị chồng mình đánh đập.",
      "B. Người đàn bà có cuộc sống nghèo khổ, quanh năm làm lụng vất vả.",
      "C. Người đàn bà hạnh phúc vì đã sinh được nhiều đứa con trai thông minh.",
      "D. Người phụ nữ xấu xí và ế chồng nên đã phải chấp nhận sống trên thuyền."
    ],
    correctAnswer: "B",
    explanation: "Căn cứ trực tiếp vào ngữ liệu (“việc của các người làm ăn lam lũ, khó nhọc”, “một người đàn bà khốn khổ”), đoạn trích khắc họa cảnh sống nghèo khổ, vất vả mưu sinh của nhân vật."
  },
  {
    id: 82772,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Người đàn bà nhận ra được tôi ngay. Mụ nhấp nhổm xoay mình trên chiếc ghế như bị kiến đốt, và về sau tôi mới sực nghĩ ra, mụ nghĩ rằng tòa án đã bố trí sẵn tôi ngồi phía sau để chuẩn bị làm nhân chứng.\nChị cứ ngồi nguyên đấy! – Đẩu nói với vẻ mặt đầy hào hứng của một con người bảo vệ công lí vừa có thêm người đến tiếp viện, anh chạy sang phòng bên xách một chiếc ghế cho tôi. Bấy giờ, dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi, với mấy vết thương đã lên da non nhưng vẫn để lại dấu vết trên mặt.\nTùy bà! – Đẩu thay đổi cách xưng hô, khoác lên mình cái cung cách bề ngoài của một vị chánh án – chủ trương nguyên tắc của chúng tôi là kêu gọi hòa thuận...\nĐang ngồi cúi gục xuống, người đàn bà bỗng ngẩng lên nhìn thẳng vào chúng tôi, lần lượt từng người một, với một vẻ ban đầu hơi ngơ ngác.\nChị cảm ơn các chú! – Người đàn bà đột nhiên thốt lên bằng một giọng khẩn thiết – Đây là chị nói thành thực, chị cám ơn các chú. Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn... cho nên các chú đâu có hiểu được cái việc của các người làm ăn lam lũ, khó nhọc...\nChỉ mấy lời mào đầu ấy, người đàn bà đã mất hết cái vẻ ngoài khúm núm, sợ sệt. Điệu bộ khác, ngôn ngữ khác.\nCũng phải nói thật, những lời ấy, nhất là đấy lại là lời một người đàn bà khốn khổ, không phải dễ nghe đối với chúng tôi. Dầu mặt hãy còn trẻ, Đẩu cũng là một chánh án huyện. Còn tôi, một người đáng lẽ mụ phải biết ơn...”\n(Nguyễn Minh Châu, Chiếc thuyền ngoài xa, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)\n\nCâu 46: Đâu là cách giải thích hợp lý cho sự thay đổi thái độ của nhân vật Đẩu?`,
    image: null,
    options: [
      "A. Đẩu cảm thấy chán nản với câu chuyện của người đàn bà nên muốn bà ta nhanh chóng rời đi.",
      "B. Đẩu cảm thấy mình ở vị trí cao hơn nên không cần thiết phải tỏ ra vui vẻ, nồng nhiệt với người đàn bà.",
      "C. Đẩu thấy trong phòng đã có thêm người ủng hộ mình nên không còn lo lắng về người phụ nữ trước mặt.",
      "D. Đẩu muốn dùng cung cách vị chánh án để người đàn bà nhận thức được toàn bộ các vấn đề trong câu chuyện mà họ đã nói."
    ],
    correctAnswer: "D",
    explanation: "Khi người đàn bà từ chối thiện ý ban đầu, Đẩu chuyển sang xưng hô “Tùy bà!” và khoác cung cách nghiêm nghị của chánh án nhằm khiến bà nhận thức được tính nghiêm túc của vấn đề pháp lý và gia đình."
  },
  {
    id: 82773,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Người đàn bà nhận ra được tôi ngay. Mụ nhấp nhổm xoay mình trên chiếc ghế như bị kiến đốt, và về sau tôi mới sực nghĩ ra, mụ nghĩ rằng tòa án đã bố trí sẵn tôi ngồi phía sau để chuẩn bị làm nhân chứng.\nChị cứ ngồi nguyên đấy! – Đẩu nói với vẻ mặt đầy hào hứng của một con người bảo vệ công lí vừa có thêm người đến tiếp viện, anh chạy sang phòng bên xách một chiếc ghế cho tôi. Bấy giờ, dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi, với mấy vết thương đã lên da non nhưng vẫn để lại dấu vết trên mặt.\nTùy bà! – Đẩu thay đổi cách xưng hô, khoác lên mình cái cung cách bề ngoài của một vị chánh án – chủ trương nguyên tắc của chúng tôi là kêu gọi hòa thuận...\nĐang ngồi cúi gục xuống, người đàn bà bỗng ngẩng lên nhìn thẳng vào chúng tôi, lần lượt từng người một, với một vẻ ban đầu hơi ngơ ngác.\nChị cảm ơn các chú! – Người đàn bà đột nhiên thốt lên bằng một giọng khẩn thiết – Đây là chị nói thành thực, chị cám ơn các chú. Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn... cho nên các chú đâu có hiểu được cái việc của các người làm ăn lam lũ, khó nhọc...\nChỉ mấy lời mào đầu ấy, người đàn bà đã mất hết cái vẻ ngoài khúm núm, sợ sệt. Điệu bộ khác, ngôn ngữ khác.\nCũng phải nói thật, những lời ấy, nhất là đấy lại là lời một người đàn bà khốn khổ, không phải dễ nghe đối với chúng tôi. Dầu mặt hãy còn trẻ, Đẩu cũng là một chánh án huyện. Còn tôi, một người đáng lẽ mụ phải biết ơn...”\n(Nguyễn Minh Châu, Chiếc thuyền ngoài xa, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)\n\nCâu 47: Câu nói của người phụ nữ: “Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn...” tương đồng về ý nghĩa với câu nào sau đây?`,
    image: null,
    options: [
      "A. Con người ta muốn sống tốt thì cần có một công việc đàng hoàng.",
      "B. Trong cuộc sống, không thể chủ quan trong việc đánh giá một con người.",
      "C. Cuộc sống có nhiều điều phức tạp, không thể chỉ đánh giá, nhìn nhận một chiều.",
      "D. Người tốt thì thường gặp những trở ngại rất lớn trong việc làm kinh tế."
    ],
    correctAnswer: "C",
    explanation: "Câu nói cho thấy thiện chí và lý thuyết pháp luật đơn thuần chưa đủ để thấu hiểu hết những nghịch lý, phức tạp của đời sống mưu sinh; cần nhìn nhận cuộc sống đa chiều, sâu sắc."
  },
  {
    id: 82774,
    type: "multiple_choice",
    content: `Dựa vào thông tin dưới đây để trả lời câu hỏi:\n“Người đàn bà nhận ra được tôi ngay. Mụ nhấp nhổm xoay mình trên chiếc ghế như bị kiến đốt, và về sau tôi mới sực nghĩ ra, mụ nghĩ rằng tòa án đã bố trí sẵn tôi ngồi phía sau để chuẩn bị làm nhân chứng.\nChị cứ ngồi nguyên đấy! – Đẩu nói với vẻ mặt đầy hào hứng của một con người bảo vệ công lí vừa có thêm người đến tiếp viện, anh chạy sang phòng bên xách một chiếc ghế cho tôi. Bấy giờ, dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi, với mấy vết thương đã lên da non nhưng vẫn để lại dấu vết trên mặt.\nTùy bà! – Đẩu thay đổi cách xưng hô, khoác lên mình cái cung cách bề ngoài của một vị chánh án – chủ trương nguyên tắc của chúng tôi là kêu gọi hòa thuận...\nĐang ngồi cúi gục xuống, người đàn bà bỗng ngẩng lên nhìn thẳng vào chúng tôi, lần lượt từng người một, với một vẻ ban đầu hơi ngơ ngác.\nChị cảm ơn các chú! – Người đàn bà đột nhiên thốt lên bằng một giọng khẩn thiết – Đây là chị nói thành thực, chị cám ơn các chú. Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn... cho nên các chú đâu có hiểu được cái việc của các người làm ăn lam lũ, khó nhọc...\nChỉ mấy lời mào đầu ấy, người đàn bà đã mất hết cái vẻ ngoài khúm núm, sợ sệt. Điệu bộ khác, ngôn ngữ khác.\nCũng phải nói thật, những lời ấy, nhất là đấy lại là lời một người đàn bà khốn khổ, không phải dễ nghe đối với chúng tôi. Dầu mặt hãy còn trẻ, Đẩu cũng là một chánh án huyện. Còn tôi, một người đáng lẽ mụ phải biết ơn...”\n(Nguyễn Minh Châu, Chiếc thuyền ngoài xa, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)\n\nCâu 48: Thái độ, tâm trạng của nhân vật “tôi” trước cách cư xử và lời nói của người đàn bà hàng chài trong đoạn trích là gì?`,
    image: null,
    options: [
      "A. Sung sướng vì mình đã bảo vệ được công lý khi làm chứng cho người đàn bà.",
      "B. Cảm thấy khó hiểu trong cách hành xử và suy nghĩ của người đàn bà.",
      "C. Khó chịu khi thấy người đàn bà dùng thái độ bề trên để nói chuyện với mình.",
      "D. Bức bối vì không thể đánh trả người đã làm cho mình bị thương trên mặt."
    ],
    correctAnswer: "B",
    explanation: "Nhân vật “tôi” nhận thấy những lời của người đàn bà “không phải dễ nghe”, đồng thời quan sát sự biến đổi đột ngột từ vẻ sợ sệt sang chủ động, thể hiện sự ngỡ ngàng, khó hiểu trước cách hành xử của bà."
  },
  {
    id: 271849,
    type: "multiple_choice",
    content: `Câu 49: Đọc đoạn trích sau và trả lời câu hỏi:\n“Hà Giang là địa đầu của Tổ quốc, phía đông giáp tỉnh Cao Bằng, phía tây giáp tỉnh Yên Bái và Lào Cai, phía nam giáp tỉnh Tuyên Quang, phía bắc giáp Trung Quốc. Các cung đường Hà Giang quanh co, cheo leo vốn đầy thách thức cho người lái xe. Thế nhưng khi bạn phóng tầm mắt xung quanh, căng thẳng nhường lại chỗ cho cảm giác thư thái khi chiêm ngưỡng vẻ đẹp hùng vĩ của miền núi phía Bắc. Khí hậu Hà Giang lạnh rõ rệt so với vùng thấp và trung du kế cận. Nhiệt độ trung bình năm khoảng 21-23 độ C. Nét nổi bật của khí hậu là độ ẩm cao trong năm, mưa nhiều và kéo dài. Bạn có thể du lịch Hà Giang vào bất kỳ mùa nào trong năm. Người ta thường đến Hà Giang vào mùa thu lúa chín vàng. Thời gian đẹp nhất là tháng 10, 11 và 12, khi hoa tam giác mạch hay những cánh đồng cải khoe sắc. Còn mùa xuân, hoa mơ, hoa mận nở trắng rừng khiến bạn như đang bồng bềnh trên mây.”\n(Theo https://vnexpress.net)\n\nÝ nào sau đây KHÔNG nói về đặc điểm địa lý của tỉnh Hà Giang?`,
    image: null,
    options: [
      "A. Phía Đông giáp tỉnh Cao Bằng, phía tây giáp tỉnh Yên Bái và Lào Cai.",
      "B. Tạo cảm giác thư thái cho du khách khi chiêm ngưỡng vẻ đẹp Hà Giang.",
      "C. Hà Giang là một tỉnh có độ ẩm cao suốt năm, mưa nhiều và thường kéo dài.",
      "D. Có khí hậu Hà Giang lạnh rõ rệt so với các vùng đồng bằng, trung du kế cận."
    ],
    correctAnswer: "B",
    explanation: "Các phương án A, C, D đều nêu vị trí tiếp giáp và đặc điểm khí hậu thuộc về địa lý tự nhiên của Hà Giang; còn phương án B là cảm xúc chủ quan của khách du lịch."
  },
  {
    id: 266087,
    type: "multiple_choice",
    content: `Câu 50: Đọc đoạn trích sau đây và trả lời câu hỏi:\n“Trong tâm hồn người con gái nhỏ bé, tình yêu và niềm tin mãnh liệt vào cuộc sống, cái sợi chỉ xanh óng ánh ấy, bao nhiêu bom đạn giội xuống cũng không hề đứt, không thể nào tàn phá nổi ư?”\n\nXác định các biện pháp tu từ có trong câu văn trên.`,
    image: null,
    options: [
      "A. Ẩn dụ, câu hỏi tu từ.",
      "B. Hoán dụ, câu hỏi tu từ.",
      "C. Ẩn dụ, so sánh.",
      "D. Hoán dụ, so sánh."
    ],
    correctAnswer: "A",
    explanation: "Hình ảnh “cái sợi chỉ xanh óng ánh ấy” là ẩn dụ cho tình yêu và niềm tin mãnh liệt vào cuộc sống; kết thúc câu bằng dấu chấm hỏi (“... không thể nào tàn phá nổi ư?”) nhằm khẳng định sức sống bất diệt của niềm tin ấy là câu hỏi tu từ."
  }
],
    

    
    

};
