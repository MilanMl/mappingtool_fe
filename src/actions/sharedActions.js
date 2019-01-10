import { CHANGE_NAVIGATION } from './actionTypes';

export function changeNavigation(currentLocation) {
    return {
        type: CHANGE_NAVIGATION,
        currentLocation
    }
}