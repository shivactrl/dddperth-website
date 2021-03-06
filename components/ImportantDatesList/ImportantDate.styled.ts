import isPropValid from '@emotion/is-prop-valid'
import { Types } from 'config/types'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'
import { conditionalStyles } from 'components/utils/styles/conditionalStyles'
import styled, { Theme } from 'components/utils/styles/theme'
import { ImportantDateListLayouts } from './importantDatesList'

function dateBorderColor(theme: Theme, dateType: Types) {
  switch (dateType) {
    case 'voting':
      return theme.colors.tertiary
    case 'tickets':
      return theme.colors.tickets
    case 'agenda':
      return theme.colors.darkGrey
    case 'conference':
      return theme.colors.primary
    default:
      return theme.colors.secondary
  }
}

interface LayoutProp {
  layout: ImportantDateListLayouts
}

export const StyledImportantDateList = styled('ul')<LayoutProp>(({ layout }) => ({
  listStyle: 'none',
  ...conditionalStyles(layout === 'calendar', {
    display: 'flex',
    flexWrap: 'wrap',
  }),
}))

interface StyledImportantDateProps {
  dateType: Types
  isFinished?: boolean
}

const ImportantDateBorderWidth = 7

export const StyledImportantDate = styled('li', {
  shouldForwardProp: isPropValid,
})<StyledImportantDateProps>(({ theme, dateType }) => ({
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: '100%',
  margin: '0 1% 0',
  marginTop: calcRem(theme.metrics.md),
  padding: calcRem(theme.metrics.md, theme.metrics.md, theme.metrics.sm),
  backgroundColor: '#f0f0f0',
  borderWidth: 0,
  borderBottom: `${ImportantDateBorderWidth}px solid ${dateBorderColor(theme, dateType)}`,
  textAlign: 'left',

  [breakpoint('xs')]: {
    flexBasis: '48%',
  },

  [breakpoint('sm')]: {
    flexBasis: '31%',
  },

  [breakpoint('lg')]: {
    flexBasis: '23%',
  },
}))

export const StyledImportantDateInline = styled('li', {
  shouldForwardProp: isPropValid,
})<StyledImportantDateProps>(({ theme, dateType, isFinished }) => ({
  position: 'relative',
  padding: calcRem(10, isFinished ? 40 : 4, 10, 15),
  marginBottom: calcRem(10),
  backgroundColor: '#f0f0f0',
  borderWidth: 0,
  borderRight: `${ImportantDateBorderWidth}px solid ${dateBorderColor(theme, dateType)}`,
  textAlign: 'left',
}))
StyledImportantDateInline.displayName = 'StyledImportantDateInline'

interface StyledImportantDateContentProps {
  isFinished?: boolean
}
export const StyledImportantDateContent = styled('div', {
  shouldForwardProp: isPropValid,
})<StyledImportantDateContentProps>(({ isFinished }) => ({
  opacity: isFinished && 0.3,
}))
StyledImportantDateContent.displayName = 'StyledImportantDateContent'

export const StyledImportantDateTitle = styled('h3')({
  margin: 0,
  fontSize: calcRem(14),
  fontWeight: 400,
})
StyledImportantDateTitle.displayName = 'StyledImportantDateTitle'

export const StyledImportantDay = styled('span')({
  display: 'block',
  fontSize: calcRem(14),
  fontWeight: 400,

  [breakpoint('md')]: {
    fontSize: calcRem(22),
  },

  [breakpoint('xl')]: {
    fontSize: calcRem(24),
  },
})
StyledImportantDay.displayName = 'StyledImportantDay'

export const StyledImportantDateMonthDay = styled('span')({
  display: 'block',
  marginBottom: calcRem(10),
  fontSize: calcRem(28),
  fontWeight: 700,
  lineHeight: 1,
})
StyledImportantDateMonthDay.displayName = 'StyledImportantDateMonthDay'

export const StyledImportantDateTime = styled('span')({
  display: 'block',
  margin: 0,
  fontWeight: 700,
})
StyledImportantDateTime.displayName = 'StyledImportantDateTime'

export const StyledDoneIcon = styled('span')(({ theme }) => ({
  position: 'absolute',
  right: 20,
  top: 25,
  width: 30,
  height: 30,
  lineHeight: '30px',
  borderRadius: '50%',
  backgroundColor: theme.colors.primary,
  textAlign: 'center',

  '&::before': {
    content: "'\f00c'",
    fontFamily: "'FontAwesome'",
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },

  [breakpoint('md')]: {
    right: 20,
    top: 35,
    width: 35,
    height: 35,
    lineHeight: '37px',

    '&::before': {
      fontSize: 22,
    },
  },

  [breakpoint('lg')]: {
    right: 20,
    top: 37,
    width: 37,
    height: 37,
    lineHeight: '39px',
  },

  [breakpoint('xl')]: {
    right: 20,
    top: 40,
    width: 40,
    height: 40,
    lineHeight: '40px',
  },
}))
StyledDoneIcon.displayName = 'StyledDoneIcon'

export const StyledDoneIconInline = styled('span')(({ theme }) => ({
  position: 'absolute',
  right: 16,
  top: 15,
  width: 30,
  height: 30,
  lineHeight: '30px',
  borderRadius: '50%',
  backgroundColor: theme.colors.primary,
  textAlign: 'center',

  '&::before': {
    content: "'\f00c'",
    fontFamily: "'FontAwesome'",
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
}))
StyledDoneIconInline.displayName = 'StyledDoneIconInline'

export const StyledInlineDate = styled('p')({
  margin: 0,
  fontSize: calcRem(14),
  fontWeight: 700,

  [breakpoint('sm')]: {
    fontSize: calcRem(15),
  },

  [breakpoint('lg')]: {
    fontSize: calcRem(16),
  },
})
StyledInlineDate.displayName = 'StyledInlineDate'

export const StyledInlineTimeDescription = styled('p')({
  margin: calcRem(2, 0, 0),
  fontSize: calcRem(14),

  [breakpoint('sm')]: {
    fontSize: calcRem(15),
  },

  [breakpoint('lg')]: {
    fontSize: calcRem(16),
  },
})
StyledInlineTimeDescription.displayName = 'StyledInlineTimeDescription'

// TODO: Remove once BootStrap is
export const StyledAbbr = styled('abbr')({
  '&[title]': {
    textDecoration: 'none',
    borderBottom: 0,
  },
})
StyledAbbr.displayName = 'StyledAbbr'
