import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  color: white;
`;

export const CardWrapper = styled.div`
display: flex;
  margin: 15px 0;
  justify-content: center;
  }
`;

export const CardWrapperBox = styled.div`
  display: flex;
  }
`;

export const InfoBox = styled.div`
  flex: 1;
  min-width: 280px;

  h1 {
    text-transform: capitalize;
  }
`;

export const TypeGroup = styled.div`
  margin: 15px 0;

  .types-list {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }
`;

export const TypeBadge = styled.span`
  padding: 4px 12px;
  border-radius: 12px;
  background-color: #333;
  text-transform: capitalize;
`;

export const StatsGroup = styled.div`
  margin: 15px 0;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
    
    strong {
      text-transform: capitalize;
    }
  }
`;
