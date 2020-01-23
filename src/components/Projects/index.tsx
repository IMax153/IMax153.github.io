import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RepoForked } from 'styled-icons/octicons/RepoForked';
import { Star } from 'styled-icons/octicons/Star';

import { Anchor } from '../Anchor';
import {
  ProjectsContainer,
  Grid,
  Repository,
  RepositoryCard,
  RepositoryContent,
  RepositoryStats,
  RepositoryStat,
} from './styles';

interface Props {}

export const Projects: React.FC<Props> = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(isFork: false, first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `,
  );

  return (
    <ProjectsContainer id="projects">
      <h2>My Projects</h2>
      <Grid>
        {/*
         // @ts-ignore */}
        {edges.map(({ node }) => (
          <Repository key={node.id}>
            <RepositoryCard>
              <RepositoryContent>
                <Anchor href={node.url} aria-label="Check out my projects on Github" external>
                  {node.name}
                </Anchor>
                <p>{node.description}</p>
              </RepositoryContent>

              <RepositoryStats>
                <RepositoryStat>
                  <Star size="14" />
                  <p>{node.forkCount}</p>
                </RepositoryStat>
                <RepositoryStat>
                  <RepoForked size="14" />
                  <p>{node.stargazers.totalCount}</p>
                </RepositoryStat>
              </RepositoryStats>
            </RepositoryCard>
          </Repository>
        ))}
      </Grid>
    </ProjectsContainer>
  );
};

Projects.displayName = 'Projects';
