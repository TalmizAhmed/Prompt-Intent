import { cn } from '@/lib/utils'
import logoSvg from '@/assets/logo.svg'

export const Logo = ({
    className
}) => {
    return (
        <img
            src={logoSvg}
            alt="Prompt Intent"
            className={cn('h-8 w-auto', className)}
        />
    );
}
