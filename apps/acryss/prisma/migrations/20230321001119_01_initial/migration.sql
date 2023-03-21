-- CreateEnum
CREATE TYPE "player_task_type" AS ENUM ('research');

-- CreateEnum
CREATE TYPE "vehicle_task_type" AS ENUM ('building', 'settle', 'roundtrip', 'spy');

-- CreateEnum
CREATE TYPE "planet_task_type" AS ENUM ('building', 'shipyard', 'space_shipyard');

-- CreateTable
CREATE TABLE "user" (
    "id" BIGINT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "universe" (
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "systems" INTEGER NOT NULL,

    CONSTRAINT "universe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player" (
    "id" BIGSERIAL NOT NULL,
    "universe" BIGINT NOT NULL,
    "user" BIGINT NOT NULL,
    "points" BIGINT NOT NULL DEFAULT 0,
    "research_energy" SMALLINT NOT NULL DEFAULT 0,
    "research_electromagnet" SMALLINT NOT NULL DEFAULT 0,
    "research_laser" SMALLINT NOT NULL DEFAULT 0,
    "research_ion" SMALLINT NOT NULL DEFAULT 0,
    "research_plasma" SMALLINT NOT NULL DEFAULT 0,
    "research_combustion_drive" SMALLINT NOT NULL DEFAULT 0,
    "research_ion_drive" SMALLINT NOT NULL DEFAULT 0,
    "research_impulse_drive" SMALLINT NOT NULL DEFAULT 0,
    "research_warp_drive" SMALLINT NOT NULL DEFAULT 0,
    "research_espionage" SMALLINT NOT NULL DEFAULT 0,
    "research_computing" SMALLINT NOT NULL DEFAULT 0,
    "research_attack" SMALLINT NOT NULL DEFAULT 0,
    "research_shield" SMALLINT NOT NULL DEFAULT 0,
    "research_hull" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planet" (
    "id" BIGSERIAL NOT NULL,
    "planet" INTEGER NOT NULL,
    "universe" BIGINT NOT NULL,
    "owner" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "colonized_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resource_metal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "resource_crystal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "resource_hydrogen" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "resource_energy" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "resource_electron_plasma" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "resource_last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "building_quarry" SMALLINT NOT NULL DEFAULT 0,
    "building_mine" SMALLINT NOT NULL DEFAULT 0,
    "building_hydrogen_generator" SMALLINT NOT NULL DEFAULT 0,
    "building_geothermal_generator" SMALLINT NOT NULL DEFAULT 0,
    "building_fusion_reactor" SMALLINT NOT NULL DEFAULT 0,
    "building_condensation_centre" SMALLINT NOT NULL DEFAULT 0,
    "facility_robot_factory" SMALLINT NOT NULL DEFAULT 0,
    "facility_advanced_factory" SMALLINT NOT NULL DEFAULT 0,
    "facility_shipyard" SMALLINT NOT NULL DEFAULT 0,
    "facility_space_shipyard" SMALLINT NOT NULL DEFAULT 0,
    "facility_research_centre" SMALLINT NOT NULL DEFAULT 0,
    "defense_railgun_turret" INTEGER NOT NULL DEFAULT 0,
    "defense_laser_turret" INTEGER NOT NULL DEFAULT 0,
    "defense_vanguard_turret" INTEGER NOT NULL DEFAULT 0,
    "defense_ion_turret" INTEGER NOT NULL DEFAULT 0,
    "defense_kinetic_cannon" INTEGER NOT NULL DEFAULT 0,
    "defense_naeria_turret" INTEGER NOT NULL DEFAULT 0,
    "defense_shield_dome" INTEGER NOT NULL DEFAULT 0,
    "defense_heavy_shield_dome" INTEGER NOT NULL DEFAULT 0,
    "vehicle_cargo_ship" INTEGER NOT NULL DEFAULT 0,
    "vehicle_heavy_cargo_ship" INTEGER NOT NULL DEFAULT 0,
    "vehicle_interceptor_jet" INTEGER NOT NULL DEFAULT 0,
    "vehicle_hiivii" INTEGER NOT NULL DEFAULT 0,
    "vehicle_espionage_probe" INTEGER NOT NULL DEFAULT 0,
    "vehicle_fighter" INTEGER NOT NULL DEFAULT 0,
    "vehicle_advanced_fighter" INTEGER NOT NULL DEFAULT 0,
    "vehicle_cruiser" INTEGER NOT NULL DEFAULT 0,
    "vehicle_battleship" INTEGER NOT NULL DEFAULT 0,
    "vehicle_battlecruiser" INTEGER NOT NULL DEFAULT 0,
    "vehicle_bomber" INTEGER NOT NULL DEFAULT 0,
    "vehicle_destroyer" INTEGER NOT NULL DEFAULT 0,
    "vehicle_ballista_bomber" INTEGER NOT NULL DEFAULT 0,
    "vehicle_ballista_destroyer" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_task" (
    "id" BIGSERIAL NOT NULL,
    "player" BIGINT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "type" "player_task_type" NOT NULL,
    "item" SMALLINT NOT NULL,
    "item_count" INTEGER NOT NULL,

    CONSTRAINT "player_task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_task" (
    "id" BIGSERIAL NOT NULL,
    "planet_from" BIGINT NOT NULL,
    "planet_to" BIGINT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "type" "vehicle_task_type" NOT NULL,

    CONSTRAINT "vehicle_task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_task_payload" (
    "id" BIGSERIAL NOT NULL,
    "task" BIGINT,
    "player" BIGINT NOT NULL,
    "vehicle" SMALLINT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "vehicle_task_payload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_task_cargo" (
    "id" BIGSERIAL NOT NULL,
    "task" BIGINT,
    "player" BIGINT NOT NULL,
    "resource_metal" DOUBLE PRECISION NOT NULL,
    "resource_crystal" DOUBLE PRECISION NOT NULL,
    "resource_hydrogen" DOUBLE PRECISION NOT NULL,
    "resource_electron_plasma" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "vehicle_task_cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planet_task" (
    "id" BIGSERIAL NOT NULL,
    "planet" BIGINT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "type" "planet_task_type" NOT NULL,
    "item" SMALLINT NOT NULL,
    "item_count" INTEGER NOT NULL,

    CONSTRAINT "planet_task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "planet_planet_universe_key" ON "planet"("planet", "universe");

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_universe_fkey" FOREIGN KEY ("universe") REFERENCES "universe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_user_fkey" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planet" ADD CONSTRAINT "planet_universe_fkey" FOREIGN KEY ("universe") REFERENCES "universe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planet" ADD CONSTRAINT "planet_owner_fkey" FOREIGN KEY ("owner") REFERENCES "player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_task" ADD CONSTRAINT "player_task_player_fkey" FOREIGN KEY ("player") REFERENCES "player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_task" ADD CONSTRAINT "vehicle_task_planet_from_fkey" FOREIGN KEY ("planet_from") REFERENCES "planet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_task" ADD CONSTRAINT "vehicle_task_planet_to_fkey" FOREIGN KEY ("planet_to") REFERENCES "planet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_task_payload" ADD CONSTRAINT "vehicle_task_payload_task_fkey" FOREIGN KEY ("task") REFERENCES "vehicle_task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_task_payload" ADD CONSTRAINT "vehicle_task_payload_player_fkey" FOREIGN KEY ("player") REFERENCES "player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_task_cargo" ADD CONSTRAINT "vehicle_task_cargo_task_fkey" FOREIGN KEY ("task") REFERENCES "vehicle_task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_task_cargo" ADD CONSTRAINT "vehicle_task_cargo_player_fkey" FOREIGN KEY ("player") REFERENCES "player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planet_task" ADD CONSTRAINT "planet_task_planet_fkey" FOREIGN KEY ("planet") REFERENCES "planet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
