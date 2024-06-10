const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { LoyaltyUser, Permissions } from './enums'

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + 
    reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number) {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

// function add(firstValue, secondValue) {
//     let result
//     if (typeof firstValue === 'number' && typeof secondValue === 'number') {
//         result = firstValue + secondValue
//     }
//     if (typeof firstValue === 'string' && typeof secondValue === 'string') {
//         result = firstValue + ' ' + secondValue
//     }
//     if (typeof firstValue === 'number' && typeof secondValue === 'string') {
//         console.log('cannot perform this addition')
//     }
//     if (typeof firstValue === 'string' && typeof secondValue === 'number') {
//         console.log('cannot perform this addition')
//     }
// }