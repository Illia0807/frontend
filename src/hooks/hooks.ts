import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store/store.ts";


// Hook for using dispatch with the AppDispatch type
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed hook for useSelector with RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
