import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./type";

const initialState: initialStateType = {
  userId: '',
  showLoader: false,
  keyInfo: {
    make: "",
    model: "",
    variant: "",
    registration: "",
    mileage: "",
    owners: "",
    images: [],
  },
  specification: "",
  serviceHistory: "",
  aboutCar: "",
  price: {
    asking_price: "",
    cap_clean: "",
    autorader_retail: "",
  },
  preparation: "",
};

const reviloSlice = createSlice({
  name: "Revilo",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    resetUser: (state) => {
      state.userId = '';
    },
    showLoaderToogler: (state) => {
      state.showLoader = !state.showLoader;
    },
    setKeyInfo: (state, action) => {
      const { make, model, variant, registration, mileage, owners, images } =
        action.payload;
      state.keyInfo.make = make;
      state.keyInfo.model = model;
      state.keyInfo.variant = variant;
      state.keyInfo.mileage = mileage;
      state.keyInfo.registration = registration;
      state.keyInfo.owners = owners;
      state.keyInfo.images = images.map((image: File) => image);
    },
    setAboutCar: (state, action) => {
      state.aboutCar = action.payload;
    },
    setServiceHistory: (state, action) => {
      state.serviceHistory = action.payload;
    },
    setSpecification: (state, action) => {
      state.specification = action.payload;
    },
    setPreparation: (state, action) => {
      state.preparation = action.payload;
    },
    setPrice: (state, action) => {
      const { asking_price, cap_clean, autorader_retail } = action.payload;
      state.price.asking_price = asking_price;
      state.price.cap_clean = cap_clean;
      state.price.autorader_retail = autorader_retail;
    },
    reset: (state) => {
        console.log(state.showLoader,state.keyInfo,state.specification,state.serviceHistory,state.aboutCar,state.price,state.preparation)
        state.showLoader = false;
        state.keyInfo = {
            make: "",
            model: "",
            variant: "",
            registration: "",
            mileage: "",
            owners: "",
            images: [],
        };
        state.specification = "";
        state.serviceHistory = "";
        state.aboutCar = "";
        state.price = {
            asking_price: "",
            cap_clean: "",
            autorader_retail: "",
        };
        state.preparation = "";
    }
  },
});

const reviloActions = reviloSlice.actions;

export { reviloActions, reviloSlice };
