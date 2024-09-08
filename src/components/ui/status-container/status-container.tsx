import { ReactNode } from 'react';

interface StatusContainerProps {
    children: ReactNode;
    isActive?: boolean;
    isLastActive?: boolean;
}

export function StatusContainer({
    children,
    isActive = false,
}: StatusContainerProps) {
    return (
        <div className={`status-container${isActive ? ' active': ''}`}>
            {children}
        </div>
    );
}