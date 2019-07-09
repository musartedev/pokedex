import React from 'react';
import { Grid, Search, Radio } from 'semantic-ui-react';

export default function SearchBar(props) {
  const { value, onSearchChange, onlyFavorites, onSliderChange } = props;
  return (
    <Grid>
      <Grid.Column widescreen={8} mobile={8} largeScreen={8}>
        <Search
          aligned="right"
          onSearchChange={onSearchChange}
          input={{ fluid: true }}
          showNoResults={false}
          placeholder="Type for search..."
          value={value}
        />
      </Grid.Column>
      <Grid.Column
        widescreen={8}
        mobile={8}
        largeScreen={8}
        verticalAlign="middle"
      >
        <Radio
          slider
          type="checkbox"
          checked={onlyFavorites}
          onChange={onSliderChange}
        />
        <span style={{ marginLeft: '1em' }}>Show only Favorites</span>
      </Grid.Column>
    </Grid>
  );
}
