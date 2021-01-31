import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { MissionModel } from '@space-explorer/types';
import { PatchSize } from '@space-explorer/graphql';

@Resolver('Mission')
export class MissionResolver {
  @ResolveField()
  missionPatch(@Parent() mission: MissionModel, @Args('size') size: PatchSize) {
    switch (size) {
      case PatchSize.SMALL:
        return mission.missionPatchSmall;
      case PatchSize.LARGE:
        return mission.missionPatchLarge;
      default:
        return null;
    }
  }
}
