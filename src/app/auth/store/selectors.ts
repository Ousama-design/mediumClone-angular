import { createFeatureSelector } from "@ngrx/store";
import { appStateInterface } from "src/app/shared/types/appState.interface";
import { authStateInterface } from "../types/authState.interface";

export const authFeatureSelector=createFeatureSelector<appStateInterface,authStateInterface>('auth')