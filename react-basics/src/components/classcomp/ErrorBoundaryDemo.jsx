import React, { Component } from 'react'
import ErrorCmp from './ErrorCmp'
import ErrorBoundary from './ErrorBoundary'

export default class ErrorBoundaryDemo extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
            <ErrorCmp username="Ram"/>
        </ErrorBoundary>
        <ErrorBoundary>
            <ErrorCmp username="Jimit"/>
        </ErrorBoundary>
        <ErrorBoundary>
            <ErrorCmp username="Jokers"/>
        </ErrorBoundary>
    
      </div>
    )
  }
}
