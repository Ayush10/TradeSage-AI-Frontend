# CloudSage AI - Developer Documentation

This document provides detailed information about the codebase structure, component relationships, and guidelines for making changes.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Page Components](#page-components)
3. [Shared Components](#shared-components)
4. [State Management](#state-management)
5. [Making Changes](#making-changes)
6. [Component Dependencies](#component-dependencies)

## Project Structure

```
cloudsage-ai/
├── app/                    # Pages using Next.js 13 App Router
├── components/            # Reusable components
│   ├── ui/               # Base UI components from shadcn/ui
│   ├── charts/           # Chart components
│   ├── dashboard/        # Dashboard-specific components
│   ├── assets/          # Asset management components
│   ├── trade/           # Trading components
│   └── ...              # Other feature components
├── lib/                  # Utilities and configurations
└── hooks/               # Custom React hooks
```

## Page Components

### 1. Dashboard Page (`app/page.tsx`)
- **Main Components Used**:
  - `ActivityChart`
  - `AssetsList`
  - `TransactionList`
- **State Management**: Uses local state for chart data and timeframes
- **Key Areas for Modification**:
  ```typescript
  // Portfolio value section in ActivityChart
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-lg font-medium">My Activity</h3>
    <div className="text-right">
      <p className="text-sm text-muted-foreground">Portfolio Value</p>
      <p className="text-2xl font-semibold">$247,892.89</p>
    </div>
  </div>
  ```

### 2. Assets Page (`app/assets/page.tsx`)
- **Main Components**:
  - `PortfolioOverview`
  - `AssetTable`
  - `AssetFilters`
  - `AssetAllocation`
  - `AIRecommendations`
- **State Management**: Uses local state for filters and selected asset type
- **Modification Points**:
  - Asset types array at the top
  - Filter visibility toggle
  - Grid layout structure

### 3. Trading Page (`app/trading/page.tsx`)
- **Components Used**:
  - `TradingChart`
  - `OrderForm`
  - `OrderBook`
  - `RecentTrades`
- **Key Areas**:
  - Trading pair selection
  - Order form validation
  - Real-time updates

## Shared Components

### 1. Chart Components (`components/charts/`)

#### LineChart (`line-chart.tsx`)
```typescript
// Usage:
<LineChart 
  data={[
    { time: string; value: number; }
  ]} 
/>

// Customization points:
- Chart colors in tailwind.config.ts
- Chart dimensions in component props
- Tooltip styling
```

#### CandlestickChart (`candlestick-chart.tsx`)
```typescript
// Data structure:
interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

// Usage:
<CandlestickChart data={candlestickData} />
```

### 2. Asset Components (`components/assets/`)

#### AssetTable (`asset-table.tsx`)
- Displays asset list with filtering
- Modify `assets` object to change displayed data
- Add new columns by updating TableHeader and TableRow

#### PortfolioOverview (`portfolio-overview.tsx`)
- Shows portfolio metrics and allocation
- Customizable metrics array
- PieChart integration for allocation

## State Management

### 1. Authentication (`hooks/use-auth.tsx`)
- JWT-based authentication
- User context provider
- Protected route handling

### 2. Theme Management (`components/theme-provider.tsx`)
- Dark/light mode switching
- Theme persistence
- Custom theme configuration

## Making Changes

### 1. Adding New Features
1. Create component in appropriate directory
2. Add to relevant page
3. Update types if necessary
4. Add to navigation if needed

### 2. Modifying Existing Features
1. Locate component in component directory
2. Check for dependencies in parent components
3. Update related types and interfaces
4. Test changes in all themes

### 3. Styling Changes
1. Check `tailwind.config.ts` for global styles
2. Use `cn()` utility for conditional classes
3. Follow existing component patterns

## Component Dependencies

### Dashboard
```
Dashboard
├── ActivityChart
│   ├── LineChart
│   └── CandlestickChart
├── AssetsList
└── TransactionList
```

### Assets
```
AssetsPage
├── PortfolioOverview
│   └── PieChart
├── AssetTable
├── AssetFilters
├── AssetAllocation
│   └── PieChart
└── AIRecommendations
```

### Trading
```
TradingPage
├── TradingChart
├── OrderForm
├── OrderBook
└── RecentTrades
```

## Common Modifications

### 1. Adding New Asset Type
1. Update `assetTypes` array in `app/assets/page.tsx`
2. Add type to `assets` object in `components/assets/asset-table.tsx`
3. Update filtering logic if necessary

### 2. Modifying Charts
1. Update chart data structure in relevant component
2. Modify chart configuration in component
3. Update mock data generation if using demo data

### 3. Adding New Features
1. Create new component in appropriate directory
2. Add to relevant page component
3. Update navigation if needed
4. Add to component dependencies documentation

## Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use composition over inheritance
   - Follow single responsibility principle

2. **State Management**
   - Use local state for UI-specific state
   - Context for shared state
   - Props for component configuration

3. **Performance**
   - Memoize expensive calculations
   - Use dynamic imports for large components
   - Optimize re-renders with useMemo/useCallback

4. **Styling**
   - Use Tailwind utility classes
   - Follow existing component patterns
   - Maintain dark/light theme compatibility

## Testing Changes

1. Run development server:
```bash
npm run dev
```

2. Check both themes:
   - Toggle between dark/light modes
   - Verify component styling

3. Test responsive layouts:
   - Check mobile view
   - Verify tablet layouts
   - Test desktop view

4. Verify data flow:
   - Check state updates
   - Verify API interactions
   - Test error handling

## Deployment

1. Build application:
```bash
npm run build
```

2. Test production build:
```bash
npm start
```

3. Verify:
   - All routes working
   - Assets loading correctly
   - No console errors

Remember to update this documentation when making significant changes to the codebase structure or adding new features.