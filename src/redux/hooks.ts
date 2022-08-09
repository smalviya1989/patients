import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from './patientStore'
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector