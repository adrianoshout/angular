
    export interface Categoria {
        id: number;
        nome: string;
    }

    export interface Sort {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    }

    export interface Pageable {
        sort: Sort;
        offset: number;
        pageNumber: number;
        pageSize: number;
        unpaged: boolean;
        paged: boolean;
    }

    export interface Sort2 {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    }

    export interface Page {
        content: Categoria[];
        pageable: Pageable;
        last: boolean;
        totalElements: number;
        totalPages: number;
        size: number;
        number: number;
        sort: Sort2;
        first: boolean;
        numberOfElements: number;
        empty: boolean;
    }

    export interface TermosDeUso {
        id: number;
        description: string;
    }

    export interface Politica {
        id: number;
        description: string;
    }

    export interface Contato {
        email: string;
        message: string;
        name: string;
    }



