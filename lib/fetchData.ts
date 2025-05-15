import { m } from "framer-motion";

export const HospitalName = 'DIBRIGARH CANCER CENTRE';
export const HName = '/Dibrugarh';
export const HomePageAccess = true;
export const AboutUsAccess = true;
export const FacilitiesAccess = true;
export const HospitalsAccess = true;
export const NewsAndEventsAccess = true;
export const ContactUsAccess = true;
export const AcademicsAccess = false;
export const VideosAccess = false;
export const SocialInfraAccess = true;
export const UpdatesAccess = false;

export const HomeContent = {
  "_id": "67d5201b92ae82369ef8f29d",
  "id": 1,
  "heading": "South Asia's Largest Cancer Care Networks",
  "description": "Assam Cancer Care Foundation is a joint partnership between the Government of Assam and the Tata Trusts. It was set up in December 2017 to create a first-of-its-kind, three-level cancer grid in the state of Assam. The distributed care model was conceptualized by the Trusts and the Government of Assam to create patient-centric cancer institutions to deliver standardized and affordable care closer to patients' homes. With a plan to set up 17 cancer hospitals in the state, it is the largest cancer care network in South Asia. Of the 17 hospitals, Hon’ble Prime Minister Shri Narendra Modi inaugurated seven centres at Dibrugarh, Barpeta, Tezpur, Lakhimpur, Jorhat, Kokrajhar, and Darrang; and laid the foundation stone for seven new hospitals at Nagaon, Goalpara, Nalbari, Golaghat, Tinsukia, Sivasagar, and Dhubri on April 28, 2022. Construction work for the Diphu centre is currently in progress. In March 2024, the Guwahati and Silchar centres were successfully inaugurated.",
  "HospitalID": 1,
  "updatedAt": "2025-03-18T08:51:38.302Z"
}



export const ImageSliderData = [
  {
    "_id": "6711",
    "id": 1,
    "HospitalID": 1,
    "name": "Slider Image -1",
    "path": "/Dibrugarh/slider/1.jpg",
    "active": "Y"
  },
  {
    "_id": "6712",
    "id": 2,
    "HospitalID": 1,
    "name": "Slider Image 0",
    "path": "/Dibrugarh/slider/2.jpg",
    "active": "Y"
  },
  {
    "_id": "6713",
    "id": 3,
    "HospitalID": 1,
    "name": "Slider Image 1",
    "path": "/Dibrugarh/slider/3.jpg",
    "active": "Y"
  },
  {
    "_id": "6714",
    "id": 4,
    "HospitalID": 1,
    "name": "Slider Image 2",
    "path": "/Dibrugarh/slider/4.jpg",
    "active": "Y"
  },
  {
    "_id": "6715",
    "id": 5,
    "HospitalID": 1,
    "name": "Slider Image 4",
    "path": "/Dibrugarh/slider/5.jpg",
    "active": "Y"
  },
  {
    "_id": "6716",
    "id": 6,
    "HospitalID": 1,
    "name": "Slider Image 5",
    "path": "/Dibrugarh/slider/6.jpg",
    "active": "Y"
  },
  {
    "_id": "6717",
    "id": 7,
    "HospitalID": 1,
    "name": "Slider Image 6",
    "path": "/Dibrugarh/slider/7.jpg",
    "active": "Y"
  }
  ,
  {
    "_id": "6718",
    "id": 8,
    "HospitalID": 1,
    "name": "Slider Image 7",
    "path": "/Dibrugarh/slider/8.jpg",
    "active": "Y"
  },
  {
    "_id": "6719",
    "id": 9,
    "HospitalID": 1,
    "name": "Slider Image 9",
    "path": "/Dibrugarh/slider/9.jpg",
    "active": "Y"
  }
]

// ✅ Fetch Doctors
export async function fetchDoctors2(payload = { ccode: "SCI" }) {
  // ⚠️ Bypass SSL check (only for local development)
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://barpetacancercentre.org/api/get-doctor-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ccode: "Dibrugarh" }),
      next: { revalidate: 900 },
      // cache: "no-store",
    });

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

// ✅ Fetch Accomplishments
export async function fetchAccomplishments2() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://barpetacancercentre.org/api/get-counts-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ccode: "Dibrugarh" }),
      next: { revalidate: 10 },
      // cache: "no-store",
    });

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

export const FetchFacilitiesData = [{
  "_id": "67edf9f274c62b1f3d0231c5",
  "id": 29,
  "HospitalID": 8,
  "title": "Medical Oncology",
  "short_description": "Medical Oncology is a branch of medicine which specializes in the diagnosis and treatment of cancer. It is a super-specialty branch where the Medical Oncologist treat cancer using medication including chemotherapy, immunotherapy, and targeted therapy. The centre has a dedicated daycare setup with modern Chemo Day care wards.",
    "long_description": "Medical Oncology is a branch of medicine which specializes in the diagnosis and treatment of cancer. It is a super-specialty branch where the Medical Oncologist treat cancer using medication including chemotherapy, immunotherapy, and targeted therapy. The centre has a dedicated daycare setup with modern Chemo Day care wards.",
    "read_more": true,
    "read_more2": false,
  "description": "Medical Oncology is a branch of medicine which specializes in the diagnosis and treatment of cancer. It is a super-specialty branch where the Medical Oncologist treat cancer using medication including chemotherapy, immunotherapy, and targeted therapy. The centre has a dedicated daycare setup with modern Chemo Day care wards.",
  "path": "Dibrugarh/Facilities/1.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae54",
  "color2": "#ced0d51"
},
{
  "_id": "67edf9f274c62b1f3d0231d6",
  "id": 46,
  "HospitalID": 8,
  "title": "Radiation Oncology",
  "short_description": "Radiation oncology is a medical specialty that involves the controlled use of radiation to treat cancer. Radiation Oncologists treat cancer using radiation therapy, through high-energy x-rays or other particles to destroy cancer cells. The centre is equipped with state-of-the-art modern LINAC machines and Brachytherapy..",
    "long_description": "Radiation oncology is a medical specialty that involves the controlled use of radiation to treat cancer. Radiation Oncologists treat cancer using radiation therapy, through high-energy x-rays or other particles to destroy cancer cells. The centre is equipped with state-of-the-art modern LINAC machines and Brachytherapy.",
    "read_more": true,
    "read_more2": false,
  "description": "Radiation oncology is a medical specialty that involves the controlled use of radiation to treat cancer. Radiation Oncologists treat cancer using radiation therapy, through high-energy x-rays or other particles to destroy cancer cells. The centre is equipped with state-of-the-art modern LINAC machines and Brachytherapy.",
  "path": "Dibrugarh/Facilities/2.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae55",
  "color2": "#ced0d52"
},{
  "_id": "67edf9f274c62b1f3d0231db",
  "id": 51,
  "HospitalID": 8,
  "title": "Surgical Oncology",
  "short_description": "Surgical Oncology is the field of cancer care that focuses on surgery to diagnose, stage and treat cancer, and to manage some cancer-related symptoms. A Major OT and a Minor OT setup is present at Dibrugarh Cancer Centre.",
    "long_description": "Surgical Oncology is the field of cancer care that focuses on surgery to diagnose, stage and treat cancer, and to manage some cancer-related symptoms. A Major OT and a Minor OT setup is present at Dibrugarh Cancer Centre.",
    "read_more": true,
    "read_more2": false,
  "description": "Surgical Oncology is the field of cancer care that focuses on surgery to diagnose, stage and treat cancer, and to manage some cancer-related symptoms. A Major OT and a Minor OT setup is present at Dibrugarh Cancer Centre.",
  "path": "Dibrugarh/Facilities/3.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae56",
  "color2": "#ced0d53"
},
{
  "_id": "67edf9f274c62b1f3d0231fa",
  "id": 82,
  "HospitalID": 8,
  "title": "Palliative Medicine",
  "short_description": "Palliative Care is an approach that improves the quality of life of patients (adults and children) and their families who are facing problems associated with complications of cancer. The Tezpur Palliative Care setup is different from hospice setup with curative options.",
    "long_description": "Palliative Care is an approach that improves the quality of life of patients (adults and children) and their families who are facing problems associated with complications of cancer. The Tezpur Palliative Care setup is different from hospice setup with curative options.",
    "read_more": true,
    "read_more2": false,
  "description": "Palliative Care is an approach that improves the quality of life of patients (adults and children) and their families who are facing problems associated with complications of cancer. The Tezpur Palliative Care setup is different from hospice setup with curative options.",
  "path": "Dibrugarh/Facilities/4.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae57",
  "color2": "#ced0d54"
},{
  "_id": "67edf9f274c62b1f3d0231b3",
  "id": 11,
  "HospitalID": 8,
  "title": "Nuclear Medicine",
  "short_description": "Nuclear medicine is a specialized area of radiology that uses very small amounts of radioactive materials, or radiopharmaceuticals, to examine organ function and structure. This branch of radiology is often used to help diagnose and treat abnormalities very early in the progression of a disease. PET CT is available at Dibrugarh Cancer Centre.",
    "long_description": "Nuclear medicine is a specialized area of radiology that uses very small amounts of radioactive materials, or radiopharmaceuticals, to examine organ function and structure. This branch of radiology is often used to help diagnose and treat abnormalities very early in the progression of a disease. PET CT is available at Dibrugarh Cancer Centre.",
    "read_more": true,
    "read_more2": false,
  "description": "Nuclear medicine is a specialized area of radiology that uses very small amounts of radioactive materials, or radiopharmaceuticals, to examine organ function and structure. This branch of radiology is often used to help diagnose and treat abnormalities very early in the progression of a disease. PET CT is available at Dibrugarh Cancer Centre.",
  "path": "Dibrugarh/Facilities/5.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae58",
  "color2": "#ced0d55"
},
{
  "_id": "67edf9f274c62b1f3d0231af",
  "id": 7,
  "HospitalID": 8,
  "title": "Radiology",
  "short_description": "Radiology is the branch of medicine that makes diagnostic images of anatomic structures using electromagnetic radiation or sound waves and that treats disease using radioactive compounds. Radiological imaging techniques include x-rays, CT scans, MRIs, Mammography, ultrasonograms, etc.",
    "long_description": "Radiology is the branch of medicine that makes diagnostic images of anatomic structures using electromagnetic radiation or sound waves and that treats disease using radioactive compounds. Radiological imaging techniques include x-rays, CT scans, MRIs, Mammography, ultrasonograms, etc.",
    "read_more": true,
    "read_more2": false,
  "description": "Radiology is the branch of medicine that makes diagnostic images of anatomic structures using electromagnetic radiation or sound waves and that treats disease using radioactive compounds. Radiological imaging techniques include x-rays, CT scans, MRIs, Mammography, ultrasonograms, etc.",
  "path": "Dibrugarh/Facilities/6.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae59",
  "color2": "#ced0d56"
},

{
  "_id": "67edf9f274c62b1f3d0231d7",
  "id": 47,
  "HospitalID": 8,
  "title": "Critical care (ICU)",
  "short_description": "Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially trained health care providers gives you 24-hour care. This includes using machines to constantly monitor your vital signs. We are having ICU and HDU set up at the Dibrugarh to take care of Cancer patients who need ICU care.",
    "long_description": "Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially trained health care providers gives you 24-hour care. This includes using machines to constantly monitor your vital signs. We are having ICU and HDU set up at the Dibrugarh to take care of Cancer patients who need ICU care.",
    "read_more": true,
    "read_more2": false,
  "description": "Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially trained health care providers gives you 24-hour care. This includes using machines to constantly monitor your vital signs. We are having ICU and HDU set up at the Dibrugarh to take care of Cancer patients who need ICU care.",
  "path": "Dibrugarh/Facilities/7.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae60",
  "color2": "#ced0d57"
},
{
  "_id": "67edf9f274c62b1f3d0231eb",
  "id": 67,
  "HospitalID": 8,
  "title": "Anesthesiology",
  "short_description": "It is the medical specialty concerned with the total perioperative care of patients before, during and after surgery/procedure. It involves use of anesthesia to safely support a patient's vital functions through out the perioperative period. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine. We have a full-fledged Anesthesia department at Dibrugarh",
    "long_description": "It is the medical specialty concerned with the total perioperative care of patients before, during and after surgery/procedure. It involves use of anesthesia to safely support a patient's vital functions through out the perioperative period. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine. We have a full-fledged Anesthesia department at Dibrugarh",
    "read_more": true,
    "read_more2": false,
  "description": "It is the medical specialty concerned with the total perioperative care of patients before, during and after surgery/procedure. It involves use of anesthesia to safely support a patient's vital functions through out the perioperative period. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine. We have a full-fledged Anesthesia department at Dibrugarh",
  "path": "Dibrugarh/Facilities/8.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae61",
  "color2": "#ced0d58"
},
{
  "_id": "67edf9f274c62b1f3d0231ee",
  "id": 70,
  "HospitalID": 8,
  "title": "Blood Bank",
  "short_description": "The Dibrugarh Blood Bank is an advanced unit for storing and preserving blood for later use in blood transfusion.",
    "long_description": "The Dibrugarh Blood Bank is an advanced unit for storing and preserving blood for later use in blood transfusion.",
    "read_more": true,
    "read_more2": false,
  "description": "The Dibrugarh Blood Bank is an advanced unit for storing and preserving blood for later use in blood transfusion.",
  "path": "Dibrugarh/Facilities/9.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae62",
  "color2": "#ced0d59"
},

{
  "_id": "67edf9f274c62b1f3d0231f6",
  "id": 78,
  "HospitalID": 8,
  "title": "Emergency Medicine",
  "short_description": "Emergency medicine is available at the centre for our existing cancer patients.",
    "long_description": "Emergency medicine is available at the centre for our existing cancer patients.",
    "read_more": true,
    "read_more2": false,
  "description": "Emergency medicine is available at the centre for our existing cancer patients.",
  "path": "Dibrugarh/Facilities/10.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae63",
  "color2": "#ced0d60"
},

{
  "_id": "67edf9f274c62b1f3d0231ec",
  "id": 68,
  "HospitalID": 8,
  "title": "Endoscopy Services",
  "short_description": "The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ. Most commonly we do endoscopy to examine the gastrointestinal tract.",
    "long_description": "The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ. Most commonly we do endoscopy to examine the gastrointestinal tract.",
    "read_more": true,
    "read_more2": false,
  "description": "The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ. Most commonly we do endoscopy to examine the gastrointestinal tract.",
  "path": "Dibrugarh/Facilities/11.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae64",
  "color2": "#ced0d61"
},
// {
//   "_id": "67edf9f274c62b1f3d0231dc",
//   "id": 52,
//   "HospitalID": 8,
//   "title": "Tele Health Services – Tele-radiology, Virtual Tumour Board (VTB), DiNC",
//   "short_description": "The telehealth services consist of our central hub at Guwahati, which is called DiNC (Digital Nerve center) and all our Hospitals have Tele-radiology and Virtual Tumour Board (VTB) services.",
//     "long_description": "The telehealth services consist of our central hub at Guwahati, which is called DiNC (Digital Nerve center) and all our Hospitals have Tele-radiology and Virtual Tumour Board (VTB) services.",
//     "read_more": true,
//     "read_more2": false,
//   "description": "The telehealth services consist of our central hub at Guwahati, which is called DiNC (Digital Nerve center) and all our Hospitals have Tele-radiology and Virtual Tumour Board (VTB) services.",
//   "path": "Dibrugarh/Facilities/13.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae66",
//   "color2": "#ced0d63"
// },

{
  "_id": "67edf9f274c62b1f3d0231e4",
  "id": 60,
  "HospitalID": 8,
  "title": "Ambulance Service",
  "short_description": "Ambulance service is available.",
    "long_description": "Ambulance service is available.",
    "read_more": true,
    "read_more2": false,
  "description": "Ambulance service is available.",
  "path": "Dibrugarh/Facilities/14.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae67",
  "color2": "#ced0d64"
}]

export const FetchHospitalsData = [
  {
    "_id": "67de3bd06487342f61ecdfe1",
    "id": 1,
    "name": "STATE CANCER INSTITUTE GUWAHATI",
    "short_name": "SCI",
    "domain": "https://cancercareinstituteguwahati.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.1347530850453!2d91.76288917486926!3d26.159740542044343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a590073ceb703%3A0x13cae1a490750ee1!2sState%20Cancer%20Institute%2CGuwahati%20Assam!5e0!3m2!1sen!2sin!4v1741872609450!5m2!1sen!2sin",
    "PhoneNumber": "+91 9085202020",
    "WhatsAppNumber": "94356 47725",
    "Address": "3rd Floor, V.K Trade Centre, Opp DownTown Hospital, G S Road, Guwahati, Assam PIN–781022",
    "Facebook": "https://www.facebook.com/CancerHospitalGMCH/",
    "Twitter": "https://x.com/gmcsci",
    "Insta": "https://www.instagram.com/explore/locations/1242067485951109/assam-state-cancer-institute/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/SCI/logo/logo.png"
},
  {
    "_id": "67de3bd06487342f61ecdfe3",
    "id": 3,
    "name": "BARPETA CANCER CENTRE",
    "short_name": "Barpeta",
    "domain": "https://barpetacancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7152.158202780259!2d90.97631346977539!3d26.32393799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37599dfa07ce4509%3A0xe74899e5b2d34f24!2sBarpeta%20Cancer%20Centre!5e0!3m2!1sen!2sin!4v1659002675390!5m2!1sen!2sin",
    "PhoneNumber": "+91 6026332174",
    "WhatsAppNumber": "94356 47725",
    "Address": "FAAMCH Campus ,Jania Road , Joti Gaon , Barpeta(Assam). Pin 781301 .",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Barpeta/logo/logo.png"
   },

  // {
  //   "_id": "67de3bd06487342f61ecdfe8",
  //   "id": 8,
  //   "name": "DIBRUGARH CANCER CENTRE",
  // "short_name": "Dibrugarh",
  //   "domain": "https://dibrugarhcancercentre.org/",
  //   "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14158.20432243162!2d94.946242!3d27.483232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374099f9a770c52d%3A0xcecf8c7af5f57e89!2sDibrugarh%20Cancer%20Centre!5e0!3m2!1sen!2sin!4v1742616826161!5m2!1sen!2sin",
  //   "PhoneNumber": "91 6026332165",
  //   "WhatsAppNumber": "94356 47725",
  //   "Address": "Dibrugarh Cancer Centre, Near Namghar, Assam Medical College Campus, Dibrugarh, Assam, 786002.",
  //   "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
  //   "Twitter": "https://x.com/CareAssam",
  //   "Insta": "https://www.instagram.com/careassam/",
  //   "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
  //   "Logo": "/Dibrugarh/logo/logo.png"
  // },

  {
    "_id": "67de3bd06487342f61ecdfe4",
    "id": 4,
    "name": "DARRANG CANCER CENTRE",
    "short_name": "Darrang",
    "domain": "https://darrangcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28580.924975775728!2d92.038973!3d26.435878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375b1d56bc8e4d1f%3A0xdad0a9647179e4ff!2sAssam%20cancer%20care%2C%20Darrang%2C%20Mangaldoi!5e0!3m2!1sen!2sin!4v1742616576781!5m2!1sen!2sin",
    "PhoneNumber": "+91 6026332202",
    "WhatsAppNumber": "94356 47725",
    "Address": "Darrang Cancer Centre, Behind Mangaldai Civil Hospital, Baghpari Chapori, Mangaldoi, Darrang, Assam, 784125",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Darrang/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe9",
    "id": 9,
    "name": "JORHAT CANCER CENTRE",
    "short_name": "Jorhat",
    "domain": "https://jorhatcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228034.79786141418!2d94.197948!3d26.742981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746c31f3536f399%3A0x653eb08956568d34!2sJorhat%20Cancer%20Centre%20ACCF!5e0!3m2!1sen!2sin!4v1742616856683!5m2!1sen!2sin",
    "PhoneNumber": "91 6026332209",
    "WhatsAppNumber": "94356 47725",
    "Address": "Jorhat Cancer Centre, C/o Jorhat Medical College, Jail Road, Jorhat, Jorhat, Assam, 785001",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Jorhat/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe6",
    "id": 6,
    "name": "KOKRAJHAR CANCER CENTRE",
    "short_name": "Kokrajhar",
    "domain": "https://kokrajharcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828739.9773294877!2d90.280884!3d26.463536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37588b6b0e849949%3A0xd965f2e851130df7!2sKokrajhar%20Cancer%20Care%20Hospital!5e0!3m2!1sen!2sin!4v1742616785038!5m2!1sen!2sin",
    "PhoneNumber": 9395891501,
    "WhatsAppNumber": "94356 47725",
    "Address": "Kokrajhar Cancer Centre, Near Kokrajhar Medical College & Hospital , Besorgaon, P.O : Rangalikhata -II, District : Kokrajhar ,BTR, Assam, Pin:783370",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Kokrajhar/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe2",
    "id": 2,
    "name": "LAKHIMPUR CANCER CENTRE",
    "short_name": "Lakhimpur",
    "domain": "https://lakhimpurcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14527113.716549069!2d94.09987!3d27.261234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374137719ce40f01%3A0x7100ad598a1ca96c!2sLakhimpur%20Cancer%20Centre!5e0!3m2!1sen!2sin!4v1741931783298!5m2!1sen!2sin",
    "PhoneNumber": "+91 6026332184",
    "WhatsAppNumber": "94356 47725",
    "Address": "Lakhimpur Cancer Centre, Opposite St. Marrys High School, Nakari, Saboti, North Lakhimpur, Lakhimpur, Assam, 787001",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Lakhimpur/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe5",
    "id": 5,
    "name": "TEZPUR CANCER CENTRE",
    "short_name": "Tezpur",
    "domain": "https://tezpurcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d912667.0492247979!2d92.662631!3d26.677103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744c5c3e215dd71%3A0x4d4a39d59d0d40cf!2sTezpur%20cancer%20centre%20ACCF!5e0!3m2!1sen!2sin!4v1742616748044!5m2!1sen!2sin",
    "PhoneNumber": "+91 6026332180",
    "WhatsAppNumber": "94356 47725",
    "Address": "Tezpur Cancer Centre, Opposite Chandranath Sarma H.S School, Near Tezpur Medical College and Hospital, Geruabari,Bihaguri, Sonitpur, Assam, 784153",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Tezpur/logo/logo.png"
  },

  // {
  //     "_id": "67de3bd06487342f61ecdfe7",
  //     "id": 7,
  //     "name": "SILCHAR CANCER CENTRE",
  //      "short_name": "Silchar",
  //     "WhatsAppNumber": "94356 47725",
  //     "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
  //     "Twitter": "https://x.com/CareAssam",
  //     "Insta": "https://www.instagram.com/careassam/",
  //     "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
  //     "Logo": "/Silchar/logo/logo.png"
  // },
]

export const FetchAboutUs = [
  {
    "_id": "67e008c4738919e55f45e3ef",
    "HospitalID": 1,
    "title": "Who we are",
    "short_description": "Dibrugarh Cancer Centre – a unit of Assam Cancer Care Foundation (ACCF) - is located adjacent to Assam Medical College and Hospital (AMCH) at Dibrugarh. With state-of-the-art infrastructure, the 183-bedded centre is equipped with advanced technology. The unit has a team of experienced Oncologists from reputed medical institutes and oncology-trained nurses to ensure best of treatment and care.",
    "read_more2": false,
    "description2": "Dibrugarh Cancer Centre – a unit of Assam Cancer Care Foundation (ACCF) - is located adjacent to Assam Medical College and Hospital (AMCH) at Dibrugarh. With state-of-the-art infrastructure, the 183-bedded centre is equipped with advanced technology. The unit has a team of experienced Oncologists from reputed medical institutes and oncology-trained nurses to ensure best of treatment and care.",
    "description": "Dibrugarh Cancer Centre – a unit of Assam Cancer Care Foundation (ACCF) - is located adjacent to Assam Medical College and Hospital (AMCH) at Dibrugarh. With state-of-the-art infrastructure, the 183-bedded centre is equipped with advanced technology. The unit has a team of experienced Oncologists from reputed medical institutes and oncology-trained nurses to ensure best of treatment and care.",
    "active": "Y",
    "path": "Dibrugarh/about/whoWeAre.jpg"
  },
  {
    "_id": "67f1623946886839f4f9b661",
    "HospitalID": 1,
    "title": "Key facilities",
    "short_description": "Radiation therapy (LiNAC) Surgical Oncology, Chemotherapy, PET Scan, MRI, CT Scan, Mammography, Critical Care, Blood Bank, X-Ray, Palliative Care, Tumour Board etc. supported with advanced laboratory. The centralised helpdesk - DiNC (Digital Nerve Centre) connects the centre to the network of ACCF units in real time, for delivery of virtual care through effective and efficient communication. Appointments and cancer related queries can be done from the comfort of home through the helpdesk.",
    "read_more2": false,
    "description": "Radiation therapy (LiNAC) Surgical Oncology, Chemotherapy, PET Scan, MRI, CT Scan, Mammography, Critical Care, Blood Bank, X-Ray, Palliative Care, Tumour Board etc. supported with advanced laboratory. The centralised helpdesk - DiNC (Digital Nerve Centre) connects the centre to the network of ACCF units in real time, for delivery of virtual care through effective and efficient communication. Appointments and cancer related queries can be done from the comfort of home through the helpdesk.",
    "active": "Y",
    "path": "Dibrugarh/about/keyfacilities.jpg"
  },
  {
    "_id": "67f163b746886839f4f9b662",
    "HospitalID": 1,
    "title": "How does the centre help?",
    "short_description": "Dibrugarh Cancer Centre is strategically located to cater to the needs of cancer patients in Dibrugarh, its neighbouring districts, and adjacent states. Patients from neighbouring countries can also avail the services. The location of the centre has helped in reducing financial and emotional burdens of the local population, who otherwise would have travelled to state headquarters for treatment. The centre offers cashless treatment for patients under State Government scheme –  Central Government scheme – PMJAY (Ayushman Bharat Pradhan Mantri Jan Arogya Yojana) and ESIC, etc.",
    "read_more2": false,
    "description": "Dibrugarh Cancer Centre is strategically located to cater to the needs of cancer patients in Dibrugarh, its neighbouring districts, and adjacent states. Patients from neighbouring countries can also avail the services. The location of the centre has helped in reducing financial and emotional burdens of the local population, who otherwise would have travelled to state headquarters for treatment. The centre offers cashless treatment for patients under State Government scheme –  Central Government scheme – PMJAY (Ayushman Bharat Pradhan Mantri Jan Arogya Yojana) and ESIC, etc.",
    "active": "Y",
    "path": "Dibrugarh/about/centre_help.jpg"
  }
]

// ✅ Fetch News & Events
export async function fetchNewsAndEvents2() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://barpetacancercentre.org/api/get-news-events-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ccode: "Dibrugarh" }),
      next: { revalidate: 900 },
      // cache: "no-store",
    });

    const data = await response.json();
    console.log('Trying to fetch news from barpeta server :', data);
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

export const FetchHospitalDetails = {
  "_id": "67de3bd06487342f61ecdfe8",
  "id": 8,
  "name": "DIBRUGARH CANCER CENTRE",
  "short_name": "Dibrugarh",
  "domain": "https://dibrugarhcancercentre.org/",
  "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14158.20432243162!2d94.946242!3d27.483232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374099f9a770c52d%3A0xcecf8c7af5f57e89!2sDibrugarh%20Cancer%20Centre!5e0!3m2!1sen!2sin!4v1742616826161!5m2!1sen!2sin",
  "PhoneNumber": "18003454325",
  "WhatsAppNumber": "94356 47725",
  "Address": "Dibrugarh Cancer Centre, Near Namghar, Assam Medical College Campus, Dibrugarh, Assam, 786002.",
  "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
  "Twitter": "https://x.com/CareAssam",
  "Insta": "https://www.instagram.com/careassam/",
  "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
  "Logo": "/Dibrugarh/logo/logo.png"
}

export const FetchPartners = [{
  "id": 1,
  "partner_name": "Numaligarh Refinery Ltd",
  "partner_image": "/Partners/nrl-logo.jpg",
  "path": "https://www.nrl.co.in/"
},
{
  "id": 2,
  "partner_name": "Bharat Petroleum Corporation Ltd",
  "partner_image": "/Partners/BPCL-Logo.jpg",
  "path": "https://www.bharatpetroleum.in/"
},
{
  "id": 3,
  "partner_name": "Indian Oil Corporation Ltd",
  "partner_image": "/Partners/Indian_Oil_Logo.svg.png",
  "path": "https://iocl.com/"
},
{
  "id": 4,
  "partner_name": "Pfizer",
  "partner_image": "/Partners/Pfizer.png",
  "path": "https://www.pfizer.com/"
},
{
  "id": 5,
  "partner_name": "Induslnd Bank",
  "partner_image": "/Partners/indus3.png",
  "path": "https://www.indusind.com/"
},
{
  "id": 6,
  "partner_name": "D-Mart",
  "partner_image": "/Partners/DMart.png",
  "path": "https://www.dmartindia.com/"
},
{
  "id": 7,
  "partner_name": "Indus Towers",
  "partner_image": "/Partners/indus-towers.png",
  "path": "https://www.industowers.com/"
},
{
  "id": 8,
  "partner_name": "LIC Housing Finance Ltd",
  "partner_image": "/Partners/LIC_Housing_Finance_logo.png",
  "path": "https://www.lichousing.com/"
},
{
  "id": 9,
  "partner_name": "Mindray",
  "partner_image": "/Partners/mindray.jpg",
  "path": "https://www.mindray.com/"
},
{
  "id": 10,
  "partner_name": "Titan",
  "partner_image": "/Partners/titan.jpg",
  "path": "http://www.titan.co.in/"
},
{
  "id": 11,
  "partner_name": "Engineers India Ltd",
  "partner_image": "/Partners/EIL.png",
  "path": "https://engineersindia.com/"
},
{
  "id": 12,
  "partner_name": "Exim Bank",
  "partner_image": "/Partners/Exim.jpg",
  "path": "https://www.eximbankindia.in/"
},
{
  "id": 13,
  "partner_name": "Federal Bank",
  "partner_image": "/Partners/fedarel.png",
  "path": "https://www.federalbank.co.in/"
},
{
  "id": 14,
  "partner_name": "National Thermal Power Corporation",
  "partner_image": "/Partners/NTPC.jpg",
  "path": "https://ntpc.co.in/"
},
{
  "id": 15,
  "partner_name": "Brahmaputra Crackers and Polymers Ltd",
  "partner_image": "/Partners/BCPL.jpg",
  "path": "https://bcplonline.co.in/"
}]

export const AcademicsContents = [
  {
    "id": 1,
    "Title": "",
    "Description": "Nursing Fellowship Programme (NFP) - a first-of-its-kind in Assam is building a cadre of professionals trained to specialise in oncology nursing to deliver high-quality cancer care.\n\nThe nurses at cancer facilities have a challenging and delicate responsibility and it requires a novel and empathetic approach towards patients. There is also a specific psychosocial need of patients as well as their immediate caregivers. To equip nurses with specialised knowledge and skills in cancer care and treatment, it was essential to train nursing talent so that they can become champions in the cancer care delivery system.\n\nNFP programme was launched in July 2020, by the Tata Trusts and Assam Cancer Care Foundation (ACCF). The eleven-month long programme offers cancer nursing, treatment modalities, palliative care nursing, communication and counselling, and leadership lessons.",
    "ImagePath": "/nfp/nfp1.jpg"
  },
  {
    "id": 2,
    "Title": "",
    "Description": "The nurses undergo intensive training by in-house master trainers and facilitators; the Foundation's Medical Oncologists, Radiation Oncologists, Surgical Oncologists and Palliative Care doctors; other Cancer Care professionals from BBCI Guwahati, TMH Mumbai and TMC Kolkata. Senior nursing professionals from India and abroad are also involved in programme design and implementation.\n\nThe specialised oncology nursing team will help ACCF bridge a key human resource gap in the ten cancer hospitals it is establishing in Assam. The programme is not in the scheduled list of Indian Nursing Council and is basically an upskilling initiative.\n\nFor information on the programme contact\ninfo@accf.in",
    "ImagePath": "/nfp/nfp2.jpg"
  }
]

export const SocialInfra = [
  {
    "id": 1,
    "Title": "Accommodation ( housing/ hotels)",
    "Description":["Long stay: Decent apartments at Dutta bhawan, like Luit View apartments, Jsb Ananda at pn road etc. and limited independent houses", "Short Stay: Good 3 star hotels like Hotel Tea County, Hotel Sarovar Portico, Tree Fern, Dibrugarh Club House, Raj Palace,Nataraj, Manohari Resorts etc."]
  },
  {
    "id": 2,
    "Title": "Education centres",
    "Description":["Good primary and secondary schools like DPS, Don Bosco, Little Flower School, VKV Dibrugarh, St. Xavier's School, Siksha Valley, Salt Brook Academy etc."]
  },
  {
    "id": 3,
    "Title": "Health facilities",
    "Description":["Good multispecialty Hospitals like Srishti Hospitals & Research Centre,Aditya, M.F. Hospital & Research Centre, Assam medical college etc."]
  },
  {
    "id": 4,
    "Title": "Air/ Road/ Rail Connectivity",
    "Description":["Air: Domestic Airport at Mohanbari", "Rail: 2 railway stations, at Dibrugarh town & Banipur"]
  },
  {
    "id": 5,
    "Title": "Restaurants",
    "Description":["Few fine dining restaurants like Yolo, KFC, Dominos, and good outing places like Food infinity, Atmosphere, El Dorado Bar & Restaurant, Hotel Garden Treat, May Flower, Bogibeel Eco Resort, Kanchunjunga (Floating Restaurant over Brahmaputra) etc."]
  },
  {
    "id": 6,
    "Title": "Malls/ Movie Halls",
    "Description":["Good Shopping centres like Sohum,Junction mall, Reliance Trends, Reliance Digital, Reliance Smart, Pantaloons, westside, Vishal, HS plaza and entertainment centres like, Galleria Cinema, Dibrugarh Gymkhana Club etc."]
  }
]

export const LatestVideos = [{
  "id": 1,
  "Title": "Integrated Robotic Surgery Facility",
  "Image": "/SCI/LatestVideos/robotic.jpeg",
  "Link": "/SCI/LatestVideos/SCI-OT.mp4",
  "duration": 0
}, {
  "id": 2,
  "Title": "A new chapter in cancer healing beings",
  "Image": "/SCI/LatestVideos/tvc.png",
  "Link": "/SCI/LatestVideos/TVC HINDI.MP4",
  "duration": 0
},
{
  "id": 3,
  "Title": "State of the Art Cancer Hospital in Guwahati",
  "Image": "/SCI/LatestVideos/new_hospital.png",
  "Link": "https://www.youtube.com/watch?v=xziy2MCp95U",
  "duration": 0
}, {
  "id": 4,
  "Title": `Gaath Pe Dhyan "Breast cancer awareness"`,
  "Image": "/SCI/LatestVideos/sanjeev_kapoor.png",
  "Link": "/SCI/LatestVideos/GPD.mp4",
  "duration": 0
}, {
  "id": 5,
  "Title": "Hon’ble Prime Minister, Shri Narendra Modi Dedicates & Lays Foundation Stone of Cancer Hospitals in Assam",
  "Image": "/SCI/LatestVideos/Bihu_Video.png",
  "Link": "https://www.youtube.com/watch?v=ptmiMutYI6I",
  "duration": 0
},
]