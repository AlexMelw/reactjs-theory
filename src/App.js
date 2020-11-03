import './App.css';
import React from 'react';
import { FilterableProductTable } from './FilterableProductTable';
import { ErrorBoundary } from './BoundariesExample';

export default () => (
    <>
        <ErrorBoundary>
            <FilterableProductTable />
        </ErrorBoundary>
    </>
);
