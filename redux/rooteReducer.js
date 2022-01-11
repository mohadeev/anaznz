import { combineReducers } from '@reduxjs/toolkit'
import ShoppingReducers from './Shopping/ShoppingReducers'

export const rooteReducer = combineReducers({ ShoppingReducers });

