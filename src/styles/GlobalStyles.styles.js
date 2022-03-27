import { createGlobalStyle } from 'styled-components';
import { Theme } from './Theme.styles';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${Theme.neutral[50]};
        margin: 0;
        padding: 0;
        font-family: ${Theme.inter};
        color: ${Theme.neutral[600]};

        & * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: 0.3s;
        }

        h1 {
            font-size: 28px;
            font-weight: 600;
        }

        h3 {
            font-weight: 500;
            font-size: 20px;
        }

        p {
            font-size: 16px;
            font-weight: 400;
        }
    }
`;
