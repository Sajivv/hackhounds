import { Avatar } from 'theme-ui'

export default ({ size = 32, light = false, ...props }) => (
  <Avatar
    sx={{
      transition: 'transform .25s ease-in-out',
      '&:hover': { transform: 'scale(1.25)' }
    }}
    {...props}
    src={'/loyola/HackHoundsLogo.png'}
    alt="HackHounds Avatar"
    width={size}
    height={size}
  />
)
