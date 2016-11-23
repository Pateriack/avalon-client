export const ROLE_GOOD = 'ROLE_GOOD'
export const ROLE_EVIL = 'ROLE_EVIL'
export const ROLE_MERLIN = 'ROLE_MERLIN'
export const ROLE_ASSASSIN = 'ROLE_ASSASSIN'
export const ROLE_PERCIVAL = 'ROLE_PERCIVAL'
export const ROLE_MORGANA = 'ROLE_MORGANA'
export const ROLE_MORDRED = 'ROLE_MORDRED'
export const ROLE_OBERON = 'ROLE_OBERON'

export function roleToText(role) {
    switch(role) {
        case ROLE_GOOD:
        case ROLE_EVIL:
            return null
        case ROLE_MERLIN:
            return 'Merlin'
        case ROLE_ASSASSIN:
            return 'Assassin'
        case ROLE_PERCIVAL:
            return 'Percival'
        case ROLE_MORGANA:
            return 'Morgana'
        case ROLE_MORDRED:
            return 'Mordred'
        case ROLE_OBERON:
            return 'Oberon'
    }
}

export function roleToSubtext(role) {
    switch(role) {
        case ROLE_GOOD:
            return 'Loyal Servant of Arthur'
        case ROLE_EVIL:
            return 'Minion of Mordred'
        case ROLE_MERLIN:
            return 'Knows evil, must remain hidden'
        case ROLE_ASSASSIN:
            return 'Minion of Mordred'
        case ROLE_PERCIVAL:
            return 'Knows Merlin'
        case ROLE_MORGANA:
            return 'Appears as Merlin'
        case ROLE_MORDRED:
            return 'Unknown to Merlin'
        case ROLE_OBERON:
            return 'Unknown to evil'
    }
}